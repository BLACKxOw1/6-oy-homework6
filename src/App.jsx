import React from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <UsingProps />
    </div>
  );
}

export default App
