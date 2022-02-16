/* eslint-disable prettier/prettier */
import express from 'express';
const router = express.Router();
import userRoute from './user.route';
import {bookRouter,ascendingOrderRouter,descendingOrderRouter,alphabeticalOrderRouter} from './book.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/book', bookRouter);
  router.use('/ascending', ascendingOrderRouter);
  router.use('/descending', descendingOrderRouter);
  router.use('/alphabetical', alphabeticalOrderRouter);
  return router;
};

export default routes;
