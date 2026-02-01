import React, { useContext, useState } from "react";
import { mainContext } from "../contexts/mainContextAPI";

function AddExpense() {
  const [hide, setHide] = useState(true);

  const { allExpense, setAllExpense } = useContext(mainContext);

  const handleSubmmit = (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const price = formData.get("price") || 0;
      const description = formData.get("description") || "";
      const purpose = formData.get("purpose") || "";

      if (!description || !purpose || price <= 0) {
        alert("fill the details");
        return;
      }

      const exp = {
        price,
        purpose,
        description,
        created_at: new Date(),
        id: Date.now(),
      };

      setAllExpense([...allExpense, exp]);
      alert("expense added");
      event.target.reset();
    } catch (error) {
      console.error(error.message);
    }
  };

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
          <form onSubmit={handleSubmmit}>
            <div className="mb-3">
              <label htmlFor="price">Price in ₹ Rupees</label>
              <input
                id="price"
                name="price"
                type="number"
                className="w-full py-2 border border-zinc-400 outline-none px-3 rounded"
                placeholder="Enter Price"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className="w-full py-2 border border-zinc-400 outline-none px-3 rounded"
                placeholder="Enter description"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="purpose">Purpose</label>
              <select
                className="w-full py-2 border border-zinc-400 outline-none px-3 rounded"
                name="purpose"
                id="purpose"
                required
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            <div className="mb-3">
              <button
                type="submit"
                className="w-40 text-shadow-2xs font-sans shrink py-2 rounded text-white bg-linear-to-r from-pink-400 via-indigo-300 to-purple-200"
              >
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
