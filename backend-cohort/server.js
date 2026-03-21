import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/common/config/db.js";

const PORT = process.env.PORT || 5000;

const port = async () => {
  // connect to database
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} in ${process.env.NODE_ENV} mode`);
  });
};

port().catch((err) => {
  console.log("Failed to start the server", err);
  process.exit(1);
});
