import React, { Component, useEffect, useLayoutEffect } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import { useState } from 'react'
import Test1 from './Test1'
import Test2 from './Test2'
import axios from 'axios'

function App1() {
    const [test1, setTest1] = useState(false)
    
    return(
        <div>
            <div className='Test-container'>
                <div className="main__title">
                    <div  className="title">Test 1</div>
                </div>
                <div className='Test-btn__container'>
                    <button className='Test-btn1' onClick={() => setTest1(true)}>Bắt đầu</button>
                </div>
                    {test1 && <Test1/>}
            </div>
        </div>
    )
}

function App2() {
    const [test2, setTest2] = useState(false)
    
    return(
        <div>
            <div className='Test-container'>
                <div className="main__title">
                    <div  className="title">Test 2</div>
                </div>
                <div className='Test-btn__container'>
                    <button className='Test-btn1' onClick={() => setTest2(true)}>Bắt đầu</button>
                </div>
                    {test2 && <Test2/>}
            </div>
        </div>
    )
}

function App() {
    const [app, setApp] = useState(true)
    const [app1, setApp1] = useState(false)
    const [app2, setApp2] = useState(false)
    const [rank, setRank] = useState([])

    useLayoutEffect(() => {
        axios.get("http://localhost:3000/Rank")
        .then(res => {
            setRank(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    return(
        <div>
            {app && <div className='Test-container'>
                <div className="main__title-Test">
                    <div className="title">Cùng thực hành thôi nào</div>
                </div>
                <div className='row'>
                    <div className='col l-8 m-12 c-12'>
                        <div className='row'>
                            <div className='col l-4 m-6 c-6'>
                                <div onClick={() => {
                                    setApp(false)
                                    setApp1(true)
                                }} className='practice1-container'>
                                    <div className='practice1-content'>Bắt đầu</div>
                                </div>
                                <h1 className='practice1-title'>Trắc nghiệm cơ bản</h1>
                            </div>
                            <div className='col l-4 m-6 c-6'>
                                <div onClick={() => {
                                    setApp(false)
                                    setApp2(true)
                                }} className='practice2-container'>
                                    <div className='practice2-content'>Bắt đầu</div>
                                </div>
                                <h1 className='practice1-title'>Thế giới động vật</h1>
                            </div>
                        </div>
                    </div>
                    <div className='col l-4 m-0 c-0'>
                        <div className='rank'>
                            <h2 className='rank__header'>Bảng xếp hạng</h2>
                            <div className='rank__body'>
                                <ul className='rank__body-list'>
                                    <li className='row rank__body-item'>
                                        <div className='col l-3'>No</div>
                                        <div className='col l-3'>Name</div>
                                        <div className='col l-3'>Test</div>
                                        <div className='col l-3'>Score</div>

                                    </li>
                                    {rank.map((e,index) => (
                                        <li className='row rank__body-item' key={e.id}>
                                            <div className='col l-3'>{index+1}</div>
                                            <div className='col l-3'>{e.name}</div>
                                            <div className='col l-3'>{e.test}</div>
                                            <div className='col l-3'>{e.score}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {app1 && <App1/>}
            {app2 && <App2/>}
            
        </div>
    )
}

export default App

