import React,{useState} from 'react'
import Navbar from "./components/Navbar";
import "./App.css";
import "./components/style.css";
import TextForm from "./components/TextForm";
//importing module from the components folder to get worked upon

//className based components
export default function App() {
//Toggling Dark and light mode by this page
const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
    document.body.style.backgroundColor = "#272829";
  }
    else {
      setMode("light");
      document.body.style.backgroundColor='#fff'
    }
  }
  return (
    <>
      <Navbar dynamicTitle="Play with Text" aboutText="About Us" mode={ mode} toggleMode = {toggleMode} />
      <div className="container my-3">
        <TextForm heading="Used To Play with Text" mode={mode} />
        </div>
    </>
  );
}
