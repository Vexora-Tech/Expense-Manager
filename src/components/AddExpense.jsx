import React, { useState } from "react";

function AddExpense() {
  const [hide, setHide] = useState(true);
  return (
    <>
      <div className="flex justify-end pt-6">
        <button
          onClick={() => setHide(!hide)}
          className="bg-purple-500 py-2 px-2 text-white rounded-md cursor-pointer"
        >
          {hide ? "Add +" : <h2 className="px-1">X</h2>}
        </button>
      </div>
      {!hide && (
        <div className="py-3">
          <form action="">
            <div className="mb-3">
              <label htmlFor="price" name="price">
                Price in ₹ Ruppes
              </label>
              <input
                id="price"
                name="price"
                type="number"
                className="w-full py-2 border border-zinc-400 outline-none px-3 rounded"
                placeholder="Enter Price"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" name="description">
                description
              </label>
              <textarea
                id="description"
                name="description"
                type="number"
                className="w-full py-2 border border-zinc-400 outline-none px-3 rounded"
                placeholder="Enter description"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" name="description">
                Propose
              </label>
              <select
                className="w-full py-2 border border-zinc-400 outline-none px-3 rounded"
                name="propose"
                id=""
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div className="mb-3">
              <button className="w-40 text-shadow-2xs font-sans shrink py-2 rounded-md text-white bg-linear-to-r from-pink-400 via-indigo-300 to-purple-200">
                Add Expense
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AddExpense;
