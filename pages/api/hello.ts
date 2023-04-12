import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let tmp = "";
  try {
    tmp = JSON.stringify(req.statusCode);
  } catch (error) {
    tmp = "err";
  }
  res.status(200).json({ message: "Hello, world!", req: req.method });
}
