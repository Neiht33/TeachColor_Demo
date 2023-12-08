import React, { Component } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';

function App() {

    const [item, setItem] = useState([])

    const [test, setTest] = useState(true)
    const [completeTest, setCompleteTest] = useState(false)
    const [score, setScore] = useState(count)
    var count = 0;

    useEffect(() => {
        axios.get("http://localhost:3000/Test2")
        .then(res => {
            setItem(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    function Test() {
        return (
            <div>
                {item.map(e => (
                    <div className="question">
                        <div className="question-title">
                            <h2>{e.id - 10}.{e.question}</h2>
                        </div>
                        <div className="question-option">
                            <div className="option-container4">
                                <div onClick={() => {
                                    const answerClass = `.Answer${e.id - 10}-input`
                                    const answer1 = document.querySelector(answerClass)
                                    answer1.value = 'A'
                                }} className="option1-container4">
                                    <img src={e.option1} alt="" className="question4-option1"/>
                                </div>
                                <div onClick={() => {
                                    const answerClass = `.Answer${e.id - 10}-input`
                                    const answer1 = document.querySelector(answerClass)
                                    answer1.value = 'B'
                                }} className="option2-container4">
                                    <img src={e.option2} alt="" className="question4-option2"/>
                                </div>
                                <div onClick={() => {
                                    const answerClass = `.Answer${e.id - 10}-input`
                                    const answer1 = document.querySelector(answerClass)
                                    answer1.value = 'C'
                                }} className="option3-container4">
                                    <img src={e.option3} alt="" className="question4-option3"/>
                                </div>
                                <div onClick={() => {
                                    const answerClass = `.Answer${e.id - 10}-input`
                                    const answer1 = document.querySelector(answerClass)
                                    answer1.value = 'D'
                                }} className="option4-container4">
                                    <img src={e.option4} alt=""  className="question4-option4"/>
                                </div>
                            </div>
                            <div className="option-container4">
                                <h1>A.</h1>
                                <h1>B.</h1>
                                <h1>C.</h1>
                                <h1>D.</h1>
                            </div>
                            <div className='Answer-input-container'>
                                Đáp án:
                                <input className={`Answer${e.id-10}-input`}/>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='complete-container'>
                    <button onClick={() => {
                        const answer1 = document.querySelector('.Answer1-input')
                        const answer2 = document.querySelector('.Answer2-input')
                        const answer3 = document.querySelector('.Answer3-input')
                        const answer4 = document.querySelector('.Answer4-input')
                        const answer5 = document.querySelector('.Answer5-input')
                        const answer6 = document.querySelector('.Answer6-input')
                        const answer7 = document.querySelector('.Answer7-input')
                        const answer8 = document.querySelector('.Answer8-input')
                        const answer9 = document.querySelector('.Answer9-input')
                        const answer10 = document.querySelector('.Answer10-input')
                        console.log(answer1);
                        if(answer1.value === 'B') {
                            count++
                        }
                        if(answer2.value === 'D') {
                            count++
                        }
                        if(answer3.value === 'C') {
                            count++
                        }
                        if(answer4.value === 'D') {
                            count++
                        }
                        if(answer5.value === 'A') {
                            count++
                        }
                        if(answer6.value === 'A') {
                            count++
                        }
                        if(answer7.value === 'A') {
                            count++
                        }
                        if(answer8.value === 'D') {
                            count++
                        }
                        if(answer9.value === 'B') {
                            count++
                        }
                        if(answer10.value === 'C') {
                            count++
                        }

                        if(window.localStorage.length != 0){
                            const inputScore = document.querySelector('.test_score2')
                            const inputIDUser = document.querySelector('.test_user2')
                            const submitScore = document.querySelector('.submitScore2')
                            const user = JSON.parse(window.localStorage.getItem('User'))

                            inputScore.value = count
                            inputIDUser.value = user.id
                            submitScore.submit();
                        }

                        setScore(count)
                        setTest(false)
                        setCompleteTest(true)
                    }} className='complete-btn'>Hoàn thành</button>
                </div>
                <form hidden action='http://localhost:3000/postScore' method='post' className='submitScore2'>
                    <input name="score" className='test_score2'/>
                    <input name="idUser" className='test_user2'/>
                    <input name="idTest" className='test_name' value={'2'}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            {test && <Test/>}
            {completeTest && <div className='Complete-content'>
                                <div className='Complete'>
                                    <h1 className='title'>Chúc mừng bạn đã hoàn thành bài kiểm tra</h1>
                                    <br/><br/>
                                    <h1>Số điểm bạn đạt được là: {score} / 10</h1>
                                </div>
                            </div>}
        </div>
    )
}

function Test2() {
    const [countdown, setCountdown] = useState(3)
    const [test, setTest] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setCountdown(countdown - 1)
            if(countdown == 0) {
                setTest(true);
                setCountdown(false)
            }
        }, 1000);
    }, [countdown])

    useEffect(() => {

    })

    return(
        <div>
            <div className='countDown-container'>
                <div className='title countDown'>{countdown}</div>
            </div>
            {test && <App/>}
        </div>
    )
}

export default Test2