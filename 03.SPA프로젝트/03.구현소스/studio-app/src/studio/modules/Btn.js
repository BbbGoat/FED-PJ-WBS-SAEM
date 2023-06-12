// Btn 모듈 - Btn.js
import $ from "jquery";
import {Link} from "react-router-dom";
import Marquee from "./Marquee";
import marquee_data from "../data/marquee_data";
import cat_data from "../data/cat";
import "../css/btn.css";

const jqFn = () => {
    $(()=>{


    })
}

const Btn = (props) => {
    let wawa = cat_data['INFO']
    console.log(cat_data[props.cat].link)
    return (
        <>
            <div className="process-teaser_top-row">
                <div className="process-teaser_marquee">
                    <Marquee data={marquee_data[props.cat]} />
                </div>
            </div>
            <Link to={cat_data[props.cat].link}>내용들어감</Link>
            {jqFn()}
        </>
    );
}

export default Btn;