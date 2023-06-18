// WorkList 모듈 - WorkList.js
import $ from "jquery";
import "../css/worklist.css";
import { Link } from "react-router-dom";

const jqFn = () => {
    $(()=>{

    }); ///////// jQB ///////////////
}; ////////////// jqFn /////////////////

const work_data = [
    {
        "idx":1,
        "src":"https://www.studiobrot.de/media/pages/arbeiten/charly/8aff3ecd91-1673621027/charly-case-0.webp",
        "tit":"Charly  ",
        "desc":"Corporate Design / Logo / Illustrations / Copywriting / Artwork",
        "url":"./https://www.studiobrot.de/arbeiten/roberta-goods",
    },
    {
        "idx":2,
        "src":"https://www.studiobrot.de/media/pages/arbeiten/roberta-goods/043fa44333-1673621029/robertagoods-case-1.webp",
        "tit":"Roberta Goods  ",
        "desc":"Corporate Design / Naming / Logo / Copywriting / UX & UI / App & Terminal Design",
        "url":"./https://www.studiobrot.de/arbeiten/roberta-goods",
    },
    {
        "idx":3,
        "src":"https://www.studiobrot.de/media/pages/arbeiten/the-ratskeller/4aee7feb8e-1673621046/ratskeller-case-1.webp",
        "tit":"The Ratskeller  ",
        "desc":"Corporate Design / Naming / Logo / Digital / Website / Social Media",
        "url":"./https://www.studiobrot.de/arbeiten/roberta-goods",
    },
    {
        "idx":4,
        "src":"https://www.studiobrot.de/media/pages/arbeiten/adventskacklender/eeb003b352-1673621016/adventskacklender-case-1.webp",
        "tit":"Kacklender  ",
        "desc":"Campaigning / Product Design / Schabernack / Illustrations / Artwork",
        "url":"./https://www.studiobrot.de/arbeiten/roberta-goods",
    },
    {
        "idx":5,
        "src":"https://www.studiobrot.de/media/pages/arbeiten/mallofit/eb68de2c03-1673621039/mallofit-case-1-v2.webp",
        "tit":"Mallofit  ",
        "desc":"Corporate Design / Logo / Screendesign / Digital / Copywriting",
        "url":"./https://www.studiobrot.de/arbeiten/roberta-goods",
    },
];


const WorkList = () => {
    
    return (
        <>
            {/* 메인 리스트 */}
            <div className="featured-project">

                <Link to="/" className="featured-project_bottom-row">
                    {/* 이미지영역 */}
                    <img src="https://www.studiobrot.de/media/pages/arbeiten/myspa/ae7603ad50-1673621037/intro.webp" loading="lazy" alt="featured project" />

                    {/* 텍스트영역 */}
                    <div className="featured-project_card">
                        <h2>MYSPA</h2>
                        <p>Campaigning / Art Direction / Corporate Design / Artwork / Copywriting / Illustrations / Social Media</p>
                        <div className="button" href="https://www.studiobrot.de/arbeiten/charly">View</div>
                    </div>
                </Link>

            </div>

            {/* 나머지 리스트 */}
            <div className="project-list">

                {/* 여기부터 map 돌리기 */}
                
                {/* divider는 구분선 역할 */}
                <div className="project_divider"></div>
                {
                    work_data.map((x,i)=>
                        <a to="/" className="project_item" key={i} >
                            {/* 이미지영역 */}
                            <img src={x.src} alt="프로젝트" />
        
                            {/* 텍스트영역 */}
                            <h2 className="project_title">
                                <span className="project_title-ele first">{x.tit}</span>
                                <span className="project_title-ele second">{x.tit}</span>
                            </h2>
                            <p className="project_desc">{x.desc}</p>
                            <div className="button" href="https://www.studiobrot.de/arbeiten/charly">View</div>
                        </a>
                    ) /////////// map //////////////
                }

                {/* divider는 구분선 역할 */}
                <div className="project_divider"></div>

            </div>
        </>
    );
    
}; //////////////////// WorkList 컴포넌트 ///////////////////////

export default WorkList;