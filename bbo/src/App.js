import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route} from "react-dom"
import Home from "./components/pages/Home"
import Log from "./components/pages/logIn"
import Search from "./components/pages/itemSearch"
import Payment from "./components/pages/payment"
import Cart from "./components/pages/Cart"
//Note Work on Cart page
function App(){
    return(

        <div>
            <Navbar/>
            <Cart />
        </div>
    )
}


export default App;