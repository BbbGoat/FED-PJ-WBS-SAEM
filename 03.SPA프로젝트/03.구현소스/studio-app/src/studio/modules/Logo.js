import $ from "jquery";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logo = (props) => {

    const navigate = useNavigate();
    
    const timeout = () => {
        
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
        setTimeout(()=>{ linkToNav(); },600);
        
    }; //////////// timeout 함수 ///////////
    
    useEffect(()=>{
        return () => {clearTimeout(timeout);};
    }); ////////// useEffect ///////////
    

    // 이동경로
    const linkToNav = () => { navigate('/main'); }


    return (
        <>
            <a onClick={timeout} className="logo">
                <img src="./images/menu-small.gif" />
            </a> 
        </>
    );
};

export default Logo;
