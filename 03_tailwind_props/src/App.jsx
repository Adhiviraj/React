import "./App.css";
import Card from "./Componets/Card";

function App() {
  let myObj = {
    username: "hitesh",
    age: 21
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-10">
      
      <div className="p-6 rounded-xl shadow-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 group">
        <h4 className="mb-6 text-white text-lg font-semibold text-center">Here is your new React Card</h4>
        
        {/* The Card component handles everything internally */}
        <Card username="chaiaurcode" btntxt = "click me"/>
        <Card username="Adhiviraj" age = "32"/>
      </div>
      
    </div>
  );
}

export default App;