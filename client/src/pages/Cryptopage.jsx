import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../styles/cryptopage.css";

export default function Cryptopage() {
  const [prices, setPrices] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resultPrices = await axios.get(
        `http://localhost:5000/crypto/prices`,
        {
          withCredentials: true,
        }
      );
      // console.log(result.data);
      const resultInfo = await axios.get(`http://localhost:5000/crypto/info`, {
        withCredentials: true,
      });
      setPrices([Object.entries(resultPrices.data)]);
      setInfo([Object.entries(resultInfo.data.crypto)]);
    }

    fetchData();
  }, [Cryptopage]);

  return (
    <>
      {/* {console.log(prices)} */}
      {console.log(info)}
      <div className="crypto-page">
        <div className="heading">
          <Heading text="Crypto Page" />
        </div>
        {prices.map((price, index) => {
          return (
            <div
              key={index}
              style={{
                padding: "10px",
                width: "85%",
                display: "flex",
                justifyContent: "space-evenly",
                alignContent: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {price.map((p, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      border: "3px solid navy",
                      padding: "5px",
                      borderRadius: "25px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "15px"
                    }}
                  >
                    
                    <img
                      src={info[0][index][1].icon_url}
                      width="50px"
                      style={{ borderRadius: "50%" }}
                    />
                    <p>{p[0]}</p>
                    <p>
                      $
                      {parseFloat(p[1]).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
