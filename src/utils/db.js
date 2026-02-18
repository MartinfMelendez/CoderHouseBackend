import { connect } from "mongoose";

const dbConnection = async () => {
  try {
    await connect(process.env.LINK_MONGO);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database: " + error);
  }
};

export default dbConnection;
