import "./App.css";
import { Ruteo } from "./app/utilidades/rutas/Ruteo";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Ruteo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
