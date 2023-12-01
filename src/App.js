import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import Cuker from "./pages/Cuker";
import Bigdrop from "./pages/Bigdrop";
import Tommy from "./pages/Tommy";
import "./pages/navbar.css";

function App() {
  return (
    <div className="h-screen mt-16 flex justify-center">
      <div className="App flex w-[70%]">
        <Router>
          <div className="w-[30%] pt-5 flex">
            <nav className="flex flex-col text-sm font-bold text-gray-600">
              <NavLink className="navbar-css" to="/">
                tommy
              </NavLink>
              <NavLink className="navbar-css" to="bigdrop">
                bigdrop
              </NavLink>
              <NavLink className="navbar-css" to="cuker">
                cuker
              </NavLink>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Tommy />} />
            <Route path="bigdrop" element={<Bigdrop />} />
            <Route path="cuker" element={<Cuker />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
