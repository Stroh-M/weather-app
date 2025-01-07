import { useEffect, useState } from "react";
import "../styles/zmanimpage.css";
import axios from "axios";
import Zmanimform from "../components/zmanimform";
import Zmanimcard from "../components/zmanimcard";
import Heading from "../components/Heading";
import moment from "moment-timezone";
import { CircularProgress } from "@mui/material";

export default function Zmanimpage() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [date, setDate] = useState("");
  const [zmanimObject, setZmanimObject] = useState();
  const [fetchData, setFetchData] = useState(false);
  const [tzId, setTzId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const date = new Date();
    setTzId(moment.tz.guess(true));
    setDate(date.toISOString().substring(0, 10));
    console.log(moment.tz.guess(true));
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setLatitude(parseFloat(p.coords.latitude));
        setLongitude(parseFloat(p.coords.longitude));
      },
      function (error) {
        if (error.code == error.PERMISSION_DENIED) {
          setFetchData(false);
          setLoading(false);
        }
      }
    );
  }, [Zmanimpage]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:5000/zmanim/auto?longitude=${longitude}&latitude=${latitude}&date=${date}&tzid=${tzId}`,
        { withCredentials: true }
      );
      setZmanimObject(result.data);
      setFetchData(true);
      setLoading(false);
    }

    fetchData();
  }, [latitude]);

  async function submitForm(location, date) {
    setLoading(true);
    const result = await axios.get(
      `http://localhost:5000/zmanim/manual?location=${location}&date=${date}`,
      { withCredentials: true }
    );
    setZmanimObject(result.data);
    setFetchData(true);
    setLoading(false);
  }

  console.log(zmanimObject);
  return (
    <>
      <div className="zmanim-page">
        <Heading text="Zmanim" />
        <Zmanimform submit={submitForm} />
        {loading && <CircularProgress />}
        {!fetchData && (
          <p style={{ display: "block", marginLeft: "0px" }}>
            Enter zip code and date to get the zmanim.
          </p>
        )}
        {fetchData && <Zmanimcard zmanimObject={zmanimObject} />}
      </div>
    </>
  );
}
