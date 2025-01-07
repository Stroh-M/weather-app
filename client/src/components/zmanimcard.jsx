import TimeConverter from "../utils/timeconverter";
import "../styles/zmanimcard.css";

export default function Zmanimcard({ zmanimObject }) {
  function useRegex(input) {
    let regex = /^[0-9]+°[0-9]+′N [0-9]+°[0-9]+′W [A-Za-z0-9]+\/[A-Za-z0-9]+_[A-Za-z0-9]+$/i;
    return regex.test(input);
}
  return (
    <>
      <div className="zmanim-card">
        <h2>{useRegex(zmanimObject.location.title) ? "My Location" : zmanimObject.location.title}</h2>
        <table style={{paddingBottom: "20px"}}>
          <tr className="table-headers">
            <th>Zman</th>
            <th>Time</th>
          </tr>
          <tr>
            <td>Alos HaShachar:</td>
            <td>
              {TimeConverter(
                zmanimObject.times.alotHaShachar.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Misheyakir:</td>
            <td>
              {TimeConverter(zmanimObject.times.misheyakir.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Misheyakir Machmir:</td>
            <td>
              {TimeConverter(
                zmanimObject.times.misheyakirMachmir.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Dawn:</td>
            <td>{TimeConverter(zmanimObject.times.dawn.substring(11, 19))}</td>
          </tr>
          <tr>
            <td>Neitz:</td>
            <td>
              {TimeConverter(zmanimObject.times.sunrise.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Sof Zman Kerias Shma (MG"A 19.8&deg;):</td>
            <td>
              {TimeConverter(
                zmanimObject.times.sofZmanShmaMGA19Point8.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Sof Zman Kerias Shma (MG"A 16.1&deg;):</td>
            <td>
              {TimeConverter(
                zmanimObject.times.sofZmanShmaMGA16Point1.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Sof Zman Kerias Shma (Magan Avraham):</td>
            <td>
              {TimeConverter(
                zmanimObject.times.sofZmanShmaMGA.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Sof Zman Kerias Shma (GR"A):</td>
            <td>
              {TimeConverter(zmanimObject.times.sofZmanShma.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Sof Zman Tefilla (MG"A 19.8&deg;):</td>
            <td>
              {TimeConverter(
                zmanimObject.times.sofZmanTfillaMGA19Point8.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Sof Zman Tefilla (MG"A 16.1&deg;):</td>
            <td>
              {TimeConverter(
                zmanimObject.times.sofZmanTfillaMGA16Point1.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Sof Zman Tefilla (Magan Avraham):</td>
            <td>
              {TimeConverter(
                zmanimObject.times.sofZmanTfillaMGA.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Sof Zman Tefila:</td>
            <td>
              {TimeConverter(
                zmanimObject.times.sofZmanTfilla.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Chatzos:</td>
            <td>
              {TimeConverter(zmanimObject.times.chatzot.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Mincha Gedola:</td>
            <td>
              {TimeConverter(zmanimObject.times.minchaGedola.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Mincha Gedola (Magan Avraham):</td>
            <td>
              {TimeConverter(
                zmanimObject.times.minchaGedolaMGA.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Mincha Ketana:</td>
            <td>
              {TimeConverter(zmanimObject.times.minchaKetana.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Mincha Ketana (Magan Avraham):</td>
            <td>
              {TimeConverter(
                zmanimObject.times.minchaKetanaMGA.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Plag HaMincha:</td>
            <td>
              {TimeConverter(zmanimObject.times.plagHaMincha.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Shekia:</td>
            <td>
              {TimeConverter(zmanimObject.times.sunset.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Bein HaShmashos:</td>
            <td>
              {TimeConverter(
                zmanimObject.times.beinHaShmashos.substring(11, 19)
              )}
            </td>
          </tr>
          <tr>
            <td>Dusk:</td>
            <td>{TimeConverter(zmanimObject.times.dusk.substring(11, 19))}</td>
          </tr>
          <tr>
            <td>Tzeis HaKachovim (7083&deg;):</td>
            <td>
              {TimeConverter(zmanimObject.times.tzeit7083deg.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Tzeis HaKachovim (42 Min):</td>
            <td>
              {TimeConverter(zmanimObject.times.tzeit42min.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Tzeis HaKachovim (85&deg;):</td>
            <td>
              {TimeConverter(zmanimObject.times.tzeit85deg.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Tzeis HaKachovim (50 min):</td>
            <td>
              {TimeConverter(zmanimObject.times.tzeit50min.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Tzeis Hakachovim (72 min):</td>
            <td>
              {TimeConverter(zmanimObject.times.tzeit72min.substring(11, 19))}
            </td>
          </tr>
          <tr>
            <td>Chatzos Night:</td>
            <td>
              {TimeConverter(zmanimObject.times.chatzotNight.substring(11, 19))}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
