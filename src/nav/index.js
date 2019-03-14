import React, {Component} from 'react';
import logo from '../img/logo.svg'
import MainNav from './mainnav'
import Content from '../content'
import MainPage from '../mainpage'
import UserPage from '../userpage'
import './nav.css'
import power from '../img/power.svg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <Router>
                <React.Fragment>
                    <nav className="top-nav">
                        <div className="logo"><Link to="/main"><img src={logo} alt=""/>IN Booking</Link></div>
                        <div className="log-out" title="Выйти"><img src={power} /></div>
                    </nav>
                    <MainNav />
                    <Route path="/newroom" component={Content}/>
                    <Route path="/main" component={MainPage}/>
                    <Route path="/user" component={UserPage}/>
                </React.Fragment>
            </Router>
        )
    }
}

export default Nav