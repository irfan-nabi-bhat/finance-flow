export type Transaction = {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: "Income" | "Expense";
  date: string;
};