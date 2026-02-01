import Navbar from "./components/Navbar";
import AddExpense from "./components/AddExpense";
import AllExpense from "./components/AllExpense";
import LisExpense from "./components/LisExpense";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-[80%] mx-auto">
        <AddExpense />
        <AllExpense />
        {/* <LisExpense /> */}
      </main>
    </>
  );
}

export default App;
