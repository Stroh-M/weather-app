import { useEffect, useState } from "react";
import "../styles/zmanimpage.css";
import axios from "axios";
import Zmanimform from "../components/zmanimform";
import Zmanimcard from "../components/zmanimcard";
import Heading from "../components/heading";

export default function Zmanimpage() {
    // const [location, setLocation] = useState();
    // const [year, setYear] = useState();
    // const [month, setMonth] = useState();
    // const [date ,setDate] = useState();
    const [zmanimObject, setZmanimObject] = useState();
    const [fetchData, setFetchData] = useState(false);
    
    

    // useEffect(() => {
    //     const date = new Date();

    //     setMonth(date.getMonth());
    //     setYear(date.getFullYear());
    //     setDate(date.getDate());
    // }, []);

    

    // useEffect(() => {
    //     async () => {
    //         const result = axios.get(`http://localhost:5000/zmanim/today?location=${location}&year=${year}&month=${month}&date=${date}`)
    //         setZmanimObject(result);
    //     }
    // })

    async function submitForm(location, date) {
      const result = await axios.get(`http://localhost:5000/zmanim/manual?location=${location}&date=${date}`, {withCredentials: true})
      setZmanimObject(result.data);
      setFetchData(true)
    }
console.log(zmanimObject);
  return (
    <>
      <div className="zmanim-page">
        <Heading text="Zmanim" />
        {fetchData && <Zmanimcard zmanimObject={zmanimObject} />}
        <Zmanimform submit={submitForm} />
      </div>
    </>
  );
}
