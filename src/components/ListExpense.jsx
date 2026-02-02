import React, { useContext } from "react";
import { mainContext } from "../contexts/mainContextAPI";

function ListExpense() {
  const { allExpense, setAllExpense } = useContext(mainContext);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      const updatedExpenses = allExpense.filter((expense) => expense.id !== id);
      setAllExpense(updatedExpenses);
    }
  };

  return (
    <>
      <table className="w-full border table-auto my-8 py-2">
        <thead>
          <tr>
            <th className="border text-zinc-600 border-zinc-400 p-2">No.</th>
            <th className="border text-zinc-600 border-zinc-400 p-2">Price</th>
            <th className="border text-zinc-600 border-zinc-400 p-2">
              Description
            </th>
            <th className="border text-zinc-600 border-zinc-400 p-2">
              Purpose
            </th>
            <th className="border text-zinc-600 border-zinc-400 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {allExpense && allExpense.length > 0 ? (
            allExpense.map((expense, index) => (
              <tr
                key={expense.id || index}
                className="hover:bg-zinc-50 text-lg"
              >
                <td className="border border-zinc-400 p-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-zinc-400 p-2 text-center">
                  ₹ {expense.price}
                </td>
                <td className="border border-zinc-400 p-2">
                  {expense.description}
                </td>
                <td
                  className={`border border-zinc-400 p-2 capitalize ${
                    expense.purpose.toLowerCase() === "income"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {expense.purpose}
                </td>
                <td className="border border-zinc-400 p-2 text-center">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(expense.id || index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="border border-zinc-400 p-4 text-center text-zinc-500"
              >
                No expenses recorded yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default ListExpense;
