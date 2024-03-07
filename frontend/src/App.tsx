import React from "react";
import { NavigationBar } from "./components/Navigate";

function App() {
  return (
    // main-container
    <div className="relative flex justify-center w-full pt-4 bg-black min-h-40 flex-column">
      <NavigationBar />
    </div>
  );
}

export default App;
