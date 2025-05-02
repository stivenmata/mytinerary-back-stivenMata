import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import User from "../models/User.js";


passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) return done(null, false, { message: "User not found" });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return done(null, false, { message: "Invalid password" });

        if (!user.online) {
          user.online = true;
          await user.save();
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);


passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET
    },
    async (jwt_payload, done) => {
      try {
        const user = await User.findOne({
          _id: jwt_payload.id,
          email: jwt_payload.email,
          online: true
        });

        if (user) return done(null, user);
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

export default passport;
