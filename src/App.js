import React, { useState } from "react";
import About from "./components/About";
import Header from './components/Header';
import Form from './components/Form';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const [text, setText] = useState("")

  function Uppercase() {
    setText(text.toUpperCase());
  }
  function LowerCase() {
    setText(text.toLowerCase());
  }

  function Capitalize() {
    let words = text.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    setText(words.join(" "));
  }

  function Cleartextarea() {
    setText("")
  }
  
  

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div><Form UppercaseFunc={Uppercase} text={text} setText={setText} LowerCaseFunc={LowerCase} CapitalizeFunc={Capitalize} ClearText={Cleartextarea} /> </div>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
