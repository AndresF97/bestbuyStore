import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Home from "./components/pages/Home"
import Log from "./components/pages/logIn"
import Search from "./components/pages/itemSearch"
import Payment from "./components/pages/payment"
import Cart from "./components/pages/Cart"
//Note Set Routes
//Note do the loading animataion once page is loading
function App(){
    return(
        <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/logIn" component={Log}/>
                <Route exact path="/Cart" component={Cart}/>
            </Switch>
        </div>
        </Router>
    )
}


export default App;