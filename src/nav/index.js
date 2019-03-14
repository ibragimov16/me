import React, {Component} from 'react';
import logo from '../img/logo.png'
import MainNav from './mainnav'
import Content from '../content'
import './nav.css'
import power from '../img/power.svg'

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <React.Fragment>
                <nav className="top-nav">
                    <div className="logo"><a href="#a"><img src={logo} alt=""/>Logo</a></div>
                    <div className="log-out" title="Выйти"><img src={power} /></div>
                </nav>
                <MainNav />
                <Content/>
            </React.Fragment>
        )
    }
}

export default Nav