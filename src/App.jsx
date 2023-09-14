import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Hom from "./pages/Hom";
import Events from "./pages/Events";


function App() {
  return (
    <HashRouter>
    <NavBar/>
      <>
      <Routes>
        <Route path="/" element={<Hom/>}/>
        <Route path="/events" element={<Events/>} />
      </Routes>
      </>
    </HashRouter>
  );
}

export default App;
