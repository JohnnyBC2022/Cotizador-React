import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney } from "./helpers";

function App() {
  const [amount, setAmount] = useState(25000);
  const [months, setMonths] = useState(6);

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
        <Button operator="-" fn={handleClickDecrease} />
        <Button operator="+" fn={handleClickIncrease} />
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
        {formatMoney(amount)}
      </p>

      <h2 className="text-2xl font-extrabold text-sky-800 text-center">
        Escoge tu <span className="text-green-500">Plazo</span>
      </h2>

      <select
      className="mt-5 w-full p-2 bg-sky-100 border border-sky-900 rounded-lg text-center text-xl font-bold text-sky-800"
      value={months}
      onChange={e=>setMonths(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>

    </div>
  );
}

export default App;
