import Joi from 'joi';
import { alphabeticPattern } from '@src/utils/helper';

export const createUserSchema = Joi.object({
  firstName: Joi.string()
    .pattern(alphabeticPattern)
    .max(100)
    .required()
    .messages({
      'string.base': 'First name should be a type of text',
      'string.empty': 'First name cannot be an empty field',
      'string.pattern.base': 'First name should contain only alphabetical characters',
      'string.max': 'First name should have a maximum length of 100 characters',
      'any.required': 'First name is a required field'
    }),
  lastName: Joi.string()
    .pattern(alphabeticPattern)
    .max(100)
    .required()
    .messages({
      'string.base': 'Last name should be a type of text',
      'string.empty': 'Last name cannot be an empty field',
      'string.pattern.base': 'Last name should contain only alphabetical characters',
      'string.max': 'Last name should have a maximum length of 100 characters',
      'any.required': 'Last name is a required field'
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'Email should be a type of text',
      'string.empty': 'Email cannot be an empty field',
      'string.email': 'Email must be a valid email address',
      'any.required': 'Email is a required field'
    })
});
