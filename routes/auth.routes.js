import { Router } from "express";
import passport from "../middlewares/passport.js";

import signUp from "../controllers/auth/signUp.js";
import signIn from "../controllers/auth/SignIn.js";
import signOut from "../controllers/auth/signOut.js";

import schemaSignIn from "../schemas/auth/signIn.js"; 
import schemaUser from "../schemas/user/create.js"; 

import validator from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import createHash from "../middlewares/createHash.js";
import validedPassword from "../middlewares/validedPassword.js";
import generateToken from "../middlewares/generateToken.js";

const routerAuth = Router();


routerAuth.post(
  "/signup",  
  validator(schemaUser),
  accountExists,
  createHash,
  signUp
);

routerAuth.post(
  "/signin",
  validator(schemaSignIn),
  passport.authenticate("local", { session: false }),
  generateToken,
  signIn
);



routerAuth.post("/signout", signOut);

export default routerAuth;
