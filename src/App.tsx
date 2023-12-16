import Parabens from "./assets/parabens.png";
import SamCantora from "./assets/sam_cantora.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="logo-container">
        <div className="logo">
          <img src={SamCantora} className="samara-icon" alt="Ícone Samara" />
        </div>
        <h1>Sam Barbio</h1>
      </div>
      <div className="card">
        <img src={Parabens} className="parabens" alt="Ícone Samara" />
      </div>
    </>
  );
}

export default App;
