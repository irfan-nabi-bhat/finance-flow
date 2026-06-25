import { useFinanceStore } from "../../store/financeStore";

const RecentTransactions = () => {
 const { transactions } = useFinanceStore();

console.log("TABLE DATA:", transactions);
  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Recent Transactions
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700 text-slate-400">
            <th className="text-left py-3">Title</th>
            <th className="text-left py-3">Category</th>
            <th className="text-left py-3">Amount</th>
            <th className="text-left py-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b border-slate-700"
            >
              <td className="py-3">
                {transaction.title}
              </td>

              <td>{transaction.category}</td>

              <td>${transaction.amount}</td>

              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;