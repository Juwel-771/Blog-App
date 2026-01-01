import express, { Router } from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.send("create a new post");
});

export const postRouter: Router = router;
