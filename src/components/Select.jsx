function Select({ months, setMonths }) {
  
    return (
        <select
        className="mt-5 w-full p-2 bg-sky-100 border border-sky-900 rounded-lg text-center text-xl font-bold text-sky-800"
        value={months}
        onChange={e=>setMonths(+e.target.value)}
        >
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="24">24 meses</option>
        </select>
    );
  }
  
  export default Select;