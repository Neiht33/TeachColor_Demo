import React, { Component, useLayoutEffect } from 'react' // nạp thư viện react
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
        axios.get("http://localhost:3000/Test1")
        .then(res => {
            setItem(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    function Test() {
        return (
               <div>
                    <div className='Question'>
                        {item.map(e => (
                            <div key={e.id} className='Question-content'>
                                <div key={e.answer} className='Question-title'>{e.id}.{e.question}</div>
                                <ul className='Option-list'>
                                    <li className='Option-item'>
                                        <input type='radio' className='Option-choice' id={`id${e.id}-option1`} name= {`option${e.id}`}/>
                                        <label htmlFor={`id${e.id}-option1`}>
                                            {e.option1}    
                                        </label>
                                    </li>
                                    <li className='Option-item'>
                                        <input type='radio' className='Option-choice' id={`id${e.id}-option2`} name= {`option${e.id}`}/>
                                        <label htmlFor={`id${e.id}-option2`}>
                                            {e.option2}    
                                        </label>
                                    </li>
                                    <li className='Option-item'>
                                        <input type='radio' className='Option-choice' id={`id${e.id}-option3`} name= {`option${e.id}`}/>
                                        <label htmlFor={`id${e.id}-option3`}>
                                            {e.option3}    
                                        </label>
                                    </li>
                                    <li className='Option-item'>
                                        <input type='radio' className='Option-choice' id={`id${e.id}-option4`} name= {`option${e.id}`}/>
                                        <label htmlFor={`id${e.id}-option4`}>
                                            {e.option4}    
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='complete-container'>
                        <button onClick={() => {
                            const choice1 = document.querySelector('#id1-option3')
                            const choice2 = document.querySelector('#id2-option4')
                            const choice3 = document.querySelector('#id3-option2')
                            const choice4 = document.querySelector('#id4-option1')
                            const choice5 = document.querySelector('#id5-option4')
                            const choice6 = document.querySelector('#id6-option3')
                            const choice7 = document.querySelector('#id7-option2')
                            const choice8 = document.querySelector('#id8-option1')
                            const choice9 = document.querySelector('#id9-option4')
                            const choice10 = document.querySelector('#id10-option1')
                            if(choice1.checked == true) {
                                count++
                            }
                            if(choice2.checked == true) {
                                count++
                            }
                            if(choice3.checked == true) {
                                count++
                            }
                            if(choice4.checked == true) {
                                count++
                            }
                            if(choice5.checked == true) {
                                count++
                            }
                            if(choice6.checked == true) {
                                count++
                            }
                            if(choice7.checked == true) {
                                count++
                            }
                            if(choice8.checked == true) {
                                count++
                            }
                            if(choice9.checked == true) {
                                count++
                            }
                            if(choice10.checked == true) {
                                count++
                            }

                            if(window.localStorage.length != 0){
                                const inputScore = document.querySelector('.test_score1')
                                const inputIDUser = document.querySelector('.test_user1')
                                const submitScore = document.querySelector('.submitScore1')
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
                    <form hidden action='http://localhost:3000/postScore' method='post' className='submitScore1'>
                        <input name="score" className='test_score1'/>
                        <input name="idUser" className='test_user1'/>
                        <input name="idTest" className='test_name' value={'1'}/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>  
        )
    }

    return(
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
    
function Test1() {
    const [countdown, setCountdown] = useState(3)
    const [test, setTest] = useState(false)
    
    useEffect(() => {
        const timeStart = setTimeout(() => {
                            setCountdown(countdown - 1)
                            if(countdown == 0) {
                                setTest(true);
                                setCountdown(false)
                            }
                        }, 1000);
        return () => clearTimeout(timeStart)
    }, [countdown])


    return(
        <div>
            <div className='countDown-container'>
                <div className='title countDown'>{countdown}</div>
            </div>
            {test && <App/>}
        </div>
    )
}


export default Test1