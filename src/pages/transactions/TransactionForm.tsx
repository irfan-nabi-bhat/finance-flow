const TransactionForm = () => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Add Transaction
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Title"
          className="bg-slate-700 p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Amount"
          className="bg-slate-700 p-3 rounded-lg"
        />

        <select className="bg-slate-700 p-3 rounded-lg">
          <option>Income</option>
          <option>Expense</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;