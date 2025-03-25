import { GraphQLSchema } from 'graphql';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import sequelize from './db/connection';
import { schema } from './graphql/schema';

const yoga = createYoga({
  schema: schema as GraphQLSchema,
  context: () => ({ sequelize }), // 傳遞 Sequelize 連線
});

const server = createServer(yoga);
server.listen(4000, () => {
  console.info('🚀 Server is running on http://localhost:4000/graphql');
})
