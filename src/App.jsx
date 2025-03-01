import { Route, Routes } from "react-router-dom"
import {AuthComponent} from "./components/Auth/AuthComponent"
import Dashboard from "./components/Dashboard/Dashboard"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthComponent/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
