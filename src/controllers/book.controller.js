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
    const data = await BookService.addBook(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: `The Book "${data.title}" has Been Added!`
    });
  } catch (err) {
    next(err);
  }
};

// Controller for get book
/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */
 export const getBook = async (req, res, next) => {
    try {
      const data = await BookService.getBook();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: `Your Books...`
      });
    } catch (err) {
      next(err);
    }
  };

  // Controller for sort book in ascending order
/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */
 export const ascendingOrder = async (req, res, next) => {
    try {
      const data = await BookService.ascendingOrder();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: `Your Books...`
      });
    } catch (err) {
      next(err);
    }
  };