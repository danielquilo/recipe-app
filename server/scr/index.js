import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://danielquilo1012:Liverpool2023@recipes.ty6yqkp.mongodb.net/your-database-name", // Add your database name here
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3001, () => console.log("Server started"));
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
