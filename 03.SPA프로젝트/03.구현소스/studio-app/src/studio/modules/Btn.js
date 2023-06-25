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
    $(()=>{

        
    }); /////////// jQB ///////////
}

const Btn = (props) => {

    // 가져오기
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const timeout = () => {
        console.log("타임아웃 시작");
        



        

        // 광클방지 넣어야함
        

        setTimeout(()=>{
            // 이동할 페이지
            // navigate(cat_data[props.cat].link);
            onClickBtn();
            console.log("타임아웃 작동중")
        },2000);
    }; //////////// timeout 함수 ///////////
    
    useEffect(()=>{
        // timeout();
        console.log("useEffect 구역!!!");

        // 타임아웃후 아래 리턴!
        return () => {
            console.log("타임아웃클리어!!!");
            clearTimeout(timeout);
        };
    }); ////////// useEffect ///////////
    
    
    //////////////////////////////////

    // 미리 만들어둔거
    const onClickBtn = () => {

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