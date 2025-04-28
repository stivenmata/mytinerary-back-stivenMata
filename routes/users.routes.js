import { Router } from "express";
import { userByName, allUser, userById } from "../controllers/users/read.js";
import register from "../controllers/users/create.js";
import update from "../controllers/users/update.js";
import deleteUser from "../controllers/users/delete.js";

import validator from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";
import schemaUser from "../schemas/user/create.js";

const routerUsers = Router();


routerUsers.get('/', passport.authenticate('jwt', { session: false }), allUser);
routerUsers.get('/name/:nameParams', passport.authenticate('jwt', { session: false }), userByName);
routerUsers.get('/:idParams', passport.authenticate('jwt', { session: false }), userById);


routerUsers.post(
  '/',
  validator(schemaUser),
  accountExists,
  createHash,
  register
);


routerUsers.put(
  '/:idParams',
  passport.authenticate('jwt', { session: false }),
  validator(schemaUser),
  update
);


routerUsers.delete(
  '/:idParams',
  passport.authenticate('jwt', { session: false }),
  deleteUser
);

export default routerUsers;
