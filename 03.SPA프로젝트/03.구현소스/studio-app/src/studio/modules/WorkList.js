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
        const goo = $(".goo_cont");
        const svgImg = $(".goo_cont image");
        
        // 스크롤 이벤트 제작
        // 마우스인!
        $(".project_item").hover(function(e){
            let chgSrc = e.currentTarget.firstChild.getAttribute("src");
            
            // 이미지변경!
            svgImg.attr("href", chgSrc);
            goo.css({display:"block"});
        });
        // 마우스아웃!
        $(".project-list").mouseleave(function(){
            // console.log("아웃!");
            goo.css({display:"none"});

        });

        let winW = window.innerWidth;
        
        $(window).on("resize",function(){
            winW = $(window).width();
            // console.log(winW);
            if (winW <= 720) {
            }
            else {
                
            }

            
        })
        
        
        // 공식
        // 윈도우 가로크기 : 박스 크기
        $(document).on("mousemove scroll",function(e){
            // console.log("움직여",e.clientX, e.clientY);
            goo.css({
                // left: `calc(${(e.clientX/winW*100)/2}%)`,
                left: `calc(${(e.clientX/winW*100)/2}% - ${goo.width()/2}px)`,
                top:`${(e.clientY-300)}px`,
            })
        }) //////// mousemove ////////
    
        
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
                                <circle cx="50%" cy="60%" r="92" fill="white" style={{animation: '12s ease-in-out -3s infinite alternate none running blob_four'}}>
                                </circle>
                                <circle cx="50%" cy="40%" r="112" fill="white" style={{animation: '12s ease-in-out -3s infinite alternate none running blob_four'}}>
                                </circle>
                                <circle cx="40%" cy="50%" r="80" fill="white" style={{animation: '9s ease-in-out -3s infinite alternate none running blob_three'}}>
                                </circle>
                                <circle cx="30%" cy="40%" r="85" fill="white" style={{animation: "6s ease-in-out -3s infinite alternate none running blob_two"}}>
                                </circle>
                                <circle cx="40%" cy="70%" r="105" fill="white" style={{animation: "8s ease-in-out -3s infinite alternate none running blob_two"}}>
                                </circle>
                                <circle cx="60%" cy="40%" r="94" fill="white" style={{animation: "5s ease-in-out -3s infinite alternate none running blob_one"}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="100" fill="white" style={{animation: "3s ease-in-out -3s infinite alternate none running blob_one"}}>
                                </circle>

                                {/* <circle cx="50%" cy="60%" r="82" fill="white" style={{animation: '12s ease-in-out -3s infinite alternate none running blob_four'}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="70" fill="white" style={{animation: '9s ease-in-out -3s infinite alternate none running blob_three'}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="85" fill="white" style={{animation: "6s ease-in-out -3s infinite alternate none running blob_two"}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="85" fill="white" style={{animation: "8s ease-in-out -3s infinite alternate none running blob_two"}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="94" fill="white" style={{animation: "5s ease-in-out -3s infinite alternate none running blob_one"}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="60" fill="white" style={{animation: "3s ease-in-out -3s infinite alternate none running blob_one"}}>
                                </circle> */}
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