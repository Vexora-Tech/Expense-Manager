import React, { useContext } from "react";
import { mainContext } from "../contexts/mainContextAPI";

function AllExpense() {
  const { allExpense } = useContext(mainContext);

  const calculateMoney = (purpose) => {
    if (!allExpense || allExpense.length <= 0) {
      return 0;
    }

    const expenses = allExpense
      .filter((cur) => cur.purpose === purpose)
      .map((cur) => parseInt(cur.price));

    if (expenses.length === 0) {
      return 0;
    }

    if (expenses.length === 1) {
      return expenses[0];
    }

    const price = expenses.reduce((pre, cur) => pre + cur, 0);
    return price;
  };

  const totalIncome = calculateMoney("income");
  const totalExpense = calculateMoney("expense");
  const totalBalance = totalIncome - totalExpense;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 mt-6">
        <div className="w-[96%] lg:w-[80%] mx-auto py-4 px-2 rounded border border-zinc-300">
          <p className="font-bold text-2xl text-green-500">Income</p>
          <p className="text-xl font-semibold text-end text-green-400">
            ₹ {totalIncome}
          </p>
        </div>
        <div className="w-[96%] lg:w-[80%] mx-auto py-4 px-2 rounded border border-zinc-300">
          <p className="font-bold text-2xl text-red-500">Expense</p>
          <p className="text-xl font-semibold text-end text-red-400">
            ₹ {totalExpense}
          </p>
        </div>
        <div className="col-span-2 py-4 px-2 rounded border border-zinc-300">
          <p className="font-bold text-2xl">Total Balance</p>
          <p
            className={`text-xl font-semibold text-end ${
              totalBalance >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ₹ {totalBalance}
          </p>
        </div>
      </div>
    </>
  );
}

export default AllExpense;
