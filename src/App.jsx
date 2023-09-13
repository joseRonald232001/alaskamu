import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Hom from "./pages/Hom";


function App() {
  return (
    <HashRouter>
    <NavBar/>
      <>
      <Routes>
        <Route path="/" element={<Hom/>}/>
      </Routes>
      </>
    </HashRouter>
  );
}

export default App;
