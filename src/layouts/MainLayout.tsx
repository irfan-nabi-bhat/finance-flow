import TransactionForm from "../components/transactions/TransactionForm";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import Navbar from "../components/common/Navbar";
import StatCard from "../components/dashboard/StatCard";

import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 p-5">
        <h1 className="text-2xl font-bold">
          FinanceFlow
        </h1>

        <nav className="mt-10">
          <ul className="space-y-4">
            <li className="cursor-pointer hover:text-blue-400">
              Dashboard
            </li>

            <li className="cursor-pointer hover:text-blue-400">
              Transactions
            </li>

            <li className="cursor-pointer hover:text-blue-400">
              Analytics
            </li>

            <li className="cursor-pointer hover:text-blue-400">
              Settings
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Navbar />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Total Balance"
            amount="$12,540"
            icon={<FaWallet />}
          />

          <StatCard
            title="Income"
            amount="$4,200"
            icon={<FaArrowUp />}
          />

          <StatCard
            title="Expenses"
            amount="$2,850"
            icon={<FaArrowDown />}
          />

          <StatCard
            title="Savings Rate"
            amount="32%"
          />
        </div>

        {/* Transactions Table */}
        <RecentTransactions />

        {/* Add Transaction Form */}
        <TransactionForm />
      </main>
    </div>
  );
};

export default MainLayout;