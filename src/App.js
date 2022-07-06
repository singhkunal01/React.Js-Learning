//importing module from the components folder to get worked upon
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./components/style.css";
import TextForm from "./components/TextForm";
import About from "./components/About";

//for using react routing
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//className based components
export default function App() {
  //Toggling Dark and light mode by this page
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#272829";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          dynamicTitle="Play with Text"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About title="About My site" mode={mode} />} />
            {/* </Route> */}
            <Route
              path="/"
              element={
                <TextForm heading="Used To Play with Text" mode={mode} />
              }
            />
            {/* </Route> */}
          </Routes>

          {/* <TextForm heading="Used To Play with Text" mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}
