import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectToMongoDB = async () => {
  try {
    dotenv.config();
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToMongoDB;
