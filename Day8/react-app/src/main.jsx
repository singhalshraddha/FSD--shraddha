import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'
import DisplayMarks from './Displaymarks.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"Shraddha"} email={"shraddhasinghal2004@gmail.com"} mob={"90XXXXX"}/>
    <DisplayMarks/>
  </StrictMode>,
)