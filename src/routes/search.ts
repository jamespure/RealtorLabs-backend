import express, { Request, Response, IRouter } from "express";
const axios = require("axios").default;

const router: IRouter = express.Router();

const key: string | undefined = process.env.KEY;
const host: string | undefined = process.env.HOST;
const searchUrl: string | undefined = process.env.SEARCH_URL;

router.get("/search", async (req: Request, res: Response) => {
  const { data } = await axios.get(searchUrl, {
    params: { location: req.query.location, home_type: req.query.home_type },
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  });
  console.log(data);
  res.json(data.props);
});

export = router;
