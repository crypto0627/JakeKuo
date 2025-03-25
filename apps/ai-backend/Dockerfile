FROM node:20

WORKDIR /app

COPY ./pnpm-workspace.yaml ./
COPY package.json ./         
COPY pnpm-lock.yaml ./  
COPY turbo.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY ./apps/ai-backend /app/apps/ai-backend

WORKDIR /app/apps/ai-backend
RUN pnpm install

# 執行 TypeScript 編譯
RUN pnpm build  # ✅ 確保 `dist/` 存在

EXPOSE 4000
CMD ["pnpm", "dev"]