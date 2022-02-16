/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    author: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image:{
        type: String,
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
const Book = model('Book', userSchema);
export default Book;