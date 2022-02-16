"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookRouter = exports.ascendingOrderRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var bookController = _interopRequireWildcard(require("../controllers/book.controller"));

var _bookValidator = require("../validators/bookValidator");

var _auth = require("../middlewares/auth.middleware");

var _upload = require("../middlewares/upload");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable prettier/prettier */
var bookRouter = _express["default"].Router(); //route to add book


exports.bookRouter = bookRouter;
bookRouter.post('/', _auth.userAuth, _auth.userRole, _upload.upload.single('image'), _bookValidator.newBookValidator, bookController.addBook); //route to get book

bookRouter.get('/', _auth.userAuth, bookController.getBook); //route to sort books in ascending order

var ascendingOrderRouter = _express["default"].Router();

exports.ascendingOrderRouter = ascendingOrderRouter;
ascendingOrderRouter.get('/', _auth.userAuth, bookController.ascendingOrder);