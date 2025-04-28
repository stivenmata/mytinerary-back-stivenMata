import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";

passport.use(
  new Strategy(
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

        if (user) {
          return done(null, user); 
        }

        return done(null, false); 
      } catch (error) {
        return done(error, false); 
      }
    }
  )
);

export default passport;
