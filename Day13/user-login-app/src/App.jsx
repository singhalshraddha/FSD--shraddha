import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainLayout from './components/MainLayout';
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from './components/DashBoard';
import { Logout } from './components/Logout';
// import Logout  from './components/Logout';


const App = () => {
  const [data ,setData]= useState();
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
            </Route>
            <Route path="/dashBoard" element={<DashBoard/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App