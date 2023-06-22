// Horizontal 모듈 Horizontal.js
import React from "react";
import $ from "jquery";
import "../css/horizontal.css"


const info_data = [
    {
        "idx":"1",
        "vidsrc":"https://www.studiobrot.de/media/pages/wie/0fd2b66c03-1673622947/1-derteig-small.mp4",
        "tit":"der starter",
        "desc":"der starter kann aus einem gemeinsamen arbeitsmeeting aka kick-off bestehen. er kann aber auch aus einem ersten kennenlernen sein. oder aber auch aus einem konkreten, schriftlichen briefing. hier versuchen wir alles rund um die aufgabenstellung, die marke selbst, ihre ziele und visionen, produkte, dienstleistungen oder services, kurz: ihre rezeptur und dna zu erfahren. wir stellen fragen, die mal mehr und mal weniger angenehm sind, um der sache auf den grund zu gehen. diesen input nehmen wir mit, um ihn anschließend in der agentur unterzumischen. im nächsten schritt vermengen wir ihn dann mit unserem kommunikativen knowhow, denken über gehaltvolle lösungswege nach und füttern ihn so lange, bis der kreative starter bereit für den backvorgang ist.",
    },
    {
        "idx":"2",
        "vidsrc":"https://www.studiobrot.de/media/pages/wie/19383b2f5f-1673622957/2-dasbacken-small.mp4",
        "tit":"das backen",
        "desc":"der backvorgang beginnt mit dem starter – ihr erinnert euch? wir schnappen uns also den starter und holen alles aus ihm raus, was wir gerade eben noch untergerührt haben: den kundenseitigen input, das wissen über die zielgruppe und eine mögliche ansprache, die merkmale der produkte und den aktuellen stand der dinge auf dem markt da draußen. wir drehen und wenden all das, was wir aus dem ersten schritt mitgenommen und mit unserem wissen angereichert haben. wir durchleuchten, teilen gedanken und erkenntnisse, erarbeiten ansätze, diskutieren über ideen, und recherchieren insights. wir kneten, denken, rollen aus und verwerfen. und zwar so lange, bis der kreativ-konzeptionelle prozess auf betriebstemperatur gebracht wurde und bereit ist für den ofen.",
    },
    {
        "idx":"3",
        "vidsrc":"https://www.studiobrot.de/media/pages/wie/b5b0865b86-1673622912/3-dasbrot-small.mp4",
        "tit":"das brot",
        "desc":"ob die idee aufgegangen ist? das erfahren wir erst, wenn das brot über die theke geht. genau hier und jetzt zeigt sich, ob es der zielgruppe optisch und inhaltlich schmeckt. in form kreativer maßnahmen kommuniziert eine wortgewandte, stringente, überzeugende, emotionale, authentische, sympathische und visuell starke marke. eine brand, die über alle kanäle hinweg anziehend duftet, satt macht, schmeckt und für ordentlich umsatz sorgt. die strategische aufgabenstellung, die wir im starter gemeinsam angerührt haben und die kreativen umsetzungsideen, die wir im backvorgang entwickelt haben, treffen hier auf die menschen, mit denen wir das brot brechen wollen: unsere konsumenten.",
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
                                        <video autoPlay={true} className="videosrc" loop={true} muted={true} playsInline={true} poster="">
                                            <source src={x.vidsrc} type="video/mp4" />
                                        </video>
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