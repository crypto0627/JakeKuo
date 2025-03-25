// app/ApolloProviderWrapper.tsx
'use client';

import client from '@/lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ApolloProviderWrapper({ children }: Props) {
  return <ApolloProvider client={client()}>{children}</ApolloProvider>;
}
