import express, { Response, Request, Application } from "express";
import "dotenv/config";
import searchRouter from "./routes/search";

const app: Application = express();

const port: string | number = process.env.PORT || 3000;
app.use("/api/v1", searchRouter);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
