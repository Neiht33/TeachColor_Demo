import React, { Component, useEffect, useLayoutEffect } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import { useState } from 'react'
import axios from 'axios';
import App from './App';
import Main from './Main';
import Lesson from './Lesson';


function Root() {
    const [index, setIndex] = useState(true);
    const [lesson, setLesson] = useState(false);
    const [test, setTest] = useState(false);
    const [login, setLogin] = useState(true);
    const [userSetting, setUserSetting] = useState(false)

    const [current1, setCurrent1] = useState('current-page')
    const [current2, setCurrent2] = useState('')
    const [current3, setCurrent3] = useState('')

    const userInfo = JSON.parse(window.localStorage.getItem("User"))
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(userInfo) 

    useEffect(() => {
        axios.get("http://localhost:3000/Login")
        .then(res => {
            setUsers(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    useLayoutEffect(() => {
        if(window.localStorage.length != 0) {
            setLogin(false)
        }
    }, [user])

    return (
        
        <div>
            <div className="app">
                <header className="header">
                    <div className="grid wide">
                        <nav className="header__nav">
                            <div className="header__nav-logo hide-on-mobile-tablet">
                                <div href="" className="header__nav-logo-container">
                                    <a href="" className="header__nav-logo-link">
                                        <img src="./img/Logo.png" alt="" className="header__nav-img"/>
                                    </a>
                                </div>
                                <div className="header__nav-logo-input hide-on-mobile-tablet">
                                    <input type="text" placeholder="Tìm kiếm trên CFC"/>
                                </div>
                            </div>
                            <ul className="header__nav-list-home">
                                <li className="header__nav-item">
                                    <a href='#' onClick={() => (setTest(false), setIndex(true), setLesson(false), setCurrent1('current-page'), setCurrent2(''), setCurrent3(''))}className={`header__nav-link ${current1}`}>
                                        <i className="fa-solid fa-house-chimney header__nav-icon"></i>
                                        <span className='hide-on-small-pc hide-on-mobile-tablet'>
                                            Trang chủ
                                        </span>
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a href='#' onClick={() => (setTest(false), setIndex(false), setLesson(true), setCurrent2('current-page'), setCurrent1(''), setCurrent3(''))} className={`header__nav-link ${current2}`}>
                                        <i className="fa-brands fa-leanpub header__nav-icon"></i>
                                        <span className='hide-on-small-pc hide-on-mobile-tablet'>
                                            Học tập
                                        </span>
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a href='#' onClick={() => (setTest(true), setIndex(false), setLesson(false), setCurrent3('current-page'), setCurrent2(''), setCurrent1(''))} className={`header__nav-link ${current3}`}>
                                        <i className="fa-solid fa-pen-to-square header__nav-icon"></i>
                                        <span className='hide-on-small-pc hide-on-mobile-tablet'>
                                            Kiểm tra
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="header__nav-list-user hide-on-mobile">
                                {login && <label htmlFor="register-modal" className="register-label">
                                    <li className="header__nav-item">
                                        <i className="fa-solid fa-pen header__nav-icon"></i>
                                        <span className='hide-on-mobile-tablet'>
                                            Đăng ký
                                        </span>
                                    </li>
                                            </label>}
                                {login && <label htmlFor="login-modal">
                                    <li className="header__nav-item">
                                        <i className="fa-solid fa-user header__nav-icon"></i>
                                        <span className='hide-on-mobile-tablet'>
                                            Đăng nhập
                                        </span>
                                    </li>
                                            </label>}
                                {!login && <li className="header__nav-item" onClick={() => setUserSetting(!userSetting)}>
                                    <div className='user__current'>
                                        <div className='user__current-img'>
                                            <img src="./img/avatar-Nam.jfif"/>
                                        </div>
                                        <div className='user__current-name'>{user.name}</div>
                                    </div>
                                    {userSetting && <div className='user__info'>
                                        <div className='user__info-header'>
                                            <div className='user__current-img'>
                                                <img src="./img/avatar-Nam.jfif"/>
                                            </div>
                                            <div className='user__current-name'>{user.name}</div>
                                        </div>
                                        <div className='user__info-body'>
                                            <ul className='user__info-body-list'>
                                                <li className='user__info-body-item'>
                                                    <i className="fa-solid fa-gear"></i>
                                                    Cài đặt
                                                </li>
                                                <li className='user__info-body-item'>
                                                    <i className="fa-solid fa-circle-info"></i>
                                                    Trợ giúp
                                                </li>
                                                <li className='user__info-body-item' onClick={() => {
                                                    window.localStorage.clear()
                                                    window.location.reload()
                                                }}>
                                                    <i className="fa-solid fa-right-from-bracket"></i>
                                                    Đăng xuất
                                                </li>
                                            </ul>
                                        </div>
                                                    </div>}
                                            </li>}
                            </ul>
                        
                        </nav>
                    </div>
                </header>

                <div className="main" id="headWeb">
                    <div className="grid wide">
                        <div className="container">
                            {index && <Main/>}
                            {lesson && <Lesson/>}
                            {test &&<App/>}
                        </div>
                    </div>
                </div>

                <footer>
                Được xây dựng bởi Bùi Quốc Thiên thienb2012259@student.ctu.edu.vn
                </footer>

                <input hidden type="checkbox" id="register-modal"/>
                <input hidden type="checkbox" id="login-modal"/>

                <div className="modal__register">
                    <div className="modal__container">
                        <div className="modal__header">
                            <label className="modal__header-exit" htmlFor="register-modal">
                                <i className="fa-solid fa-xmark modal__header-icon"></i>
                            </label>
                            <div className="modal__header-title">Đăng ký</div>
                        </div>
                        <div className="modal__body">
                            <form action="http://localhost:3000/adduser" method='post' className='submit-form'>
                                <div className="modal__body-content">
                                    <label htmlFor="name-input">Họ và tên:</label><br/>
                                    <input name='name' required type="text" id="name-input" pattern='.[^0-9]{3,}' placeholder='Full name'/>
                                </div>
                                <div className="modal__body-content">
                                    <label htmlFor="phone-input">Số điện thoại:</label>
                                    <input name='phone' required type="text" id="phone-input" pattern='^[0-9]{10,11}$' placeholder='Phone number'/>
                                </div>
                                <div className="modal__body-content">
                                    <label htmlFor="passwd-input">Mật khẩu:</label>
                                    <input name='passwd' required type="password" id="passwd-input" placeholder='New password'/>
                                </div>
                                <div className="modal__body-content">
                                    <label htmlFor="avatar-input">Ảnh đại diện:</label>
                                    <input name='avatar' required type="file" id="avatar-input"/>
                                </div>
                                <div className="register-submit">
                                    <button className="register-btn" type="submit">Đăng ký</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal__login">
                    <div className="modal__login-container">
                        <div className="modal__login-header">
                            <label className="modal__login-header-exit" htmlFor="login-modal">
                                <i className="fa-solid fa-xmark modal__login-header-icon"></i>
                            </label>
                            <div className="modal__login-header-title">Đăng nhập</div>
                        </div>
                        <div className="modal__login-body">
                            <form action="http://localhost:8080/">
                                <div className="modal__login-body-content">
                                    <label htmlFor="phone-login">Số điện thoại:</label>
                                    <input required type="text" id="phone-login" placeholder='Phone number'/>
                                </div>
                                <div className="modal__login-body-content">
                                    <label htmlFor="passwd-login">Mật khẩu:</label>
                                    <input required type="password" id="passwd-login" placeholder='Password'/>
                                </div>
                                <div className="login-submit">
                                    <span className='login__register-link' onClick={() => {
                                        const checkRegister = document.querySelector('#register-modal')
                                        const checkLogin = document.querySelector('#login-modal')
                                        checkRegister.checked = true
                                        checkLogin.checked = false
                                    }}>Đăng ký</span>
                                    <button onClick={() => {
                                        const user_phone = document.querySelector('#phone-login')
                                        const user_passwd = document.querySelector('#passwd-login')
                                        for(let i = 0; i < users.length; i++) {
                                            if(users[i].phone == user_phone.value && users[i].password == user_passwd.value){
                                                const userCurrent = {
                                                    id: users[i].idUser,
                                                    name: users[i].name,
                                                    phone: users[i].phone,
                                                    password: users[i].password
                                                }
                                                const userJSON = JSON.stringify(userCurrent)
                                                window.localStorage.setItem("User", userJSON)
                                                alert("Đăng nhập thành công")

                                                const loginOut = document.querySelector('#login-modal')
                                                loginOut.checked = false
                                                setUser(userCurrent)
                                            }
                                        }
                                        if(window.localStorage.length == 0) {
                                            alert("Tài khoản không tồn tại")
                                        }
                                    }} className="login-btn" type="button">Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Render component App vào #root element
// React@17
// ReactDOM.render(<App />, document.getElementById('root'));

// React@18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Root />)

