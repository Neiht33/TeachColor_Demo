import React, { Component, useEffect, useState } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// Tạo component App
function Main() {
    const [slide, setSlide] = useState('./img/slide1.jpg')
    const slides = ['./img/slide1.jpg','./img/slide2.jpg','./img/slide3.jpg','./img/slide4.jpg']
    const [index, setIndex] = useState(0);

    useEffect(() => {

        const timeOut =  setTimeout(() => {
                setIndex(index + 1)
                if(index > 3){
                    setIndex(0)
                }
                else{ 
                    setSlide(slides[index])
                }
            }, 3000);

        return () => clearTimeout(timeOut);
    },[index])

    return(
        <div>
            <div className="main__title">
                        <div  className="title">Color For Child</div>
            </div>
            <div className="slide-wrapper">
                        <img src={slide} alt="" className="slide-img"/>
            </div>
            <div className="row">
                        <div className="col l-12">
                            <div className="introduce">
                                <h1 className="introduce__head"><i>Hỗ trợ bé học màu sắc tiếng Anh cực đơn giản, dễ nhớ</i></h1>
                                <p className="introduce__body">
                                    <i>
                                        <span >Color For Child</span> cung cấp những công cụ và các phương pháp học tập hiệu quả giúp bố mẹ và bé được học cùng nhau.<br/> Bé học màu sắc tiếng Anh là một trong những bài học đầu tiên khi trẻ bắt đầu được học ngôn ngữ. Bố mẹ hãy bắt đầu đồng hành cùng bé tự học tiếng Anh tại nhà bằng <b>những thứ quen thuộc, dễ nhận diện</b> cho trẻ như: số lượng, hình dạng, màu sắc...
                                        
                                    </i>
                                </p>
                            </div>
                        </div>
            </div>
            <div className="main__trick">
                <div className="main__trick-title">
                            <img src="./img/clound.png" alt="" className="main__trick-img"/>
                            <h1>Những phương pháp để cùng bé học tiếng Anh về màu sắc</h1>
                </div>
                <div className="row main__tip">
                            <div className="col l-3 m-0 c-0 main__tip-container">
                                <img src="/img/anh-dong-powerpoint-gif-hoc-tap-cute.gif" alt="" className="main__tip-img"/>
                            </div>
                            <div className="col l-7 m-12 c-12 main__tip-content">
                                <h1 className="introduce__head">1. Học tiếng Anh online</h1>
                                <p>Học từ vựng tiếng Anh về màu sắc cũng được xem là phương pháp học tiếng Anh online cho bé. Mẹ có thể cùng bé học ngay tại nhà hay bất cứ nơi nào. Với những bộ hình màu sắc, mẹ có thể cùng bé chơi đố màu sắc, <b>khả năng phản xạ nhanh sẽ giúp bé nhớ từ vựng màu sắc rất nhanh.</b></p>
                            </div>
                            <div className="col l-2 m-0 c-0 main__tip-container"></div>
                </div>
                <div className="row main__tip">
                            <div className="col l-2 m-0 c-0 main__tip-container"></div>
                            <div className="col l-7 m-12 c-12 main__tip-content">
                                <h1 className="introduce__head">2. Liên hệ những màu sắc xung quanh để bé nhớ</h1>
                                <p>Màu sắc được xem là chủ đề có sự gần gũi với bé, màu sắc có xung quanh bé như <b>đồ vật trong nhà, quần áo, …</b>. Mẹ có thể dạy bé từ vựng tiếng Anh về màu sắc qua <b>những vật dụng trong nhà</b> để rèn luyện khả năng phản xạ cho bé tốt hơn.</p>
                            </div>
                            <div className="col l-3 m-0 c-0 main__tip-container">
                                <img src="/img/1591978324259-ezgif.com-resize (14).gif" alt="" className="main__tip-img"/>
                            </div>
                </div>
                <div className="row main__tip">
                            <div className="col l-3 m-0 c-0 main__tip-container">
                                <img src="/img/Tomau.jpg" alt="" className="main__tip-img"/>
                            </div>
                            <div className="col l-7 m-12 c-12 main__tip-content">
                                <h1 className="introduce__head">3. Tập tô màu</h1>
                                <p>Học từ vựng tiếng Anh về màu sắc bằng cách cho bé tập tô màu, vừa tô màu, bé có thể <b>vừa giải trí bằng việc tô màu và vừa phát âm những từ vựng về màu sắc</b> để bé nhớ nhanh lâu hơn.
                                   <br/> Ngoài ra, tập tô màu còn tập cho bé tính kiên nhẫn khi còn nhỏ. Trên những chiếc bút màu cũng chứa từ vựng tiếng Anh về màu sắc giúp cho bé nhận biết được bé đang cần tô màu gì.</p>
                            </div>
                            <div className="col l-2 m-0 c-0 main__tip-container"></div>
                </div>
                <div className="row main__tip">
                    <div className="col l-2 m-0 c-0 main__tip-container"></div>
                    <div className="col l-7 m-12 c-12 main__tip-content">
                                <h1 className="introduce__head">4. Tập viết từ vựng tiếng Anh về màu sắc</h1> 
                                <p>Sau khi nhớ được mặt chữ từ vựng tiếng Anh về màu sắc, mẹ hãy cho bé tập viết từ vựng đó nhé. Khi viết, bé sẽ vừa đọc và viết ra, hành động đó sẽ <b>giúp bé nhớ lâu hơn</b> về bộ từ vựng màu sắc bằng việc học tiếng Anh online cho bé  ngay tại nhà. <br/> Quan trọng hơn hết, thói quen học từ vựng tiếng Anh bằng phương pháp học tiếng Anh online cho bé <b>phải được hình thành từ nhỏ và hằng ngày</b>. Từ đó, chúng ta mới có thể hình thành thói quen tốt cho bé khi học tiếng Anh ngày từ giai đoạn đầu.</p>
                    </div>
                    <div className="col l-3 m-0 c-0 main__tip-container">
                        <img src="/img/cách-dạy-trẻ-5-tuổi-thông-minh-tại-nhà-mà-ba-mẹ-cần-biết.jpg" alt="" className="main__tip-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

