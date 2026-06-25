import type { ReactNode } from "react";
type StatCardProps = {
  title: string;
  amount: string;
  icon?: ReactNode;
};

const StatCard = ({ title, amount, icon }: StatCardProps) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-slate-400 text-sm">
          {title}
        </h3>

        {icon}
      </div>

      <p className="text-3xl font-bold mt-4">
        {amount}
      </p>
    </div>
  );
};

export default StatCard;