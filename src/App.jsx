// import './App.css'
import { useState } from "react";
import useCurrencyInfo from "/Hooks/useCurrencyInfo";
import Inputbox from "/Components/Inputbox";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

function handleSubmit(e){
  e.preventDefault();
  convert()
}
  
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-grey-60  rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={handleSubmit}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mb-1">
              <Inputbox
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                amountDisabled
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}






