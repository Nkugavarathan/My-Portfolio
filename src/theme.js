import React, { createContext, useContext, useEffect, useState } from "react"

const STORAGE_KEY = "theme"
const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} })

function readSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "light" || saved === "dark") return saved
  } catch (e) {
    // storage blocked (private mode etc.) - fall back to system preference
  }
  return null
}

function systemTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark"
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || readSaved() || systemTheme()
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute("content", theme === "light" ? "#f6f7fb" : "#070a12")
  }, [theme])

  // Follow OS changes until the visitor picks a theme themselves
  useEffect(() => {
    if (!window.matchMedia) return
    const mq = window.matchMedia("(prefers-color-scheme: light)")
    const onChange = () => {
      if (!readSaved()) setTheme(mq.matches ? "light" : "dark")
    }
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])

  const toggleTheme = () =>
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark"
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch (e) {
        // ignore
      }
      return next
    })

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
