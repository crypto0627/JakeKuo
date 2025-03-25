import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// 設置本地 GraphQL 端點
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // 設置為 SSR（伺服器端渲染）模式
    link: new HttpLink({
      uri: 'http://localhost:4000/graphql', // 本地 GraphQL 端點
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
