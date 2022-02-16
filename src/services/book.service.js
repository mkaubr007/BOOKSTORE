/* eslint-disable prettier/prettier */
import Book from '../models/book.model';

//add book
export const addBook = async (body) => {
  const data = await Book.create(body);
  return data;
};

//get book
export const getBook = async () => {
    const data = await Book.find();
    return data;
  };

//sort order in ascending order
export const ascendingOrder = async () => {
    const data = await Book.find();
    return data;
  };

//sort order in descending order
export const descendingOrder = async () => {
    const data = await Book.find().sort({ updatedAt: -1 });
    return data;
  };