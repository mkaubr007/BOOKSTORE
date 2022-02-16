"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.route"));

var _book = require("./book.route");

/* eslint-disable prettier/prettier */
var router = _express["default"].Router();

/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.get('/', function (req, res) {
    res.json('Welcome');
  });
  router.use('/users', _user["default"]);
  router.use('/book', _book.bookRouter);
  router.use('/ascending', _book.ascendingOrderRouter);
  router.use('/descending', _book.descendingOrderRouter);
  router.use('/alphabetical', _book.alphabeticalOrderRouter);
  return router;
};

var _default = routes;
exports["default"] = _default;