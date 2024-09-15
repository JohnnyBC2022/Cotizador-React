import { useEffect, useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney, calculateTotalPay } from "./helpers";
import Select from "./components/Select";

function App() {
  const [amount, setAmount] = useState(25000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(0);

  useEffect(() => {
    const resultTotalPay = calculateTotalPay(amount, months);
    setTotal(resultTotalPay);
  }, [amount, months]);

  useEffect(() => {
    // Calcular la mensualidad:
    setPayment(total / months);
  }, [total]);

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

      <Select months={months} setMonths={setMonths} />

      <div className="my-5 space-y-3 bg-sky-50 p-5">
        <h2 className="text-2xl font-extrabold text-sky-800 text-center">
          Resumen del <span className="text-green-500">Préstamo</span>
        </h2>
        <p className="text-xl text-sky-800 text-center font-semibold">
          Duración: <span className="font-extrabold">{months} Meses</span>
        </p>
        <p className="text-xl text-sky-800 text-center font-semibold">
          Total a pagar:{" "}
          <span className="font-extrabold">{formatMoney(total)}</span>
        </p>
        <p className="text-xl text-sky-800 text-center font-semibold">
          Cuota mensual:{" "}
          <span className="font-extrabold">{formatMoney(payment)}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
