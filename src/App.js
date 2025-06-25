// import logo from './logo.svg';
import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// imported components
// import Login from '../src/components/login.jsx'

// imported routes
import Layout from './components/layout.jsx'
import Login from "../src/pages/login.js";
import LoginDashboardPage from "./pages/login-dashbord.js";
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    // <div className="App">
    //   <Login />
    // </div>

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login-dashboard" element={<LoginDashboardPage />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
