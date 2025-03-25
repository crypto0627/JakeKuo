import { GraphQLSchemaConfig } from 'graphql';
import { createSchema } from 'graphql-yoga';
import { resolvers } from './resolvers';

export const schema: GraphQLSchemaConfig = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      ethereumData(
        metric: MetricType!
        interval: TimeInterval!
        startTime: String!
        endTime: String!
      ): [EthereumDataPoint!]!
      
      nlQuery(query: String!): [EthereumDataPoint!]!
    }

    enum MetricType {
      PRICE
      VOLUME
      MAX_TRANSACTION
    }

    enum TimeInterval {
      HOURLY
      DAILY
      WEEKLY
    }

    type EthereumDataPoint {
      timestamp: String!
      value: Float!
    }

    type NLQueryResponse {
      timestamp: String!
      value: Float!
    }
  `,
  resolvers: {
    Query: {
      ethereumData: (_, { metric, interval, startTime, endTime }) => {
        return resolvers.Query.ethereumData(_, { metric, interval, startTime, endTime });
      },
      nlQuery: (_, { query }) => {
        return resolvers.Query.nlQuery(_, { query });
      }
    }
  }
});
