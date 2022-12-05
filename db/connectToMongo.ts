import mongoose from "mongoose";

const connectToMongo = async () => {
  const data = await mongoose.connect();
};
export default connectToMongo;
