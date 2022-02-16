/* eslint-disable prettier/prettier */
import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator,loginValidator} from '../validators/user.validator';
import { setRole } from '../middlewares/auth.middleware';
const router = express.Router();


//route to create a new user
router.post('/user', setRole('user'), newUserValidator, userController.newUser);
router.post('/admin', setRole('admin'), newUserValidator, userController.newUser);

//route to login
router.post('/login', loginValidator, userController.login);

export default router;
