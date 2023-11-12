import mongoose = require("mongoose");

type net_family = 4 | 6;

export default async (
  Mongo_URI: string = "mongodb://localhost:27017",
  family: net_family = 4
) => {
  if (!Mongo_URI.startsWith("mongodb"))
    throw new Error("Url must start with 'mongodb'! Provide correct url");
  try {
    const connect = await mongoose.connect(Mongo_URI, { family });
    console.log(`MongoDB Connected to host: ${connect.connection.host}`);
    return true;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
