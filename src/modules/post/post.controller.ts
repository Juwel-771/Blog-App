import { Request, Response } from "express";

const createPost = async (req: Request, res: Response) => {
  console.log({ req, res });
};

export const PostController = {
  createPost,
};
