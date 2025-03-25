// src/ai/langchain.ts
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/ollama";
import dotenv from 'dotenv';

dotenv.config();

// 初始化 ChatOpenAI 模型
const llm = new ChatOllama({
  model: 'gemma3:4b',
  temperature: 0,
});

// 定義 GraphQL schema 模板
const schema = `query {{
  ethereumData(
    metric: METRIC_TYPE,
    interval: TIME_INTERVAL,
    startTime: "YYYY-MM-DDT00:00:00Z",
    endTime: "YYYY-MM-DDT23:59:59Z"
  ) {{
    timestamp
    value
  }}
}}`;

// 定義系統提示模板
const systemTemplate = `
你是一個專門將自然語言轉換為 GraphQL 查詢的助手。

你需要將用戶的自然語言查詢轉換為以下固定格式的 GraphQL 查詢：

{{schema}}

其中：
- METRIC_TYPE 可以是 PRICE, VOLUME, 或 MAX_TRANSACTION
- TIME_INTERVAL 可以是 HOURLY, DAILY, 或 WEEKLY
- 日期格式必須是 ISO 8601 格式 (YYYY-MM-DDT00:00:00Z)

範例：
輸入: "Show me the average price of Ethereum on March 18, 2025."
輸出:
query {{
  ethereumData(
    metric: PRICE,
    interval: DAILY,
    startTime: "2025-03-18T00:00:00Z",
    endTime: "2025-03-18T23:59:59Z"
  ) {{
    timestamp
    value
  }}
}}

你的回應必須只包含 GraphQL 查詢，不要包含任何解釋、標記或其他文字。
`;

// 定義人類提示模板
const humanTemplate = "{userQuery}";

// 創建提示模板
const prompt = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate],
  ["human", humanTemplate]
]);

// 創建輸出解析器
const outputParser = new StringOutputParser();

// 創建鏈
const chain = prompt.pipe(llm).pipe(outputParser);

// 處理用戶提示並返回結果
export async function processPrompt(userQuery: string): Promise<string> {
  try {
    const response = await chain.invoke({
      schema,
      userQuery
    });
    
    let formattedResponse = response.trim();
    formattedResponse = formattedResponse.replace(/```graphql|```/g, '').trim();
    
    return formattedResponse;
  } catch (error) {
    console.error("處理提示時出錯:", error);
    throw new Error(`無法處理查詢: ${error}`);
  }
}

// 重試生成查詢的函數
async function retryPrompt(userQuery: string): Promise<string> {
  const retrySystemTemplate = `
  你的任務是將自然語言查詢轉換為精確的 GraphQL 查詢格式。
  
  請嚴格按照以下格式生成查詢：
  
  query {{
    ethereumData(
      metric: METRIC_TYPE,
      interval: TIME_INTERVAL,
      startTime: "YYYY-MM-DDT00:00:00Z",
      endTime: "YYYY-MM-DDT23:59:59Z"
    ) {{
      timestamp
      value
    }}
  }}
  
  請確保你的回應只包含 GraphQL 查詢，沒有其他任何文字。
  `;
  
  const retryPrompt = ChatPromptTemplate.fromMessages([
    ["system", retrySystemTemplate],
    ["human", humanTemplate]
  ]);
  
  const retryChain = retryPrompt.pipe(llm).pipe(outputParser);
  
  const response = await retryChain.invoke({
    userQuery
  });
  
  return response.trim().replace(/```graphql|```/g, '').trim();
}
