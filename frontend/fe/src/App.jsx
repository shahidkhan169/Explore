import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/register"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/reg" element={<Register/>}/>
    </Routes>
    <Login/>
    </BrowserRouter>
  )
}

export default App
