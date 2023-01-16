import { BrowserRouter, Route, Routes } from "react-router-dom";
import Changepass from "./components/Pages/Auth/Changepass";
import Resetpass from "./components/Pages/Auth/Resetpass";
import SetPass from "./components/Pages/Auth/SetPass";
import Signup from "./components/Pages/Auth/Signup";
import Contact from "./components/Pages/Contact";
import Dashboard from "./components/Pages/Dashboard";
import Home from "./components/Pages/Home";
import Layout from "./components/Pages/Layout";
import Protected from "./components/protect/Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Signup />} />

        <Route path="/" element={<Protected Component={Layout} />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />

          <Route path="setpass" element={<SetPass />} />
          <Route
            path="changepass"
            element={<Protected Component={Changepass} />}
          />
        </Route>
        <Route path="reset" element={<Resetpass />} />
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "20vh" }}>
              <b>404</b> not found, Page Does not exist
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
