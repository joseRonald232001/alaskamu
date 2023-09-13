import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.JSX";
import NavBar from "./components/NavBar";


function App() {
  return (
    <HashRouter>
    <NavBar/>
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </>
    </HashRouter>
  );
}

export default App;
