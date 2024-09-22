import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: '用户名', type: 'text' },
        password: { label: '密码', type: 'password' }
      },
      async authorize(credentials) {
        // 这里应该是您的实际验证逻辑
        if (
          credentials?.username === 'user' &&
          credentials?.password === 'password'
        ) {
          return { id: '1', name: '用户', email: 'user@example.com' }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
})

export { handler as GET, handler as POST }
