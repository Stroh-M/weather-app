import { useEffect } from "react";
import Heading from "../components/Heading";
import axios from "axios";
import "../styles/cryptopage.css"

export default function Cryptopage() {
  useEffect(() => {
    console.log("effected")
  }, [])
    
  return (
    <>
    <div className="crypto-page">
      <Heading text="Crypto Page" />
      </div>
    </>
  );
}
