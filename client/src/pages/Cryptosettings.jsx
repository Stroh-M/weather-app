import cryptoSymbols from "../data/cryptoSymbolsArray";
import {NavLink} from "react-router-dom"

const selectedSymbols = [];
export default function CryptosettingsPage() {
  function submitForm(e) {
    console.log(e);
    if (e.target.checked) {
      console.log("added to array");
      selectedSymbols.push(e.target.value);
    } else if (!e.target.check) {
      console.log("select to add to array");
    }
    console.log(selectedSymbols);
  }
  return (
    <>
      <h1>crypto settings</h1>
      <NavLink to="/dashboard/crypto">Back</NavLink>
      <form>
        {cryptoSymbols.map((symbol, index) => {
          return (
            <>
              <label htmlFor={symbol.symbol}>
                <input
                  key={index}
                  onChange={submitForm}
                  type="checkbox"
                  name={symbol.symbol}
                  value={symbol.symbol}
                />
                {symbol.name}
              </label>
            </>
          );
        })}
      </form>
    </>
  );
}

export { selectedSymbols };
