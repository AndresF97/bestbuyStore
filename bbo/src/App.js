import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route} from "react-dom"
import Home from "./components/pages/Home"
import Log from "./components/pages/logIn"
import Search from "./components/pages/itemSearch"
import Payment from "./components/pages/payment"



function App(){
    return(
        <div>
            <Navbar/>
            <Payment />
        </div>
    )
}


export default App;