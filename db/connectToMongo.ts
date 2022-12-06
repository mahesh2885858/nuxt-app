import mongoose from "mongoose";

const connectToMongo = async () => {
  return mongoose
    .connect(
      // "mongodb+srv://mahesh2885858:8096723745@cluster0.7fcuy.mongodb.net/?retryWrites=true&w=majority"
      "mongodb://localhost:8081/test"
    )
    .then(() => {
      console.log("connection was successfull");
    })
    .catch((E) => {
      console.log(E);
    });
};
export default connectToMongo;
