import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: '629499820311-4eo0g0v90vhjibud03cr5v3p5n4njnoj.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
   
  ],
  pages: {
    signIn: '/'
  },
 
})