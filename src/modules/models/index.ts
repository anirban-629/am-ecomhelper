import mongoose, { Schema, Model, mongo } from "mongoose";

export const createMongooseSchema = (schemaObj: object): Schema =>
  new Schema(schemaObj);

const createMongooseModel = <T extends Document>(
  modelName: string,
  schemaObj: object
): Model<T> => {
  const existingModel = mongoose.models.modelName || undefined;
  if (existingModel) return existingModel;
  else {
    const schema = createMongooseSchema(schemaObj);
    return mongoose.model<T>(modelName, schema);
  }
};
export default createMongooseModel;
