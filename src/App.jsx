import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar.jsx'
import Employees from './Employees.jsx'
import Clients from './Clients.jsx'
import Footer from './Footer.jsx'

function App() {
return (
  <div>
    <Navbar></Navbar>
    <Employees></Employees>
    <Clients></Clients>
    <Footer></Footer>
  </div>
)
}

export default App
