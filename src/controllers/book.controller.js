/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';


// Controller for add book
/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */
export const addBook = async (req, res, next) => {
  try {
    const bookData = {
      author: req.body.author,
      title: req.body.title,
      image: req.file.path,
      quantity: req.body.quantity,
      price: req.body.price,
      description: req.body.description
    };
    const data = await BookService.addBook(bookData);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: `The Book "${data.title}" has Been Added!`
    });
  } catch (err) {
    next(err);
  }
};