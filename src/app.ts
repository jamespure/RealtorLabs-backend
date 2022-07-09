import express, { Response, Request, Application } from "express";
import "dotenv/config";

const app: Application = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
