import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ DB Connected");
  } catch (error) {
    console.error("❌ Error connecting to database:", error.message);
    process.exit(1); // Optional: exit the app if DB connection fails
  }
};
