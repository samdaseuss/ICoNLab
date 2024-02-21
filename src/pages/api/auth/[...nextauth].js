import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/User";
import bcrypt from "bcrypt";
import db from "../../../../utils/db";

import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import  clientPromise from './lib/mongodb';


db.connectDb();

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "yunjioh"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "opendata.yunjioh@gmail.com"
        }
      },
      async authorize(
        credentials,
        req
      ){
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({email});
        if (user) {
          return SignInUser({ 
            password,
            user
          });
        } else {
          throw new Error("가입되지 않은 이메일입니다.");
        }
      }
    }),
    // OAuth authentication providers
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt'
  }
});

const SignInUser = async({password, user}) => {
  
  if (!user.password) throw new Error("이메일 또는 패스워드가 일치하지 않습니다.");

  const testPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!testPassword) throw new Error("이메일 또는 패스워드가 일치하지 않습니다.");

  return user;
  
}