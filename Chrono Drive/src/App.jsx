import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
