import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

// 從環境變數獲取資料庫連接信息
const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'timescaledb', // 資料庫名稱
  process.env.DATABASE_USER || 'postgres', // 預設的 PostgreSQL 用戶
  process.env.DATABASE_PASSWORD || 'password', // 密碼
  {
    host: process.env.DATABASE_HOST || 'localhost', // DB 伺服器
    port: parseInt(process.env.DATABASE_PORT || '5433'), // 修改預設端口為 5432
    dialect: 'postgres',
    dialectOptions: {
      ssl: false, // TimescaleDB 本地運行時不需要 SSL
    },
    logging: console.log, // 修改為正確的 logging 設定
  }
);

// 測試連線
sequelize
  .authenticate()
  .then(() => console.log('✅ Connected to TimescaleDB'))
  .catch((err) => console.error('❌ Unable to connect:', err));

export default sequelize;
