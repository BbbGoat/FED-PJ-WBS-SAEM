import $ from "jquery";
import "../css/gooey.css";

const jqFn = () => {
    $(()=>{

        
        function init() {

            // console.log("gooey 발생!");
            

            // 대상요소
            const goo = $(".goo_cont");
            const svgImg = $(".goo_cont image");
    
            let winW = window.innerWidth;
    
            // 모바일/PC 상태 체크용 변수
            let isMobile;
    
            
            // 리사이즈 이벤트 등록 ////////////
            $(window).on("resize",function(){
                winW = $(window).width();
                
                // 업데이트!
                sizeCheck();
    
                // 호출하면 다중호출되는 이슈때문에...
                // mouseEvt(isMobile);
    
            });
    
            function sizeCheck() {
                if (winW <= 720) {
                    // console.log("모바일")
                    return isMobile = 1;
                }
                else {
                    // console.log("pc화면")
                    return isMobile = 2;
                }
            }
    
            // 최초값 셋팅 함수 호출 : 사이즈설정, 클래스설정
            sizeCheck();
            mouseEvt(isMobile);
    
            
            function mouseEvt(props) {
    
                if (props == 1) {
                    // console.log("실행안함");
                    $(".project_item").hover(function() { return false; });
                    $(".project_item").off("hover");
                    $(".project_item").off("mouseenter");
                    $(".project-list").off("mouseenter");
                    $(".project-list").off("mouseleave");
                    $(".project-list").off("mousemove");
                    
                } //////// if /////////
    
                else if (props == 2) {
                    // console.log("이때만 실행");
    
                        
                    // 스크롤 이벤트 제작 /////////////
                    // 호버시 이미지변경!
                    $(".project_item").hover(function(e){
                        let chgSrc = e.currentTarget.firstChild.getAttribute("src");
                        svgImg.attr("href", chgSrc);
                        
                    });
                    // 마우스인!
                    $(".project-list").mouseenter(function(e){
                        goo.css({display:"block"}).delay(100).animate({opacity:1},200);

                    })
                    // 마우스아웃!
                    $(".project-list").mouseleave(function(e){
                        // console.log("아웃!");
                        goo.css({display:"none"}).animate({opacity:0},200);
                    });
                    $(".project-list").on("mousemove",function(e){ 
                        // console.log("움직여",e.clientX, e.clientY);

                        // 백분율화
                        let percentNum = e.clientX * 100 / winW;
                        // -20%~20% 사이로 만들기
                        let resultNum = (percentNum) - 20;

                        goo.css({
                            // left: `calc(${(e.clientX/winW*100)/2}% )`,
                            left: `calc(${resultNum/2}%)`,
                            top:`${(e.clientY-300)}px`,
                        });
                    }); //////// mousemove ////////
                    
                } ////////// else if ///////////////////
    
        
            } ///////////// mouseEvt 함수 //////////////////////
        }

        // window.onload = init();
        init();
    
    });
}


const Gooey = () => {
    return (
        <>
            <div className="goo">
                {/* <Goo intensity="strong"> */}
                    <svg role="img" aria-label="Example of a gooey effect" className="goo_cont" id="goosvg">
                        <image href="./images/work/01/img-1.webp" mask="url(#mask)" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" />

                        {/* defs 설정 */}
                        <defs>
                            <filter id="gooey" height="130%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                            </filter>
                        </defs>

                        <mask id="mask" x="0" y="0">
                            <g style={{filter:"url(#gooey)", animation: '9s linear 0s infinite normal none running rotate_back'}}>
                                <circle cx="50%" cy="60%" r="92" fill="white" style={{animation: '7s ease-in-out -3s infinite alternate none running blob_four'}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="92" fill="white" style={{animation: '7s ease-in-out -3s infinite alternate none running blob_four'}}>
                                </circle>
                                <circle cx="40%" cy="50%" r="80" fill="white" style={{animation: '9s ease-in-out -3s infinite alternate none running blob_three'}}>
                                </circle>
                                <circle cx="30%" cy="40%" r="85" fill="white" style={{animation: "6s ease-in-out -3s infinite alternate none running blob_two"}}>
                                </circle>
                                <circle cx="50%" cy="70%" r="95" fill="white" style={{animation: "8s ease-in-out -3s infinite alternate none running blob_two"}}>
                                </circle>
                                <circle cx="60%" cy="50%" r="74" fill="white" style={{animation: "3s ease-in-out -3s infinite alternate none running blob_five"}}>
                                </circle>
                                <circle cx="30%" cy="50%" r="74" fill="white" style={{animation: "4s ease-in-out -3s infinite alternate none running blob_five"}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="80" fill="white" style={{animation: "3s ease-in-out -3s infinite alternate none running blob_one"}}>
                                </circle>
                                <circle cx="50%" cy="50%" r="100" fill="white" style={{animation: "5s ease-in-out -3s infinite alternate none running blob_five"}}>
                                </circle>

                            </g>
                        </mask>
                    </svg>
                {/* </Goo> */}
            </div>
            {jqFn()}
        </>
    );
}

export default Gooey;