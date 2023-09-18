import React from "react";
import Home from "./components/Home";
import Contact from "./components/contact";
import NavBar from "./components/NavBar"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import page from "./components/page";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <Home />
      <Projects />
      <Skills />
      <page />
      <Contact />
    </main>
  );
}