import TimeConverter from "../utils/timeconverter";

export default function Zmanimcard({ zmanimObject }) {
  return (
    <>
      <div>
        <h2>{zmanimObject.location.title}</h2>
        <p>
          Alos HaShachar:{" "}
          {TimeConverter(zmanimObject.times.alotHaShachar.substring(11, 19))}
        </p>
        <p>
          Misheyakir:{" "}
          {TimeConverter(zmanimObject.times.misheyakir.substring(11, 19))}
        </p>
        <p>
          Misheyakir Machmir:{" "}
          {TimeConverter(
            zmanimObject.times.misheyakirMachmir.substring(11, 19)
          )}
        </p>
        <p>
          Sunrise: {TimeConverter(zmanimObject.times.sunrise.substring(11, 19))}
        </p>
        <p>
          Bein HaShmashos:{" "}
          {TimeConverter(zmanimObject.times.beinHaShmashos.substring(11, 19))}
        </p>
        <p>
          Chatzos: {TimeConverter(zmanimObject.times.chatzot.substring(11, 19))}
        </p>
        <p>
          Chatzos Night:{" "}
          {TimeConverter(zmanimObject.times.chatzotNight.substring(11, 19))}
        </p>
        <p>Dawn: {TimeConverter(zmanimObject.times.dawn.substring(11, 19))}</p>
        <p>Dusk: {TimeConverter(zmanimObject.times.dusk.substring(11, 19))}</p>
        <p>
          Mincha Gedola:{" "}
          {TimeConverter(zmanimObject.times.minchaGedola.substring(11, 19))}
        </p>
        <p>
          Mincha Gedola (Magan Avraham):{" "}
          {TimeConverter(zmanimObject.times.minchaGedolaMGA.substring(11, 19))}
        </p>
        <p>
          Sunset: {TimeConverter(zmanimObject.times.sunset.substring(11, 19))}
        </p>
        <p>
          Mincha Ketana:{" "}
          {TimeConverter(zmanimObject.times.minchaKetana.substring(11, 19))}
        </p>
        <p>
          Mincha Ketana (Magan Avraham):{" "}
          {TimeConverter(zmanimObject.times.minchaKetanaMGA.substring(11, 19))}
        </p>

        <p>
          Plag HaMincha:{" "}
          {TimeConverter(zmanimObject.times.plagHaMincha.substring(11, 19))}
        </p>
        <p>
          Sof Zman Kerias Shma:{" "}
          {TimeConverter(zmanimObject.times.sofZmanShma.substring(11, 19))}
        </p>
        <p>
          Sof Zman Kerias Shma (Magan Avraham):{" "}
          {TimeConverter(zmanimObject.times.sofZmanShmaMGA.substring(11, 19))}
        </p>
        <p>
          Sof Zman Kerias Shma (MG"A 16.1&deg;):{" "}
          {TimeConverter(
            zmanimObject.times.sofZmanShmaMGA16Point1.substring(11, 19)
          )}
        </p>
        <p>
          Sof Zman Kerias Shma (MG"A 19.8&deg;):{" "}
          {TimeConverter(
            zmanimObject.times.sofZmanShmaMGA19Point8.substring(11, 19)
          )}
        </p>
        <p>
          Sof Zman Tefila:{" "}
          {TimeConverter(zmanimObject.times.sofZmanTfilla.substring(11, 19))}
        </p>
        <p>
          Sof Zman Tefilla (Magan Avraham):{" "}
          {TimeConverter(zmanimObject.times.sofZmanTfillaMGA.substring(11, 19))}
        </p>
        <p>
          Sof Zman Tefilla (MG"A 16.1&deg;):{" "}
          {TimeConverter(
            zmanimObject.times.sofZmanTfillaMGA16Point1.substring(11, 19)
          )}
        </p>
        <p>
          Sof Zman Tefilla (MG"A 19.8&deg;):{" "}
          {TimeConverter(
            zmanimObject.times.sofZmanTfillaMGA19Point8.substring(11, 19)
          )}
        </p>

        <p>
          Tzeis HaKachovim (42 Min):{" "}
          {TimeConverter(zmanimObject.times.tzeit42min.substring(11, 19))}
        </p>
        <p>
          Tzeis HaKachovim (50 min):{" "}
          {TimeConverter(zmanimObject.times.tzeit50min.substring(11, 19))}
        </p>
        <p>
          Tzeis Hakachovim (72 min):{" "}
          {TimeConverter(zmanimObject.times.tzeit72min.substring(11, 19))}
        </p>
        <p>
          Tzeis HaKachovim (85&deg;):{" "}
          {TimeConverter(zmanimObject.times.tzeit85deg.substring(11, 19))}
        </p>
        <p>
          Tzeis HaKachovim (7083&deg;):{" "}
          {TimeConverter(zmanimObject.times.tzeit7083deg.substring(11, 19))}
        </p>
      </div>
    </>
  );
}
