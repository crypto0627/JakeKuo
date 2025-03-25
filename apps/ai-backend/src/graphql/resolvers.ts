// src/graphql/resolvers.ts
import { parse } from 'graphql';
import { QueryTypes } from 'sequelize';
import { processPrompt } from '../ai/langchain';
import sequelize from '../db/connection';
import { EthereumDataPoint, EthereumQueryArgs, MetricType, TimeInterval } from '../types/schema-type';

export const resolvers = {
  Query: {
    async ethereumData(_: any, args: EthereumQueryArgs): Promise<EthereumDataPoint[]> {
      const { metric, interval, startTime, endTime } = args;
      const timeBucket = interval === "HOURLY" ? "1 hour" : "1 day";

      const query = `
        SELECT 
          time_bucket(:timeBucket, timestamp) AS bucket, 
          AVG(value) AS avg_value
        FROM ethereum_metrics
        WHERE metric_type = :metric
          AND timestamp BETWEEN :startTime AND :endTime
        GROUP BY bucket
        ORDER BY bucket ASC;
      `;

      const replacements = { metric, startTime, endTime, timeBucket };

      console.log('執行查詢:', query);
      console.log('參數值:', replacements);

      try {
        const rows: any[] = await sequelize.query(query, {
          replacements,
          type: QueryTypes.SELECT,
        });

        if (!rows || rows.length === 0) {
          console.warn(`未找到符合條件的數據: metric=${metric}, interval=${interval}, startTime=${startTime}, endTime=${endTime}`);
          return [];
        }

        console.log('查詢結果:', rows);

        return rows.map((row) => ({
          timestamp: new Date(row.bucket).toISOString(),
          value: parseFloat(row.avg_value),
        }));
      } catch (error: any) {
        console.error('數據庫查詢錯誤:', error.message);
        throw new Error(`Failed to fetch Ethereum data: ${error.message}`);
      }
    },
    
    // 新增自然語言查詢解析器
    async nlQuery(_: any, { query }: { query: string }): Promise<any> {
      try {
        // 使用 LangChain 處理自然語言查詢
        console.log('處理自然語言查詢:', query);
        const graphqlQuery = await processPrompt(query);
        
        // 記錄生成的查詢以便調試
        console.log('LangChain 生成的 GraphQL 查詢:', graphqlQuery);
        
        // 檢查生成的查詢是否為空或包含非預期字符
        if (!graphqlQuery || graphqlQuery.trim() === '' || graphqlQuery.includes('<')) {
          throw new Error('生成的 GraphQL 查詢無效或包含非法字符');
        }
        
        // 解析生成的 GraphQL 查詢
        const parsedQuery = parse(graphqlQuery);
        
        // 從解析的查詢中提取參數
        // 注意：這裡需要根據實際生成的查詢結構進行調整
        const queryNode = parsedQuery.definitions[0];
        
        if (queryNode.kind === 'OperationDefinition' && 
            queryNode.selectionSet.selections[0].kind === 'Field' &&
            queryNode.selectionSet.selections[0].name.value === 'ethereumData') {
          
          const ethereumDataField = queryNode.selectionSet.selections[0];
          const args: EthereumQueryArgs = {
            metric: 'GAS_PRICE' as MetricType, // 提供默认值
            interval: 'DAILY' as TimeInterval, // 提供默认值
            startTime: '',
            endTime: ''
          };
          
          // 提取參數
          if (ethereumDataField.arguments) {
            ethereumDataField.arguments.forEach(arg => {
              const name = arg.name.value;
              const value = arg.value.kind === 'EnumValue' 
                ? arg.value.value 
                : arg.value.kind === 'StringValue' 
                  ? arg.value.value 
                  : null;
                  
              if (name === 'metric' && value) args.metric = value as MetricType;
              if (name === 'interval' && value) args.interval = value as TimeInterval;
              if (name === 'startTime') args.startTime = value || '';
              if (name === 'endTime') args.endTime = value || '';
            });
          }
          
          // 使用提取的參數調用 ethereumData 解析器
          return resolvers.Query.ethereumData(_, args);
        }
        
        throw new Error('無法解析生成的 GraphQL 查詢');
      } catch (error: any) {
        console.error('自然語言查詢處理錯誤:', error.message);
        console.error('錯誤詳情:', error);
        if (error.message.includes('Syntax Error')) {
          throw new Error(`GraphQL 語法錯誤: ${error.message}. 請檢查 LLM 生成的查詢格式是否正確。`);
        }
        throw new Error(`處理自然語言查詢失敗: ${error.message}`);
      }
    }
  },
};
