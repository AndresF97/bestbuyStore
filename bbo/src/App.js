import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route} from "react-dom"
import Home from "./components/pages/Home"
import Log from "./components/pages/logIn"



function App(){
    return(
        <div>
            <Navbar/>
        </div>
    )
}


export default App;