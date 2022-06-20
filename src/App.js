import "./App.css";
import { Routes, Route } from "react-router-dom";
import Productlisting from "./pages/Productlisting";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cartmanagement from "./pages/Cartmanagement";
import { RequireAuth } from "./components/require-auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route
          path="/productlisting/:categoryName"
          element={<Productlisting />}
        />
        <Route
          path="/cartmanagement"
          element={
            <RequireAuth>
              <Cartmanagement />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
