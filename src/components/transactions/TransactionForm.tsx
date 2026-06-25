import { useState } from "react";
import { useFinanceStore } from "../../store/financeStore";

const TransactionForm = () => {
  const { addTransaction } = useFinanceStore();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Adding transaction");

  addTransaction({
    id: Date.now(),
    title,
    amount: Number(amount),
    category: "General",
    type: "Expense",
    date: new Date().toISOString().split("T")[0],
  });

  console.log("Transaction added");

  setTitle("");
  setAmount("");
};

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8">
  <h2 className="text-xl font-semibold mb-4">
  Add Transaction
</h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="bg-slate-700 p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          className="bg-slate-700 p-3 rounded-lg"
        />

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