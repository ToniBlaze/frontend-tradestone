import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./middleware/ProtectedRoutes";

// PAGES
import ErrorPage from "./pages/ErrorPage";

// COMPONENTS
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}

          {/* ***  PROTECTED ROUTES  *** */}
        <Route element={<ProtectedRoutes/>}>
          {/* <Route path="/placeholder" element={<Placeholder />} /> */}
        </Route>

        {/* ***  ERROR ROUTE  *** */}
        <Route path="*" element={<ErrorPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;