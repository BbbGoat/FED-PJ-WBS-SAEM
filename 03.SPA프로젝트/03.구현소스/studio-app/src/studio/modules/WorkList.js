// WorkList 모듈 - WorkList.js
import $ from "jquery";
import { Link } from "react-router-dom";
import { work_data, featured_data} from "../data/work_data";
import "../css/worklist.css";
import Goo from "gooey-react";

const jqFn = () => {
    $(()=>{
        // 구분선 요소 추가
        $(".project_item").before(`<div class="project_divider"></div>`);


        // 대상요소
        const goo = $(".goo");
        const svgImg = $(".goo_cont image");

        console.log(svgImg);
        svgImg.attr("href", "https://www.studiobrot.de/media/pages/arbeiten/roberta-goods/043fa44333-1673621029/robertagoods-case-1.webp")
    
        
    }); ///////// jQB ///////////////
}; ////////////// jqFn /////////////////


const Gooey = () => {
    return (
        <>
            <div className="goo">
                {/* <Goo intensity="strong"> */}
                    <svg role="img" aria-label="Example of a gooey effect" className="goo_cont" id="goosvg">
                        <image href="https://www.studiobrot.de/media/pages/arbeiten/charly/8aff3ecd91-1673621027/charly-case-0.webp" mask="url(#mask)" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" />

                        {/* defs 설정 */}
                        <defs>
                            <filter id="gooey" height="130%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                            </filter>
                        </defs>

                        <mask id="mask" x="0" y="0">
                            <g style={{filter:"url(#gooey)", animation: '9s linear 0s infinite normal none running rotate_back'}}>
                                <circle cx="50%" cy="50%" r="92" fill="white" style={{animation: '12s ease-in-out -3s infinite alternate none running blob_four'}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="86" fill="white" style={{animation: '9s ease-in-out -3s infinite alternate none running blob_three'}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="75" fill="white" style={{animation: "6s ease-in-out -3s infinite alternate none running blob_two"}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="64" fill="white" style={{animation: "3s ease-in-out -3s infinite alternate none running blob_one"}}>
                                </circle>
                            </g>
                        </mask>
                    </svg>
                {/* </Goo> */}
            </div>
        </>
    );
}

const WorkList = () => {
    
    const data = featured_data;
    
    return (
        <>

            {/* 메인 리스트 */}
            <div className="featured-project">
                
                <Link to="/wo/det" className="featured-project_bottom-row"
                 state={{ src:data.src, desc:data.desc, tit:data.tit, detail:data.detail, sub:data.sub }}>
                    {/* 이미지영역 */}
                    <img src={data.src} loading="lazy" alt="최신 프로젝트" />

                    {/* 텍스트영역 */}
                    <div className="featured-project_card">
                        <h2>{data.tit}</h2>
                        <p>{data.desc}</p>
                        <div className="button">View</div>
                    </div>
                </Link>

            </div>

            
            <Gooey />

            {/* 나머지 리스트 */}
            <div className="project-list">

                {/* 여기부터 map 돌리기 */}
                {
                    work_data.map((x,i)=>
                        <Link to="/wo/det" className="project_item" key={i}
                         state={{
                            src:x.src,
                            desc:x.desc, 
                            tit:x.tit,
                            detail:x.detail,
                            sub:x.sub,
                            }}>

                            {/* 이미지영역 */}
                            <img src={x.src} alt="프로젝트" />
        
                            {/* 텍스트영역 */}
                            <h2 className="project_title">
                                <span className="project_title-ele first">{x.tit}</span>
                                <span className="project_title-ele second">{x.tit}</span>
                            </h2>
                            <p className="project_desc">{x.desc}</p>
                            <div className="button">View</div>
                        </Link>
                    ) /////////// map //////////////
                }

                {/* divider는 구분선 역할 */}
                <div className="project_divider"></div>

            </div>

            {jqFn()}
        </>
    );
    
}; //////////////////// WorkList 컴포넌트 ///////////////////////

export default WorkList;