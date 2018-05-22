// 用于测试swiper插件
import React from 'react'
import ReactDOM from 'react-dom'
import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.css'

class Banner extends React.Component{
    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop:true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            }
        })
    }
    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>

            </div>
        )
    }
}

ReactDOM.render(
    <Banner />,
    document.getElementById('app')
)