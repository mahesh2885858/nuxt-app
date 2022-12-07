import mongoose from "mongoose";

const connectToMongo = async () => {
  return mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then(() => {
      console.log("connection was successfull");
    })
    .catch((E) => {
      console.log(E);
    });
};
export default connectToMongo;
