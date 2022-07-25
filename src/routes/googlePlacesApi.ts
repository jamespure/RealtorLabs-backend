import express, { Request, Response, IRouter } from "express";
const axios = require("axios").default;

const router: IRouter = express.Router();
const placesApiKey: string | undefined = process.env.PLACESAPIKEY;

router.get("/placesApi", async (req: Request, res: Response) => {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/js?key=${placesApiKey}&libraries=places`
  );
  res.send(data);
});

export = router;
