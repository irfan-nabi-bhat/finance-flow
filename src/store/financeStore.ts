import { create } from "zustand";
import type { Transaction } from "../types/transaction";

type FinanceStore = {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
};

export const useFinanceStore = create<FinanceStore>((set) => ({
  transactions: [
    {
      id: 1,
      title: "Salary",
      amount: 4000,
      category: "Income",
      type: "Income",
      date: "2025-06-01",
    },
  ],

  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction],
    })),
}));