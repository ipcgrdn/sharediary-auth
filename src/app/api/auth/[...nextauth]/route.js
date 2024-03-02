import NextAuth from 'next-auth/next'
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

const handler = NextAuth({
    providers: [
        KakaoProvider({
          clientId: process.env.KAKAO_CLIENT_ID,
          clientSecret: process.env.KAKAO_CLIENT_SECRET,
        }),

        NaverProvider({
          clientId: process.env.NAVER_CLIENT_ID,
          clientSecret: process.env.NAVER_CLIENT_SECRET,
        }),
      ],
     
    callbacks: {
        async jwt({ token, account }) {
          if (account) {
            token.accessToken = account.access_token
          }
          return token
        },
        async session({ session, token, user }) {
          session.accessToken = token.accessToken
          return session
        }
      }
});

export { handler as GET, handler as POST }