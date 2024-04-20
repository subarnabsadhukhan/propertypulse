import connectDB from "@/config/database";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked when the user is successfully authenticated
    async signIn({ profile }) {
      // 1. Connect to Database
      connectDB();
      // 2. Check if user already exists
      const userExists = await User.findOne({ email: profile.email });
      // 3. If not, add user to database
      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      // 4. Return true to allow sign in
      return true;
    },
    // Modifies the session object
    async session({ session }) {
      // 1. Get User from Database
      const user = await User.findOne({ email: session.user.email });
      // 2. Assign the user to the session
      session.user.id = user._id.toString();
      // 3. Return the session
      return session;
    },
  },
};
