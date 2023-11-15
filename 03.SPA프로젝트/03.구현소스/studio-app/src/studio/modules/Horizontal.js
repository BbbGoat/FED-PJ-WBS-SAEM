// Horizontal 모듈 Horizontal.js
import React from "react";
import $ from "jquery";
import "../css/horizontal.css"


const info_data = [
    {
        "idx":"1",
        "vidsrc":"./images/shop-1.jpg",
        "tit":"About",
        "desc":"Shrig Shop is a shop in Copenhagen founded by artist David Shrigley and long-term gallerist and friend Nicolai Wallner. Together we make limited editions and other great stuff, serving as an extension of David Shrigley's artistic practice. David Shrigley (b.1968, UK) works across drawing, painting, sculpture, installation, photography, animation, and print. He publishes books, produces music, occasionally designs tattoos and creates all manner of other paraphernalia. He mix the communication-how, I think about rich solutions and prepare for rich solutions, and prepare for creative ideas.",
    },
    {
        "idx":"2",
        "vidsrc":"./images/shop-2.jpg",
        "tit":"Creation",
        "desc":"The progress of work is sharing ideas, developing, discussion and research. He kneels, rolls, lands, and looks back. This deep creative processes lead his world. He is one of those unique artists, like Andy Warhol or Keith Haring, who is recognised within the art world but whose reach extends far beyond to impact our wider culture. Shrig Shop is an alternative to the gallery space, offering a place where David Shrigley's work is accessible to everyone, whether it is as significant as a print or as humble as a postcard. Art is for everyone and at Shrig Shop all are welcome.",
    },
    {
        "idx":"3",
        "vidsrc":"./images/shop-3.jpg",
        "tit":"History",
        "desc":"David Shrigley has received international critical acclaim for his work and in 2020 was awarded an OBE for Services to Visual Arts. In 2016, he was awarded the Fourth Plinth Commission for sculpture in Trafalgar Square and was nominated for the prestigious Turner Prize Award in 2013. David Shrigley has had solo exhibitions in museum worldwide and his works are found in prominent collections, including Museum of Modern Art (New York), Tate Britain (London), the National Gallery of Denmark (Copenhagen), amongst many others.",
    },
];

const jqFn = () => {
    $(()=>{
        
        // 타겟선정
        const tgBox = document.querySelector(".horizontal_box");
        const stkBox = document.querySelector(".horizontal_inner");
        const body = document.querySelector("body");
        
        
        // 최초로드시 셋팅! /////////////////////
        // 오버플로우 히든 해제
        body.setAttribute('style', 'overflow: visible');
        // 박스 전체 높이값 최초 설정
        let setHeight = stkBox.clientWidth;
        tgBox.setAttribute('style', 'height: ' + setHeight + 'px')


        const retVal = x => x.getBoundingClientRect().top;

        /************************************** 
            함수명 : movePage
            기능 : 가로방향 이동하기
        **************************************/
        function movePage() {
            let tgPos = retVal(tgBox);

            // 이미지이동값 = 윈도우높이 * 스크롤이동값 / 페이지전체길이
            // docH : boxOffsetH = scrollY : percentNum
            // percentNum = boxOffsetH * scrollY / docH;

            // 백분율화
            let percentNum = tgPos * 100 / 2600
            // -20%~20% 사이로 만들기
            let resultNum = (-(percentNum) / 100 * 40 ) -20
            
            if (tgPos <= 0 && tgPos >= -2600) {
                // console.log(resultNum);
                stkBox.style.top = "66px";
                stkBox.style.transform = `translate3d(${tgPos}px, 0, 0)`;

                $(".parallax").css({
                    top: "auto",
                    transform: `translate3d(${resultNum}%,0,0)`,
                });
            }
            else if (tgPos > 0) {
                stkBox.style.transform = 'translate3d(0,0,0)';
                // console.log("시작점!");

                $(".parallax").css({
                    transform: `translate3d(-20%,0,0)`,
                });
            }
            else if (tgPos < -2600) {
                stkBox.style.transform = `translate3d(-2600px, 0, 0)`;
                $(".parallax").css({
                    top: "auto",
                    transform: `translate3d(20%,0,0)`,
                });
            }
            
            
        } ////////// movePage 함수 ///////////
        
        
        /************************************** 
            함수명 : onResize
            기능 : 모바일상태 구하는 함수
        **************************************/
        
        // 윈도우 가로사이즈
        let winW = window.innerWidth;
     
        window.addEventListener("resize", chgMove);

        function chgMove() {
            winW = window.innerWidth;

            // 모바일버전
            if (winW <= 720) {

                // 초기화
                stkBox.style.transform = `translate3d(0, 0, 0)`;
                $(".video_area").css({
                    top: "auto",
                    transform: `translate3d(0,0,0)`,
                });
                $(".video_area").attr("style","");
                tgBox.setAttribute('style', 'height: auto');

                
                // 스크롤 기능 제거
                window.removeEventListener("scroll", movePage);
            }
            // pc버전
            else {
                setHeight = stkBox.clientWidth;
                tgBox.setAttribute('style', 'height: ' + setHeight + 'px');

                // 스크롤시 스티키 구간에서 가로방향 이동 구현
                window.addEventListener("scroll", movePage);
            }
            
        }

        // 최초호출
        chgMove();

        
    }); ///////// jQB //////////////////
} //////////////// jqFn //////////////////////



const Horizontal = () => {
    
    return (
        <>
           
            <div className="horizontal_box">
                <div className="horizontal_inner">

                    {/* 반복 섹션 */}
                    {
                        info_data.map((x,i)=>
                            <div className="horizontal_section" key={i}>
                                <div className="content_img">
                                    {/* Video 영역 */}
                                    <figure className="video_area parallax">
                                        <div className="videosrc">
                                            <img src={x.vidsrc} />
                                        </div>
                                    </figure>
                                    {/* text 영역 */}
                                    <div className="vidtxt_area">
                                        <span className="vidtxt_number">{x.idx}</span>
                                    </div>
                                </div>
                                <div className="content_desc">
                                    <h2>{x.tit}</h2>
                                    <p>{x.desc}</p>
                                </div>

                            </div>
                        ) //////// map ////////////
                    }

                </div>
            </div>

            {jqFn()}
        </>
    );
}

export default Horizontal;