import {
  IMongooseStringField,
  IMongooseNumberField,
  IMongooseDateField,
  IMongooseBooleanField,
} from "../../../@types/models";

export const generateStringField = (
  required?: boolean,
  _default?: string | number | boolean,
  unique?: boolean,
  lowerCase?: boolean,
  upperCase?: boolean,
  minLength?: number,
  maxLength?: number
): IMongooseStringField => {
  const field: IMongooseStringField = {
    type: String,
  };

  if (required !== undefined) field.required = required;
  if (unique !== undefined) field.unique = unique;
  if (_default !== undefined) field.default = _default;
  if (lowerCase !== undefined) field.lowerCase = lowerCase;
  if (upperCase !== undefined) field.upperCase = upperCase;
  if (minLength !== undefined) field.minLength = minLength;
  if (maxLength !== undefined) field.maxLength = maxLength;

  return field;
};
export const generateNumberField = (
  required?: boolean,
  _default?: number | boolean,
  unique?: boolean,
  min?: number,
  max?: number
): IMongooseNumberField => {
  const field: IMongooseNumberField = {
    type: Number,
  };

  // Conditionally add properties based on provided parameters
  if (required !== undefined) field.required = required;
  if (unique !== undefined) field.unique = unique;
  if (_default !== undefined) field.default = _default;
  if (min !== undefined) field.min = min;
  if (max !== undefined) field.max = max;

  return field;
};

export const generateDateField = (
  required?: boolean,
  _default?: Date | boolean,
  unique?: boolean,
  min?: Date,
  max?: Date,
  expires?: number | string
): IMongooseDateField => {
  const field: IMongooseDateField = {
    type: Date,
  };

  // Conditionally add properties based on provided parameters
  if (required !== undefined) field.required = required;
  if (unique !== undefined) field.unique = unique;
  if (_default !== undefined) field.default = _default;
  if (min !== undefined) field.min = min;
  if (max !== undefined) field.max = max;
  if (expires !== undefined) field.expires = expires;

  return field;
};

export const generateBooleanField = (
  required?: boolean,
  _default?: boolean
): IMongooseBooleanField => {
  const field: IMongooseBooleanField = {
    type: Boolean,
  };

  // Conditionally add properties based on provided parameters
  if (required !== undefined) field.required = required;
  if (_default !== undefined) field.default = _default;

  return field;
};
