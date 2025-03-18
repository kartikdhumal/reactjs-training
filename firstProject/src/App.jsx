import { BrowserRouter, Route, Routes } from "react-router-dom"
import './styles/app.scss'
import Header from "./Components/Header";
import Button from "./Components/Button";
import Home from "./Components/Home";

function App() {

  return (
    <div>
      <Header />
       <Home/>
    </div>
  )
}

export default App
