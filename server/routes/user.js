import express from "express"
const UserRouter = express.Router();

import { login, register } from "../controller/auth.js";

UserRouter.route('/login').post(login)
UserRouter.route('/register').post(register)

export default UserRouter