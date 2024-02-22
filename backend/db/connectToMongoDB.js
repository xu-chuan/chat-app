import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Fail to connect MongoDB', error.message);
  }
};

export default connectToMongoDB;
