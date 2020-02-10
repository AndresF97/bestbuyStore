import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route} from "react-dom"
import Home from "./components/pages/Home"



function App(){
    return(
        <div>
            <Navbar/>
            <Home/>
        </div>
    )
}


export default App;