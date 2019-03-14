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
                        <li className="list-header">Мои залы</li>
                        <li className=""><a href="#a">Зал №1 <i className="fa fa-link"></i></a></li>
                    </ul>
                    <ul className="list-group">
                        <li className="list-header new-room">Добавить Зал +</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

