import connectToMongo from "~~/db/connectToMongo";
import UserModel from "~~/models/User";
export default defineEventHandler(async (event) => {
  try {
    await connectToMongo();
    const userDetaisFromBody = new UserModel({
      cpassword: "1123",
      password: "1123",
      name: "mahesh",
      email: "mahesh@email.com",
      userName: "mahesh2885858",
      isTermsAccedpted: true,
    });
    await userDetaisFromBody.save();

    return { message: "hi this a test response" };
  } catch (err: any) {
    return { error: err.message };
  }
});
