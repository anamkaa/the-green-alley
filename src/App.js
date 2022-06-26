import "./App.css";
import { Routes, Route } from "react-router-dom";
import Productlisting from "./pages/Productlisting";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cartmanagement from "./pages/Cartmanagement";
import { RequireAuth } from "./components/require-auth";
import { Toaster } from "react-hot-toast";

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

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 2000,
          style: {
            background: "#308a76",
            color: "#f8f9fa",
            borderRadius: "0.3rem",
          },
        }}
      />
    </div>
  );
}

export default App;
