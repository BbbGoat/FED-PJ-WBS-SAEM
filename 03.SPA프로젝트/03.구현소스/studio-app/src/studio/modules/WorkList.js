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

                <Link to="/" className="featured-project__bottom-row">
                    {/* 이미지영역 */}
                    <img alt="featured project" loading="lazy" width="1536" height="864" src="https://www.studiobrot.de/media/pages/arbeiten/myspa/ae7603ad50-1673621037/intro.webp" />

                    {/* 텍스트영역 */}
                    <div className="featured-project__card">
                        <h2>MYSPA</h2>
                        <p>Campaigning / Art Direction / Corporate Design / Artwork / Copywriting / Illustrations / Social Media</p>
                    </div>
                </Link>

            </div>

            {/* 나머지 리스트 */}
            <div className="project-list">

                {/* divider는 구분선 역할 */}
                <div className="project__divider"></div>

                {/* 여기부터 map 돌리기 */}
                
                {
                    work_data.map((x,i)=>
                        <a to="/" className="project__item" key={i}>
                            {/* 이미지영역 */}
                            <img alt="featured project" src={x.src} />
        
                            {/* 텍스트영역 */}
                            <h2 className="project__title">
                                <span className="project__title-el project__title-el--first">{x.tit}</span>
                                <span className="project__title-el project__title-el--second">{x.tit}</span>
                            </h2>
                            <p className="project__tags">{x.desc}</p>
                            <div class="button" href="https://www.studiobrot.de/arbeiten/charly">View</div>
                        </a>
                    )
                }

            </div>
        </>
    );
    
}; //////////////////// WorkList 컴포넌트 ///////////////////////

export default WorkList;