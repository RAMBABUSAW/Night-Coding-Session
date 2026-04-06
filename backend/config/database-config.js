import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("ENV CHECK:", process.env.MONGODB_URI);

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected");
};
