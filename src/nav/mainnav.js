import React, {Component} from 'react'
import userImg from '../img/man.png'

export default class MainNav extends Component{
    render(){
        return(
            <nav id="mainnav-container">
                <div id="mainnav">
                    <div className="user-info">
                        <div className="user-img">
                            <img src={userImg} />
                        </div>
                        <p className="user-name">User Name</p>
                    </div>
                    <ul id="mainnav-menu" className="list-group"> 
                        <li className="list-header">Навигация</li>
                        <li className=""><a href="#a">Ссылка 1 <i className="fa fa-link"></i></a></li> 
                        <li className=""><a href="#a">Ссылка 2 <i className="fa fa-link"></i></a></li> 
                        <li className=""><a href="#a">Ссылка 3 <i className="fa fa-link"></i></a></li> 
                        <li className=""><a href="#a">Ссылка 4 <i className="fa fa-link"></i></a></li> 
                        <li className=""><a href="#a">Ссылка 5 <i className="fa fa-link"></i></a></li> 
                        <li className=""><a href="#a">Ссылка 6 <i className="fa fa-link"></i></a></li> 
                    </ul>
                </div>
            </nav>
        )
    }
}

