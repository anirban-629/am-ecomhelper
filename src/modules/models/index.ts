import mongoose, { Schema, Model, mongo } from "mongoose";

export const createMongooseSchema = (
  schemaObj: object,
  timestamps: boolean
): Schema => {
  const schemaOptions = timestamps ? { timestamps: true } : {};
  return new Schema(schemaObj, schemaOptions);
};

export const createMongooseModel = <T extends Document>(
  modelName: string,
  schemaObj: object,
  timestamps: boolean = false
): Model<T> => {
  const existingModel = mongoose.models.modelName || undefined;
  if (existingModel) return existingModel;
  else {
    const schema = createMongooseSchema(schemaObj, timestamps);

    return mongoose.model<T>(modelName, schema);
  }
};
