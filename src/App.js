import React from "react";
import "./App.css";
import routes from "./routes";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <div>{routes}</div>
    </div>
  );
}

export default App;
