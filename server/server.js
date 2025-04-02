import axios from "axios";
import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// CURRENT WEATHER WITH SPECIFIC LOCATION ///////////////////////////////////////////////////////////////////////////////////
app.get("/weather/current/:location", async (req, res) => {
  // if (req.isAuthenticated()) {
    try {
      const { location } = req.params;
      const result = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=3&aqi=no&alerts=no`
      );
      console.log(result.data);
      res.json(result.data);
    } catch (err) {
      console.error(err.message);
      if (err) {
        if (err.response.status === 400) {
          res.json({ message: "invalid location" });
        } else if (err) {
          console.error(err.message)
          res.json({message: "an error occured"});
        }
      }
    }
  // } else {
  //   res.json({ message: "not logged in" });
  // }
});

// CRYPTO PRICES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/crypto/prices", async (req, res) => {
  // if (req.isAuthenticated()) {
    try {
      // getting crypto prices
      const result = await axios.get(
        `http://api.coinlayer.com/api/live?access_key=${process.env.CRYPTO_CURRENCY_API_KEY}`
      );

      console.log(result.data);
      res.json(result.data.rates);
    } catch (err) {
      console.error(err.message);
    }
  // } else {
  //   res.json({ message: "not logged in" });
  // }
});

// CRYPTO LIST/INFO //////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/crypto/info", async (req, res) => {
  // if (req.isAuthenticated()) {
    try {
      // list of crypto currencies info e.g. name, full_name, icons, symbol
      const result = await axios.get(
        `http://api.coinlayer.com/list?access_key=${process.env.CRYPTO_CURRENCY_API_KEY}`
      );
      console.log(result.data);
      res.json(result.data);
    } catch (err) {
      console.error(err.message);
    }
  // } else {
  //   res.json({ message: "not logged in" });
  // }
});

// LIST ZMANIM OF CURRENT DAY AUTOMATICALLY ONLOAD /////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/zmanim/auto", async (req, res) => {
  // if (req.isAuthenticated()) {
    try {
      const date = req.query.date;
      const latitude = req.query.latitude;
      const longitude = req.query.longitude;
      const tzid = req.query.tzid;
      const result = await axios.get(
        `https://www.hebcal.com/zmanim?cfg=json&latitude=${latitude}&longitude=${longitude}&tzid=${tzid}&date=${date}`
      );
      console.log(result.data);
      res.json(result.data);
    } catch (err) {
      console.error(err.message);
      if (err.response.status === 400) {
        res.status(500).json({message: "An error accord"});
      }
    }
  // } else {
  //   res.json({ message: "not logged in" });
  // }
});

// LIST ZMANIM FOR CURRENT DAY WITH USER INPUT /////////////////////////////////////////////////////////////////////////////////
app.get("/zmanim/manual", async (req, res) => {
  // if (req.isAuthenticated()) {
    try {
      const date = req.query.date;
      const location = req.query.location;
      const result = await axios.get(
        `https://www.hebcal.com/zmanim?cfg=json&zip=${location}&date=${date}`
      );
      console.log(result.data);
      res.json(result.data);

    } catch (err) {
      console.error(err.message);
      if (err.response.status === 400) {
        res.status(500).json({message: "An error accord"});
      }
    }
  // } else {
  //   res.json({ message: "not logged in" });
  // }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});