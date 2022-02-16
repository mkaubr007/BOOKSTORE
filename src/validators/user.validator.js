/* eslint-disable prettier/prettier */
import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(2)
      .required()
      .pattern(new RegExp('^[A-Za-z]{1}[a-z]{1,}$')),
    lastName: Joi.string()
      .min(2)
      .required()
      .pattern(new RegExp('^[A-Za-z]{1}[a-z]{1,}$')),
    email: Joi.string()
      .pattern(
        new RegExp(
          '^[a-zA-z]{2}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$'
        )
      )
      .required(),
    password: Joi.string()
      .pattern(
        new RegExp(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
        )
      )
      .required(),
    role: Joi.string()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .pattern(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@([0-9a-zA-Z][-]?)+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/)
      .required(),

    password: Joi.string()
      .required()
      .pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

