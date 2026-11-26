import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { About, Experience, Projects, Skills, Highlights } from "./components/Sections"
import { Contact, Footer } from "./components/Contact"
import { ThemeProvider } from "./theme"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
