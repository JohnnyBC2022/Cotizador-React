import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [amount, setAmount] = useState(25000);

  const MIN = 0;
  const MAX = 50000;
  const STEP = 100;

  function handleChange(e) {
    setAmount(+e.target.value); // Aquí el "+" es una sintaxis alternativa a parseInt o Number para convertir el valor del evento de tipo String a Number
  }

  function handleClickDecrease() {
    const value = amount - STEP;
    if (value < MIN) {
      alert("Cantidad no válida");
      return;
    }
    setAmount(value);
  }
  function handleClickIncrease() {
    const value = amount + STEP;
    if (value > MAX) {
      alert("Cantidad no válida");
      return;
    }
    setAmount(value);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <button
          type="button"
          className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-green-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-green-500"
          onClick={handleClickDecrease}
        >
          -
        </button>
        <button
          type="button"
          className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-green-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-green-500"
          onClick={handleClickIncrease}
        >
          +
        </button>
      </div>
      <input
        type="range"
        className="w-full h-6 bg-sky-200 accent-green-500 hover:accent-green-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={amount}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-green-600">
        {amount}
      </p>
    </div>
  );
}

export default App;
