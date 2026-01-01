import express, { Application } from "express";
import { postRouter } from "./modules/post/post.router";

const app: Application = express();

app.use(express.json());
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

export default app;
