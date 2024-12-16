import axios from "axios";
import express from "express";
import dotenv from "dotenv";
import pool from "./db.js";
import bcrypt from "bcrypt";
import session from "express-session";
import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";

dotenv.config();

const app = express();
const port = 5000;
// const saltRounds = 10;

app.use(express.json());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: true,
//       maxAge: 1000 * 60 * 60 * 24,
//     },
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// ROUTES //

// SIGNUP ROUTE /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app.post("/signup", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     bcrypt.hash(password, saltRounds, async (err, hash) => {
//       try {
//         const result = await pool.query(
//           "INSERT INTO users (username, password) VALUES (($1), ($2)) RETURNING *",
//           [username, hash]
//         );
//         res.json("signed up successfully");
//         console.log(result);
//       } catch (err) {
//         console.error(err.message);
//         res.json("unsuccessful sign up, username already exists");
//       }
//     });
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     successRedirect: "/",
//   })
// );

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

// LIST ZMANIM OF CURRENT DAY  /////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/zmanim/today/:location", async (req, res) => {
  try {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const { location } = req.params;
    const result = await axios.get(
      `https://www.hebcal.com/zmanim?cfg=json&zip=${location}&date=${year}-${month}-${date}`
    );
    console.log(result.data);
    res.json(result.data);
  } catch (err) {
    console.error(err.message);
  }
});

// passport.use(
//   new LocalStrategy(async (username, password, cb) => {
//     try {
//       const result = await pool.query(
//         "SELECT * FROM users WHERE username = $1",
//         [username]
//       );
//       const hashedPassword = result.rows[0].password;
//       const match = await bcrypt.compare(password, hashedPassword);
//       if (match) {
//         const user = result.rows[0];
//         return cb(null, user);
//       } else if (!match) {
//         return cb({ error: "Incorrect password" });
//       }
//     } catch (err) {
//       return cb({ error: "Username not found" });
//     }
//   })
// );

// passport.serializeUser((user, cb) => {
//   return cb(null, user);
// });

// passport.deserializeUser((user, cb) => {
//   return cb(null, user);
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
