import express, { IRouter, Response, Request } from "express";
import { rmSync } from "fs";
import { send } from "process";

const router: IRouter = express.Router();

router.get("/similar", async (req: Request, res: Response) => {
  res.send("hello");
});
export = router;
