import mongoose from "mongoose";

export interface IMongooseStringField {
  type: StringConstructor;
  required?: boolean;
  default?: string | number | boolean;
  unique?: boolean;
  lowerCase?: boolean;
  upperCase?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface IMongooseNumberField {
  type: NumberConstructor;
  required?: boolean;
  default?: number | boolean;
  unique?: boolean;
  min?: number;
  max?: number;
}

export interface IMongooseDateField {
  type: DateConstructor;
  required?: boolean;
  default?: Date | boolean;
  unique?: boolean;
  min?: Date;
  max?: Date;
  expires?: number | string;
}

export interface IMongooseBooleanField {
  type: BooleanConstructor;
  required?: boolean;
  default?: boolean;
}
export interface IMongooseRefId {
  type?: typeof mongoose.Types.ObjectId;
  required?: boolean;
  ref?: string;
}
export interface IMongooseField {
  type:
    | StringConstructor
    | NumberConstructor
    | DateConstructor
    | BooleanConstructor
    | IMongooseRefId;
}
