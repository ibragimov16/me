import React, {Component} from 'react'
import userImg from '../img/man.png'
import { Link } from "react-router-dom"

export default class MainNav extends Component{
    render(){
        return(
                <nav id="mainnav-container">
                    <div id="mainnav">
                        <div className="user-info">
                            <Link to="/user">
                                <div className="user-img">
                                    <img src={userImg} />
                                </div>
                                <p className="user-name">User Name</p>
                            </Link>
                        </div>
                        <ul id="mainnav-menu" className="list-group"> 
                            <li className="list-header">Мои залы</li>
                            <li className=""><Link to="/room">Зал №1 <i className="fa fa-link"></i></Link></li>
                        </ul>
                        <ul className="list-group">
                            <Link to="/new"><li className="list-header new-room">Добавить Зал +</li></Link>
                        </ul>
                    </div>
                </nav>
        )
    }
}

