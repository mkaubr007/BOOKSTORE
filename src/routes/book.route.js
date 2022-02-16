/* eslint-disable prettier/prettier */
import express from 'express';
import * as bookController from '../controllers/book.controller'
import { newBookValidator } from '../validators/bookValidator';
import {userAuth, userRole} from '../middlewares/auth.middleware';
import { upload } from '../middlewares/upload';

export const bookRouter = express.Router();
//route to add book
bookRouter.post('/', userAuth, userRole, upload.single('image'), newBookValidator, bookController.addBook);

//route to get book
bookRouter.get('/', userAuth, bookController.getBook);

//route to sort books in ascending order
export const ascendingOrderRouter = express.Router();
ascendingOrderRouter.get('/', userAuth, bookController.ascendingOrder);

//route to sort books in descending order
export const descendingOrderRouter = express.Router();
descendingOrderRouter.get('/', userAuth, bookController.descendingOrder);

//route to sort books in alphabetical order by title
export const alphabeticalOrderRouter = express.Router();
alphabeticalOrderRouter.get('/', userAuth, bookController.alphabeticalOrder);