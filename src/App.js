import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./components/style.css";
import TextForm from "./components/TextForm";

//importing module from the components folder to get worked upon

//className based components
export default function App() {
  // render() {

  return (
    <>
      <Navbar dynamicTitle="Play with Text" aboutText="About Us" />
      <div className="container my-3">
      <TextForm heading="Used To Play with Text"/>
        </div>
    </>
  );
  // }
}
