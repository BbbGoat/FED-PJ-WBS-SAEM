// Btn 모듈 - Btn.js
// 라이브러리
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";
// 데이터
import cat_data from "../data/cat";
import marquee_data from "../data/marquee_data";
// 모듈
import Marquee from "./Marquee";
// CSS
import "../css/btn.css";
import { useEffect, useState } from "react";

const jqFn = () => {
    $(()=>{}); /////////// jQB ///////////
}

const Btn = (props) => {

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
            <div className="btn_wrap">
                <div className="btn_marquee">
                    <Marquee data={marquee_data[props.cat]} />
                </div>
                <a className="button" onClick={timeout}>{cat_data[props.cat].tit}</a>
            </div>
            {jqFn()}
        </>
    );
}

export default Btn;