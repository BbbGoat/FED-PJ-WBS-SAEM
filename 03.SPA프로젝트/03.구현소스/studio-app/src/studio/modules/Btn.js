// Btn 모듈 - Btn.js
// 라이브러리
import $ from "jquery";
import {Link} from "react-router-dom";
// 데이터
import cat_data from "../data/cat";
import marquee_data from "../data/marquee_data";
// 모듈
import Marquee from "./Marquee";
// CSS
import "../css/btn.css";

const jqFn = () => {
    $(()=>{


    }); /////////// jQB ///////////
}

const Btn = (props) => {
    return (
        <>
            <div className="btn_wrap">
                <div className="btn_marquee">
                    <Marquee data={marquee_data[props.cat]} />
                </div>
                <Link className="button" to={cat_data[props.cat].link}>{cat_data[props.cat].tit}</Link>
            </div>
            {jqFn()}
        </>
    );
}

export default Btn;