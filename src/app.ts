import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import rateLimit from "express-rate-limit";
import searchRouter from "./routes/search";
import similarRouter from "./routes/similarProperty";

const app: Application = express();

const port: string | number = process.env.PORT || 3000;

app.use(cors());
app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 2,
  })
);

app.get("/api/v1/", (req: Request, res: Response) => {
  res.send("hello");
});

app.use("/api/v1", searchRouter);
app.use("/api/v1/", similarRouter);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}/api/v1`)
);
