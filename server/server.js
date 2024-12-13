import axios from "axios";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

// ROUTES //

// CURRENT WEATHER WITH SPECIFIC LOCATION ///////////////////////////////////////////////////////////////////////////////////
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

// FORECAST FOR LOCATION SPECIFIED ///////////////////////////////////////////////////////////////////////////////////////////
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

// CRYPTO PRICES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/crypto/prices", async (req, res) => {
  try {
    // getting crypto prices
    const result = await axios.get(
      `http://api.coinlayer.com/api/live?access_key=${process.env.CRYPTO_CURRENCY_API_KEY}&symbols=BTC,ETH,USDT,XRP,SOL`
    );

    console.log(result.data);
    res.json(result.data);
  } catch (err) {
    console.error(err.message);
  }
});

// CRYPTO LIST/INFO //////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/crypto/info", async (req, res) => {
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
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
