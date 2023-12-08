import React, { Component, useEffect } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom


// Tạo component AppbackgroundColor
function Lesson() {

    useEffect(() => {
        const answerMess3 = document.querySelector('.answer-mess3')
        const qs3option1 = document.querySelector('.question3-option1')
        const qs3option2 = document.querySelector('.question3-option2')
        const qs3option3 = document.querySelector('.question3-option3')
        const qs3option4 = document.querySelector('.question3-option4')
                                    
        const op1Container3 = document.querySelector('.option1-container3')
        const op2Container3 = document.querySelector('.option2-container3')
        const op3Container3 = document.querySelector('.option3-container3')
        const op4Container3 = document.querySelector('.option4-container3')

        qs3option1.onclick = () => {
            op1Container3.classList.add('choosed')
            op2Container3.classList.remove('choosed','correct')
            op3Container3.classList.remove('choosed','wrong')
            op4Container3.classList.remove('choosed','wrong')
            answerMess3.innerHTML = ''
        }
        qs3option2.onclick = () => {
            op2Container3.classList.add('choosed')
            op1Container3.classList.remove('choosed','wrong')
            op3Container3.classList.remove('choosed','wrong')
            op4Container3.classList.remove('choosed','wrong')
            answerMess3.innerHTML = ''
        }
        qs3option3.onclick = () => {
            op3Container3.classList.add('choosed')
            op2Container3.classList.remove('choosed','correct')
            op1Container3.classList.remove('choosed','wrong')
            op4Container3.classList.remove('choosed','wrong')
            answerMess3.innerHTML = ''
        }
        qs3option4.onclick = () => {
            op4Container3.classList.add('choosed')
            op2Container3.classList.remove('choosed','correct')
            op3Container3.classList.remove('choosed','wrong')
            op1Container3.classList.remove('choosed','wrong')
            answerMess3.innerHTML = ''
        }

        const qs4option1IMG = document.querySelector('.question4-option1')
        const qs4option2IMG = document.querySelector('.question4-option2')
        const qs4option3IMG = document.querySelector('.question4-option3')
        const qs4option4IMG = document.querySelector('.question4-option4')

        const answerMess4 = document.querySelector('.answer-mess4')

        const qs4option1 = document.querySelector('#question4-option1')
        const qs4option2 = document.querySelector('#question4-option2')
        const qs4option3 = document.querySelector('#question4-option3')
        const qs4option4 = document.querySelector('#question4-option4')

        const op1Container4 = document.querySelector('.option1-container4')
        const op2Container4 = document.querySelector('.option2-container4')
        const op3Container4 = document.querySelector('.option3-container4')
        const op4Container4 = document.querySelector('.option4-container4')

        qs4option1IMG.onclick = () => {
            qs4option1.checked = true
            op1Container4.classList.add('choosed-IMG')
            op2Container4.classList.remove('choosed-IMG','wrong-IMG')
            op3Container4.classList.remove('choosed-IMG','wrong-IMG')
            op4Container4.classList.remove('choosed-IMG','correct-IMG')
            answerMess4.innerHTML = ''
        }
        qs4option2IMG.onclick = () => {
            qs4option2.checked = true
            op2Container4.classList.add('choosed-IMG')
            op1Container4.classList.remove('choosed-IMG','wrong-IMG')
            op3Container4.classList.remove('choosed-IMG','wrong-IMG')
            op4Container4.classList.remove('choosed-IMG','correct-IMG')
            answerMess4.innerHTML = ''
        }
        qs4option3IMG.onclick = () => {
            qs4option3.checked = true
            op3Container4.classList.add('choosed-IMG')
            op2Container4.classList.remove('choosed-IMG','correct-IMG')
            op1Container4.classList.remove('choosed-IMG','wrong-IMG')
            op4Container4.classList.remove('choosed-IMG','correct-IMG')
            answerMess4.innerHTML = ''
        }
        qs4option4IMG.onclick = () => {
            qs4option4.checked = true
            op4Container4.classList.add('choosed-IMG')
            op2Container4.classList.remove('choosed-IMG','wrong-IMG')
            op3Container4.classList.remove('choosed-IMG','wrong-IMG')
            op1Container4.classList.remove('choosed-IMG','wrong-IMG')
            answerMess4.innerHTML = ''
        }
    })

    return(
        <div>
                    <div className="main__title">
                        <div className="title">Cùng bé học màu bằng tiếng Anh</div>
                    </div>
                    <a href="#headWeb" className="main__scroll">
                        <img src="./img/Logo2.png" alt=""/>
                    </a>
                    <div className="row color__container">
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "rgb(210, 14, 14)"}}>
                            <a href="#red" className="color__link">
                                Red
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "orange"}}>
                            <a href="#orange" className="color__link">
                                Orange
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "rgb(236, 236, 0)"}}>
                            <a href="#yellow" className="color__link">
                                Yellow
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "rgb(0, 179, 0)"}}>
                            <a href="#green" className="color__link">
                                Green
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "rgb(0, 0, 229)"}}>
                            <a href="#blue" className="color__link">
                                Blue
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "purple"}}>
                            <a href="#purple" className="color__link">
                                Purple
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "white"}}>
                            <a href="#white" className="color__link">
                                White
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "pink"}}>
                            <a href="#pink" className="color__link">
                                Pink
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "gray"}}>
                            <a href="#gray" className="color__link">
                                Gray
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "black"}}>
                            <a href="#black" className="color__link">
                                Black
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "#41312a"}}>
                            <a href="#brown" className="color__link">
                                Brown
                            </a>
                        </div>
                        <div className="col l-1 m-1 c-1 color-item" style={{backgroundColor: "rgba(10, 39, 80, 1)"}}>
                            <a href="#indigoBlue" className="color__link">
                                Indigo blue
                            </a>
                        </div>
                    </div>
                    <div className="color__container-support">
                        <div className='color-review__scroll'>
                            <a href='#review' className='color-review__scroll-container'>
                                <i class="fa-solid fa-book"></i>
                                Ôn tập
                            </a>
                        </div>
                        <button onClick={() => {
                            const colorList = document.querySelector('.color-list')
                            colorList.classList.toggle('open')
                        }} className="color__support-btn">
                            <img src="./img/vong7mau.png" alt=""/>
                        </button>
                        <div className="color-list">
                            <div className="color__item-support" style={{backgroundColor: "rgb(210, 14, 14)"}}>
                                <a href="#red" className="color__link"></a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "orange"}}>
                                <a href="#orange" className="color__link"> </a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "rgb(236, 236, 0)"}}>
                                <a href="#yellow" className="color__link"></a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "rgb(0, 179, 0)"}}>
                                <a href="#green" className="color__link"></a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "rgb(0, 0, 229)"}}>
                                <a href="#blue" className="color__link"></a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "purple"}}>
                                <a href="#purple" className="color__link"></a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "white"}}>
                                <a href="#white" className="color__link"> </a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "pink"}}>
                                <a href="#pink" className="color__link"></a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "gray"}}>
                                <a href="#gray" className="color__link"></a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "black"}}>
                                <a href="#black" className="color__link"></a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "#41312a"}}>
                                <a href="#brown" className="color__link"></a>
                            </div>
                            <div className="color__item-support" style={{backgroundColor: "rgba(10, 39, 80, 1)"}}>
                                <a href="#indigoBlue" className="color__link"></a>
                            </div>
                        </div>
                    </div>
                    <div className="color__content">
                        <ul className="color__content-list">
                            <li className="color__content-item" id="red">
                                <h1>1. Red: màu đỏ</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /red/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/redMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10 }}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/vatMauDo.jfif" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/long-den-do.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/Vet.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="orange">
                                <h1>2. Orange: màu cam</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /ˈɒr.ɪndʒ/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/orangeMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/cam.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/huongduong.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/cahe.jfif" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="yellow">
                                <h1>3. Yellow: màu vàng</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm:  /ˈjel.əʊ/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/yellowMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/huongduongvang.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/minions.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/1470969796_lua-4.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="green">
                                <h1>4. Green: xanh lục</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm:  /griːn/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/greenMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/co3la.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/ech.webp" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/thachanh.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="blue">
                                <h1>5. Blue: xanh dương</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /bluː/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/blueMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/suabien.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/xanhduong.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/buomxanhduong.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="purple">
                                <h1>6. Purple: màu tím</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /`pə:pl/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/purpleMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/nhotim.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/mautim.jfif" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/hoatim.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="white">
                                <h1>7. White: màu trắng</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /waɪt/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/whiteMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/phongtrang.webp" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/bongtrang.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/hoatrang.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="pink">
                                <h1>8. Pink: màu hồng</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /pɪŋk/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/pinkMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/hachong.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/donghohong.png" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/kemhong.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="gray">
                                <h1>9. Gray: màu xám</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /greɪ/ </p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/grayMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/meoxam.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/hoaxam.jpeg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/phongxam.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="black">
                                <h1>10. Black: màu đen</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /blæk/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/blackMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/kemden.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/doden.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/black-rose-533x400.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="brown">
                                <h1>11. Brown: màu nâu</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /braʊn/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/brownMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/gonau.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/phongnau.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/chonau.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="color__content-item" id="indigoBlue">
                                <h1>12. Indigo blue: màu chàm</h1>
                                <div className="color__content-body">
                                    <div className="color__content-pronounce">
                                        <p className="color__content-voice">Phát âm: /ˈɪn.dɪ.ɡəʊ bluː/</p>
                                        <audio controls className="color__content-mute">
                                            <source src="./mp3/indigoBlueMP3.m4a"/>
                                        </audio>
                                    </div>
                                    <div className="color__content-support">
                                        <p>Từ loại: tính từ (Adj)</p>
                                        <p style={{margin: 10}}>Ảnh minh họa:</p>
                                        <div className="row">
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/docham.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/botcham.jpg" alt=""/>
                                            </div>
                                            <div className="col l-4 m-12 c-12 color_content-container">
                                                <img className="color_content-img" src="./img/vaicham.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='color__mix'>
                        <h1>Cách pha màu cơ bản</h1>
                        <div className='color__mix-container'>
                            <img src='./img/bangPhamau.png' className='color__mix-img'/>
                        </div>
                    </div>
                    <div id='review' className="color-review">
                        <h1>Cùng ôn lại kiến thức vừa học nhé</h1>
                        <div className="question">
                            <div className="question-title">
                                <h2>1. Màu đen trong tiếng Anh được viết là gì nào?</h2>
                            </div>
                            <div className="question-option">
                                <div className="option-container">
                                    <input id="question1-option1" type="radio" name="question1-radio" className="question1-option1"/>
                                    <label htmlFor="question1-option1">
                                        Blue
                                    </label>
                                </div>
                                <div className="option-container">
                                    <input id="question1-option2" type="radio" name="question1-radio" className="question1-option2"/>
                                    <label htmlFor="question1-option2">
                                        Yellow
                                    </label>
                                </div>
                                <div className="option-container">
                                    <input id="question1-option3" type="radio" name="question1-radio" className="question1-option3"/>
                                    <label htmlFor="question1-option3">
                                        Black
                                    </label>
                                </div>
                                <div className="option-container">
                                    <input id="question1-option4" type="radio" name="question1-radio" className="question1-option4"/>
                                    <label htmlFor="question1-option4">
                                        Purple
                                    </label>
                                </div>
                                <p className="answer-mess1"></p>
                            </div>
                            <div className="answer-btn">
                                <button onClick={() => {
                                    const qs1Option1 = document.querySelector('.question1-option1')
                                    const qs1Option2 = document.querySelector('.question1-option2')
                                    const qs1Option3 = document.querySelector('.question1-option3')
                                    const qs1Option4 = document.querySelector('.question1-option4')
                                    const answerMess1 = document.querySelector('.answer-mess1')
                                    if(qs1Option1.checked == true) {
                                        answerMess1.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Hông bé ơi, Blue là màu xanh dương'
                                    }else
                                    if(qs1Option2.checked == true) {
                                        answerMess1.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Chưa chính xác, Yellow là màu vàng nhá.'
                                    }else
                                    if(qs1Option3.checked == true) {
                                        answerMess1.innerHTML = '<i class="fa-solid fa-check correct-icon"></i>Rất chính xác'
                                    }else
                                    if(qs1Option4.checked == true) {
                                        answerMess1.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Purple là màu tím bé nhé'
                                    }
                                }} className="question-answer1">Chọn</button>
                            </div>
                        </div>
                        <div className="question">
                            <div className="question-title">
                                <h2>2. Pink trong tiếng Anh là màu gì thế?</h2>
                            </div>
                            <div className="question-option">
                                <div className="option-container">
                                    <input id="question2-option1" type="radio" name="question2-radio" className="question2-option1"/>
                                    <label htmlFor="question2-option1">
                                        Hồng
                                    </label>
                                </div>
                                <div className="option-container">
                                    <input id="question2-option2" type="radio" name="question2-radio" className="question2-option2"/>
                                    <label htmlFor="question2-option2">
                                        Trắng
                                    </label>
                                </div>
                                <div className="option-container">
                                    <input id="question2-option3" type="radio" name="question2-radio" className="question2-option3"/>
                                    <label htmlFor="question2-option3">
                                        Nâu
                                    </label>
                                </div>
                                <div className="option-container">
                                    <input id="question2-option4" type="radio" name="question2-radio" className="question2-option4"/>
                                    <label htmlFor="question2-option4">
                                        Đỏ
                                    </label>
                                </div>
                                <p className="answer-mess2"></p>
                            </div>
                            <div className="answer-btn">
                                <button onClick={() => {
                                    const qs2option1 = document.querySelector('.question2-option1')
                                    const qs2option2 = document.querySelector('.question2-option2')
                                    const qs2option3 = document.querySelector('.question2-option3')
                                    const qs2option4 = document.querySelector('.question2-option4')
                                    const answerMess2 = document.querySelector('.answer-mess2')
                                    if(qs2option1.checked == true) {
                                        answerMess2.innerHTML = '<i class="fa-solid fa-check correct-icon"></i>Chính xác là như vậy'
                                    }else
                                    if(qs2option2.checked == true) {
                                        answerMess2.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Trắng là White mà, thử lại nhá'
                                    }else
                                    if(qs2option3.checked == true) {
                                        answerMess2.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Nâu là Brown mà'
                                    }else
                                    if(qs2option4.checked == true) {
                                        answerMess2.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Đỏ là red bé nhé'
                                    }
                                }} className="question-answer2">Chọn</button>
                            </div>
                        </div>
                        <div className="question">
                            <div className="question-title">
                                <h2>3. Xe trong ảnh có màu gì?</h2>
                                <div className="question-title-container">
                                    <img src="./img/xeCam.jpg" alt="" className="question-title-img"/>
                                </div>
                            </div>
                            <div className="question-option3">
                                <div className="option1-container3">
                                    <div>
                                        <label htmlFor="question3-option1">A</label>
                                    </div>
                                    Indigo blue
                                    <input hidden id="question3-option1" type="radio" name="question3-radio" className="question3-option1"/>
                                </div>
                                <div className="option2-container3">
                                    <div>
                                        <label htmlFor="question3-option2">B</label>
                                    </div>
                                    Orange
                                    <input hidden id="question3-option2" type="radio" name="question3-radio" className="question3-option2"/>
                                </div>
                                <div className="option3-container3">
                                    <div>
                                        <label htmlFor="question3-option3">C</label>
                                    </div>
                                    Gray
                                    <input hidden id="question3-option3" type="radio" name="question3-radio" className="question3-option3"/>
                                </div>
                                <div className="option4-container3">
                                    <div>
                                        <label htmlFor="question3-option4">D</label>
                                    </div>
                                    White
                                    <input hidden id="question3-option4" type="radio" name="question3-radio" className="question3-option4"/>
                                </div>
                            </div>
                            <div className='answer-mess__container'>
                                <p className="answer-mess3"></p>
                            </div>
                            <div className="answer-btn">
                                <button onClick={() => {
                                    const answerMess3 = document.querySelector('.answer-mess3')

                                    const qs3option1 = document.querySelector('.question3-option1')
                                    const qs3option2 = document.querySelector('.question3-option2')
                                    const qs3option3 = document.querySelector('.question3-option3')
                                    const qs3option4 = document.querySelector('.question3-option4')
                                    
                                    const op1Container3 = document.querySelector('.option1-container3')
                                    const op2Container3 = document.querySelector('.option2-container3')
                                    const op3Container3 = document.querySelector('.option3-container3')
                                    const op4Container3 = document.querySelector('.option4-container3')

                                    qs3option1.onclick = () => {
                                        op1Container3.classList.add('choosed')
                                        op2Container3.classList.remove('choosed','correct')
                                        op3Container3.classList.remove('choosed','wrong')
                                        op4Container3.classList.remove('choosed','wrong')
                                    }
                                    qs3option2.onclick = () => {
                                        op2Container3.classList.add('choosed')
                                        op1Container3.classList.remove('choosed','wrong')
                                        op3Container3.classList.remove('choosed','wrong')
                                        op4Container3.classList.remove('choosed','wrong')
                                    }
                                    qs3option3.onclick = () => {
                                        op3Container3.classList.add('choosed')
                                        op2Container3.classList.remove('choosed','correct')
                                        op1Container3.classList.remove('choosed','wrong')
                                        op4Container3.classList.remove('choosed','wrong')
                                    }
                                    qs3option4.onclick = () => {
                                        op4Container3.classList.add('choosed')
                                        op2Container3.classList.remove('choosed','correct')
                                        op3Container3.classList.remove('choosed','wrong')
                                        op1Container3.classList.remove('choosed','wrong')
                                    }

                                    if(qs3option1.checked == true) {
                                        op1Container3.classList.replace('choosed', 'wrong')
                                        op2Container3.classList.remove('correct')
                                        op3Container3.classList.remove('wrong')
                                        op4Container3.classList.remove('wrong')
                                        answerMess3.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Chưa chính xác, cố gắng lên nhé'
                                    }else
                                    if(qs3option2.checked == true) {
                                        op2Container3.classList.replace('choosed', 'correct')
                                        op1Container3.classList.remove('wrong')
                                        op3Container3.classList.remove('wrong')
                                        op4Container3.classList.remove('wrong')
                                        answerMess3.innerHTML = '<i class="fa-solid fa-check correct-icon"></i>Giỏi quá'
                                    }else
                                    if(qs3option3.checked == true) {
                                        op3Container3.classList.replace('choosed', 'wrong')
                                        op2Container3.classList.remove('correct')
                                        op1Container3.classList.remove('wrong')
                                        op4Container3.classList.remove('wrong')
                                        answerMess3.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Không đúng, thử lại bé nhá'
                                    }else
                                    if(qs3option4.checked == true) {
                                        op4Container3.classList.replace('choosed', 'wrong')
                                        op2Container3.classList.remove('correct')
                                        op1Container3.classList.remove('wrong')
                                        op3Container3.classList.remove('wrong')
                                        answerMess3.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Chưa đúng, cố lên nào'
                                    }
                                }} className="question-answer3">Chọn</button>
                            </div>
                        </div>
                        <div className="question">
                            <div className="question-title">
                                <h2>4. Ảnh nào có Purple Butterfly?</h2>
                            </div>
                            <div className="question-option">
                                <div className="option-container4">
                                    <div className="option1-container4">
                                        <img src="./img/buomDen.jpg" alt="" className="question4-option1"/>
                                        <input hidden id="question4-option1" type="radio" name="question4-radio"/>
                                    </div>
                                    <div className="option2-container4">
                                        <img src="./img/buomcam.jpg" alt="" className="question4-option2"/>
                                        <input hidden  id="question4-option2" type="radio" name="question4-radio"/>
                                    </div>
                                </div>
                                <div className="option-container4">
                                    <div className="option3-container4">
                                        <img src="./img/buomTrang.jpg" alt="" className="question4-option3"/>
                                        <input hidden id="question4-option3" type="radio" name="question4-radio"/>
                                    </div>
                                    <div className="option4-container4">
                                        <img src="./img/buomTim.jpg" alt=""  className="question4-option4"/>
                                        <input hidden id="question4-option4" type="radio" name="question4-radio"/>
                                    </div>
                                </div>
                            </div>
                            <div className='answer-mess__container'>
                                <p className="answer-mess4"></p>
                            </div>
                            <div className="answer-btn">
                                <button onClick={() => {
                                    
                                    const qs4option1IMG = document.querySelector('.question4-option1')
                                    const qs4option2IMG = document.querySelector('.question4-option2')
                                    const qs4option3IMG = document.querySelector('.question4-option3')
                                    const qs4option4IMG = document.querySelector('.question4-option4')
                                    
                                    const answerMess4 = document.querySelector('.answer-mess4')
                                    
                                    const qs4option1 = document.querySelector('#question4-option1')
                                    const qs4option2 = document.querySelector('#question4-option2')
                                    const qs4option3 = document.querySelector('#question4-option3')
                                    const qs4option4 = document.querySelector('#question4-option4')
                                    
                                    const op1Container4 = document.querySelector('.option1-container4')
                                    const op2Container4 = document.querySelector('.option2-container4')
                                    const op3Container4 = document.querySelector('.option3-container4')
                                    const op4Container4 = document.querySelector('.option4-container4')
                                    
                                    qs4option1IMG.onclick = () => {
                                        qs4option1.checked = true
                                        op1Container4.classList.add('choosed-IMG')
                                        op2Container4.classList.remove('choosed-IMG','wrong-IMG')
                                        op3Container4.classList.remove('choosed-IMG','wrong-IMG')
                                        op4Container4.classList.remove('choosed-IMG','correct-IMG')
                                    }
                                    qs4option2IMG.onclick = () => {
                                        qs4option2.checked = true
                                        op2Container4.classList.add('choosed-IMG')
                                        op1Container4.classList.remove('choosed-IMG','wrong-IMG')
                                        op3Container4.classList.remove('choosed-IMG','wrong-IMG')
                                        op4Container4.classList.remove('choosed-IMG','correct-IMG')
                                    }
                                    qs4option3IMG.onclick = () => {
                                        qs4option3.checked = true
                                        op3Container4.classList.add('choosed-IMG')
                                        op2Container4.classList.remove('choosed-IMG','correct-IMG')
                                        op1Container4.classList.remove('choosed-IMG','wrong-IMG')
                                        op4Container4.classList.remove('choosed-IMG','correct-IMG')
                                    }
                                    qs4option4IMG.onclick = () => {
                                        qs4option4.checked = true
                                        op4Container4.classList.add('choosed-IMG')
                                        op2Container4.classList.remove('choosed-IMG','wrong-IMG')
                                        op3Container4.classList.remove('choosed-IMG','wrong-IMG')
                                        op1Container4.classList.remove('choosed-IMG','wrong-IMG')
                                    }

                                    if(qs4option1.checked == true) {
                                        op1Container4.classList.replace('choosed-IMG', 'wrong-IMG')
                                        op2Container4.classList.remove('wrong-IMG')
                                        op3Container4.classList.remove('wrong-IMG')
                                        op4Container4.classList.remove('correct-IMG')
                                        answerMess4.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Đây là Black Butterfly nhé'
                                    }else
                                    if(qs4option2.checked == true) {
                                        op2Container4.classList.replace('choosed-IMG', 'wrong-IMG')
                                        op1Container4.classList.remove('wrong-IMG')
                                        op3Container4.classList.remove('wrong-IMG')
                                        op4Container4.classList.remove('correct-IMG')
                                        answerMess4.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Ảnh này là Red Butterfly mà'
                                    }else
                                    if(qs4option3.checked == true) {
                                        op3Container4.classList.replace('choosed-IMG', 'wrong-IMG')
                                        op2Container4.classList.remove('wrong-IMG')
                                        op1Container4.classList.remove('wrong-IMG')
                                        op4Container4.classList.remove('correct-IMG')
                                        answerMess4.innerHTML = '<i class="fa-solid fa-xmark wrong-icon"></i>Ảnh này là White Butterfly cơ'
                                    }else
                                    if(qs4option4.checked == true) {
                                        op4Container4.classList.replace('choosed-IMG', 'correct-IMG')
                                        op2Container4.classList.remove('correct')
                                        op1Container4.classList.remove('wrong-IMG')
                                        op3Container4.classList.remove('wrong-IMG')
                                        answerMess4.innerHTML = '<i class="fa-solid fa-check correct-icon"></i>Chính xác, 10 điểm'
                                    }
                                }} className="question-answer4">Chọn</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Lesson

