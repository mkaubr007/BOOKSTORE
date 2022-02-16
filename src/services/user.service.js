/* eslint-disable prettier/prettier */
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//create new user
export const newUser = async (body) => {
  const HashedPassword = await bcrypt.hash(body.password, 10);
  body.password = HashedPassword;
  const data = await User.create(body);
  return data;
};

//login user
export const login = async (body) => {
  const data = await User.findOne({ email: body.email });
  const payload = {
    _id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    role: data.role
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: '100H'
  });
  const validatePassword = await bcrypt.compare(body.password, data.password);
  if (validatePassword) {
    return token;
  } else {
    throw new Error('Invalid user');
  }
};
