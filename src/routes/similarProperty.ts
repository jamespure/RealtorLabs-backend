import express, { IRouter, Response, Request } from "express";

const router: IRouter = express.Router();

router.get("/similar", async (req: Request, res: Response) => {
  res.send("hello");
});

export = router;
