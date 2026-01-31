import React from "react";
import Navbar from "./components/Navbar";
import AddExpense from "./components/AddExpense";
import AllExpense from "./components/AllExpense";
import LisExpense from "./components/LisExpense";

function App() {
  return (
    <>
      <Navbar />
      <AddExpense />
      <AllExpense />
      <LisExpense />
    </>
  );
}

export default App;
