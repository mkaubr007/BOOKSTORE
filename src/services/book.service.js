/* eslint-disable prettier/prettier */
import Book from '../models/book.model';

//add book
export const addBook = async (body) => {
  const data = await Book.create(body);
  return data;
};