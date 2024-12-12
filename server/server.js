import axios from "axios";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

app.get("/weather/current/:location", async (req, res) => {
  try {
    const { location } = req.params;
    const result = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=no&alerts=no`
    );
    console.log(result.data);
    res.json(result.data.current);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/weather/forecast/:location", async (req, res) => {
  try {
    const { location } = req.params;
    const result = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=3&api=no&alerts=no`
    );
    res.json(result.data.forecast);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
