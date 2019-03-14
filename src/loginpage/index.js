import React, {Component} from 'react'
import './login.css'
import logo from '../img/logo.svg'

export default class LoginPage extends Component{
    render(){
        return(
            <div className="content login-page">
                <div className="login-panel">
                    <form>
                        <img src={logo} />
                        <p>Онлайн система для <br / > отслеживания бронирований</p>
                        <label>
                            <span>Логин:</span>
                            <input type="text" name="login" />
                        </label>
                        <label>
                            <span>Пароль:</span>
                            <input type="password" name="password" />
                        </label>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Запомнить меня</label>
                        <input type="submit" name="submit" value="Войти в систему" />
                    </form>
                </div>
            </div>
        )
    }
}