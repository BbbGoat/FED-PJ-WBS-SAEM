// Gnb 기능 - Gnb.js
/**************************************** 
    gnb 기능 구현 js
****************************************/
import $ from "jquery";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cat_data from "../data/cat";

$(()=>{

    // 대상선정
    const button = $(".top > button");
    const menu = $(".menu");
    const menu_second = $(".menu_secondary li");
    const gnb = $(".gnb a");

    // 클릭 이벤트
    button.click(function(e){
        // 버튼 클릭시 최상단 이동
        window.scrollTo(0, 0);
        
        // 클래스 추가/제거
        $(this).toggleClass("switch");
        
        // 확인변수
        let isB = $(this).is(".switch");
        // 조건문에 따라 menu에 클래스 open 넣기
        if (isB) {
            // 클래스추가
            menu.addClass("open");
            // 스크롤고정
            $('html, body').css({'overflow-y': 'hidden', 'height': '100%'});
            // 외부링크 등장
            menu_second.each((idx,ele)=>{
                setTimeout(()=>{
                    setTimeout(function(e) {
                        $(ele).animate({
                            opacity:1
                        },200)
                    }, 50*idx);
                },400)
            }); ///////// each ///////////

            }
        else {
            // 클래스제거
            menu.removeClass("open");
            // 스크롤고정 해제
            $('html, body').css({'overflow-y': 'auto', 'height': 'auto'});
            // 외부링크 사라짐
            menu_second.each((idx,ele)=>{
                $(ele).animate({
                    opacity:0
                },0)
            }); ///////// each ///////////
        }
    });

    // PC버전 Gnb 클릭 이벤트
    gnb.click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".menu_main > a").click(function(){
        button.trigger("click");
    })

    // gnb 메인 바로가기 버튼
    $(".logo").click(function(){
        gnb.removeClass("active");
    });

    // 푸터 위로가기 버튼
    $(".back-to-top").click(function(){
        window.scrollTo(0,0);
    });

    
    
    // 리사이즈 이벤트
    let maxWidth;
    window.onresize = function(e){
        maxWidth = window.innerWidth;
        if (maxWidth > 480) {
            let isB = button.is(".switch");
            if(isB) {
                button.trigger("click");
            }
        }
    }

}); /////////////// jQB ////////////////////


const Gnb = (props) => {

    const navigate = useNavigate();
    
    const timeout = () => {
        console.log("타임아웃 시작");
        
        // 대상수집
        const top = $(".transition-top .transition-title");
        const bottom = $(".transition-bottom .transition-title");
        const cover = $(".cover");

        // jQuery animate 설정구역
        top.each((idx,ele)=>{
            $(ele).delay(idx*50).animate({
                opacity:1
            },0).delay(700).animate({
                opacity:0
            },0)
        });

        bottom.each((idx,ele)=>{
            $(ele).delay(idx*50).animate({
                opacity:1
            },0).delay(700).animate({
                opacity:0
            },0)
        });

        cover.css({zIndex:10000}).animate({
            opacity:1,
        },400).delay(400).animate({
            opacity:0,
            zIndex:-1,
        },400)


        // 타임아웃 설정 구역
        setTimeout(()=>{
            linkToNav();
            console.log("타임아웃 작동중");
        },600);
        
    }; //////////// timeout 함수 ///////////
    
    useEffect(()=>{
        // timeout();
        // console.log("useEffect 구역!!!");

        // 타임아웃후 아래 리턴!
        return () => {
            // console.log("타임아웃클리어!!!");
            clearTimeout(timeout);
        };
    }); ////////// useEffect ///////////
    

    // 이동경로
    const linkToNav = () => {
        navigate(cat_data[props.cat].link);
    }


    
    return (
        <>
            {/* <Link to="/in">INFO</Link>
            <Link to="/wo">WORK</Link>
            <Link to="/ct">CONTACT</Link> */}

            <a onClick={timeout}>{props.cat}</a>
            
        </>
    );
}

const GnbMob = (props) => {

    const navigate = useNavigate();
    
    const timeout = () => {
        console.log("타임아웃 시작");
        
        // 대상수집
        const top = $(".transition-top .transition-title");
        const bottom = $(".transition-bottom .transition-title");
        const cover = $(".cover");

        // jQuery animate 설정구역
        top.each((idx,ele)=>{
            $(ele).delay(idx*50).animate({
                opacity:1
            },0).delay(700).animate({
                opacity:0
            },0)
        });

        bottom.each((idx,ele)=>{
            $(ele).delay(idx*50).animate({
                opacity:1
            },0).delay(700).animate({
                opacity:0
            },0)
        });

        cover.css({zIndex:10000}).animate({
            opacity:1,
        },400).delay(400).animate({
            opacity:0,
            zIndex:-1,
        },400)


        // 타임아웃 설정 구역
        setTimeout(()=>{
            linkToNav();
            console.log("타임아웃 작동중");
        },600);
        
    }; //////////// timeout 함수 ///////////
    
    useEffect(()=>{
        // timeout();
        // console.log("useEffect 구역!!!");

        // 타임아웃후 아래 리턴!
        return () => {
            // console.log("타임아웃클리어!!!");
            clearTimeout(timeout);
        };
    }); ////////// useEffect ///////////
    

    // 이동경로
    const linkToNav = () => {
        navigate(cat_data[props.cat].link);
    }


    
    return (
        <>
            {/* <Link to="/in" className="button button_large">Info</Link>
            <Link to="/wo" className="button button_large">Work</Link>
            <Link to="/ct" className="button button_large">Contact</Link> */}
            
            <a className="button button_large" onClick={timeout}>{props.cat}</a>
        </>
    );
}

export { Gnb, GnbMob };