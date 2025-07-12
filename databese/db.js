import mongoose from "mongoose";

export const connectDb = async () => {
  // try {
  //   await mongoose.connect(process.env.DB);
  //   console.log("DB connected");
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    await mongoose.connect(process.env.DB, {});
    console.log("✅ MongoDB connected");
    console.log("Connected to DB:", mongoose.connection.name);

    // // Start server only after DB is connected
    // app.listen(PORT, () => {
    //   console.log(`🚀 Server running on port ${PORT}`);
    // });
  } catch (error) {
    console.error("❌ DB Connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
