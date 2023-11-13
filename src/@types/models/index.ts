export interface IMongooseStringField {
  type: StringConstructor;
  required?: boolean;
  unique?: boolean;
  default?: string | number | boolean;
  lowerCase?: boolean;
  upperCase?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface IMongooseNumberField {
  type: NumberConstructor;
  required?: boolean;
  unique?: boolean;
  default?: number | boolean;
  min?: number;
  max?: number;
}

export interface IMongooseDateField {
  type: DateConstructor;
  required?: boolean;
  unique?: boolean;
  default?: Date | boolean;
  min?: Date;
  max?: Date;
  expires?: number | string;
}

export interface IMongooseBooleanField {
  type: BooleanConstructor;
  required?: boolean;
  default?: boolean;
}
export interface IMongooseField {
  type:
    | StringConstructor
    | NumberConstructor
    | DateConstructor
    | BooleanConstructor;
}
