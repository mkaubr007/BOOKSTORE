/* eslint-disable prettier/prettier */
import express from 'express';
import * as bookController from '../controllers/book.controller'
import { newBookValidator } from '../validators/bookValidator';
import {userAuth, userRole} from '../middlewares/auth.middleware';
import { upload } from '../middlewares/upload';

export const bookRouter = express.Router();
//route to add book
bookRouter.post('/', userAuth, userRole, upload.single('image'), newBookValidator, bookController.addBook);