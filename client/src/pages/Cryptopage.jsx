import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import axios from "axios";
import "../styles/cryptopage.css";

export default function Cryptopage() {
  const [prices, setPrices] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    console.log("effected");
    async function fetchData() {
      const resultPrices = await axios.get(`http://localhost:5000/crypto/prices`, {
        withCredentials: true,
      });
      // console.log(result.data);
      const resultInfo = await axios.get(`http://localhost:5000/crypto/info`, {
        withCredentials: true,
      })
      setPrices([Object.entries(resultPrices.data)]);
      setInfo([Object.entries(resultInfo.data.crypto)]);
    }

    fetchData();
  }, []);

  return (
    <>
      {console.log(prices)}
      {console.log(info)}
      <div className="crypto-page">
        <Heading text="Crypto Page" />
        {prices.map((price) => {
          return (
            <div style={{ padding: "10px", width: "85%", display: "flex", justifyContent: "space-evenly", alignContent: "center", flexWrap: "wrap", gap: "20px"}}>
              {price.map((p) => {
                return (
                  <div style={{border: "3px solid navy", padding: "5px"}}>
                    <p>{p[0]}</p>
                    <p>${p[1]}</p>
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
