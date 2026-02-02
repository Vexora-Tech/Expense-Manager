import React, { useContext, useState } from "react";
import { mainContext } from "../contexts/mainContextAPI";

function ListExpense() {
  const { allExpense, setAllExpense } = useContext(mainContext);
  const [showPopup, setShowPopup] = useState(false);
  const [editForm, setEditForm] = useState({});

  const handleDelete = (id) => {
    if (window.confirm("Delete this expense?")) {
      setAllExpense(allExpense.filter((exp) => exp.id !== id));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setAllExpense(
      allExpense.map((exp) => (exp.id === editForm.id ? editForm : exp)),
    );
    setShowPopup(false);
    alert("Updated!");
  };

  return (
    <>
      <table className="w-full border my-8">
        <thead>
          <tr>
            <th className="border p-2">No.</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Purpose</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {allExpense?.length > 0 ? (
            allExpense.map((expense, i) => (
              <tr key={expense.id}>
                <td className="border p-2 text-center">{i + 1}</td>
                <td className="border p-2 text-center">₹ {expense.price}</td>
                <td className="border p-2">{expense.description}</td>
                <td
                  className={`border p-2 ${expense.purpose === "income" ? "bg-green-100" : "bg-red-100"}`}
                >
                  {expense.purpose}
                </td>
                <td className="border p-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => {
                      setEditForm(expense);
                      setShowPopup(true);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-4 text-center">
                No expenses
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center">
          <div className="bg-white rounded p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Update Expense</h2>
            <form onSubmit={handleUpdate}>
              <label htmlFor="price">Price in ₹ Rupees</label>
              <input
                type="number"
                value={editForm.price}
                onChange={(e) =>
                  setEditForm({ ...editForm, price: e.target.value })
                }
                className="w-full border p-2 mb-3 rounded"
                required
              />
              <label htmlFor="description">Description</label>
              <textarea
                value={editForm.description}
                onChange={(e) =>
                  setEditForm({ ...editForm, description: e.target.value })
                }
                className="w-full border p-2 mb-3 rounded"
                required
              />
              <select
                value={editForm.purpose}
                onChange={(e) =>
                  setEditForm({ ...editForm, purpose: e.target.value })
                }
                className="w-full border p-2 mb-3 rounded"
                required
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-2 rounded"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="flex-1 bg-gray-500 text-white py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ListExpense;
