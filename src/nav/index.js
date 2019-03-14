import React, {Component} from 'react';
import logo from '../img/logo.png'
import MainNav from './mainnav'
import Content from '../content'
import './nav.css'

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <nav className="top-nav">
                    <div className="logo"><a href="#a"><img src={logo} alt=""/>Logo</a></div>
                    <div className="nav-toggle" 
                      title="нажмите, чтобы открыт панель навигации" 
                      onClick = {this.openMainNav}>
                    </div>
                </nav>
                <MainNav />
                <Content/>
            </div>
        )
    }
}

export default Nav