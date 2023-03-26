window.addEventListener("DOMContentLoaded",()=>{


    console.log("로딩완료!");
    
    // 전역 변수 선언 ///////////////////
    const circleTimer = document.querySelector(".circle_timer");
    const timerBtn = document.querySelectorAll(".circle_timer a");
    const videoBox = document.querySelector(".video_box");
    const video = document.querySelectorAll("#video");
    const svg1 = document.querySelector(".svg1");
    const svg2 = document.querySelector(".svg2");

    /******************************************* 
        함수명: vidClick
        기능: 클릭이벤트 재생/멈춤
    *******************************************/
    function vidClick() {
        
        timerBtn.forEach((ele) => {
            
            // 클릭버튼 분기
            ele.onclick = function() {
                event.preventDefault();
                
                // 클릭된 버튼에 따른 변수 설정
                let currentVideo = this.parentElement.previousElementSibling.querySelector("#video");
                let timerIcon = this.querySelector(".timer_icon img");
                
                // 비디오 멈춤/재생 설정
                if(currentVideo.paused) {
                    currentVideo.play();
                    timerIcon.style.marginTop = "0";
                    timerIcon.alt = "일시정지";
                }
                else {
                    currentVideo.pause();
                    timerIcon.style.marginTop = "-25px";
                    timerIcon.alt = "재생";
                }
                
            }; ////onclick /////////////
                
        }); /////////// forEach ////////////
    } /////////vidClick 함수 //////////////////////////


    /******************************************* 
        함수명: vidTimer
        기능: 타임업데이트이벤트 svg 설정 변경
    *******************************************/

    // 동영상전체길이 : dashoffset전체길이 = 동영상이동값 : dashoffset이동값
    // dashoffset이동값 = svgdashoffset전체길이 * 동영상이동값 / 동영상전체길이
    // x = 300% * vidsec_now / vidsec_max
    // x = 300% * vid2.currentTime / vid2.duration

    function vidTimer() {

        video.forEach((ele,idx) => {
            
            if (idx === 0) {
                setInterval(() => {
                    // 영상 재생시간 현재값, 최대값 변수
                    let vidsec_now = ele.currentTime;
                    let vidsec_max = ele.duration;

                    // 결과값
                    let timer = (300 * vidsec_now / vidsec_max);
                    // 출력 + 트랜지션
                    svg1.style.strokeDashoffset = (300-timer)+"%";
                    svg1.style.transition = "0.3s ease 0";
                },100);
        
                // 인터발초기화
                clearInterval();
            }
            else if (idx === 1) {
                setInterval(() => {
                    // 영상 재생시간 현재값, 최대값 변수
                    let vidsec_now = ele.currentTime;
                    let vidsec_max = ele.duration;
                    // 결과값
                    let timer = (300 * vidsec_now / vidsec_max);
                    // 출력 + 트랜지션
                    svg2.style.strokeDashoffset = (300-timer)+"%";
                    svg2.style.transition = "0.3s ease 0";
                },100);
        
                // 인터발초기화
                clearInterval();
            }
        });
    } ///////////// vidTimer 함수 ////////////////////


    
    /******************************************* 
        함수명: logSetban
        기능: cjlog 배너 이미지 자동셋팅
    *******************************************/

    // 변경대상
    const logBan = document.querySelectorAll(".log a");

    function logSetban() {

        // 이미지 갯수만큼 배너 이미지 주소 변경
        logBan.forEach((ele,idx,obj) => {
            
            obj[idx].innerHTML = `<img src="./images/log${idx}.jpg" alt="CJ로그배너">`;

        }); /////// forEach /////////////        

    } ///////////// logSetban 함수 ///////////////////


    
    /******************************************* 
        함수명: csvSlide
        기능: 버튼 클릭시 이미지 슬라이드
    *******************************************/

    // 변경대상
    const slide = document.querySelector("#slide ul");
    const slideBtn = document.querySelectorAll(".slide_btn a");

    function csvSlide() {

        // 슬라이드 개수
        let slideList = document.querySelectorAll("#slide li");
        console.log(slideList);

        slideList.forEach((ele,idx) => {
            ele.setAttribute("data-seq",idx);
        }); ///// forEach ///////////////
       

        let clist = slide.querySelectorAll("li");
        console.log(clist);
        
        // 버튼 개수
        slideBtn.forEach((ele,idx) => {
            
            // 광클금지 변수
            let prot = 0;

            ele.onclick = function(e) {
                e.preventDefault();
                // clearAuto();

                if (prot) return;
                prot = 1; // 잠금!
                setTimeout(() => {
                    prot = 0; // 잠금해제!
                },400);

                // 왼쪽클릭
                if (idx === 0) {
                    console.log("왼쪽");
                    slide.insertBefore(clist[clist.length-1], clist[0]);
                    slide.style.left = "-34%";
                    slide.style.transition = "none";
                    setTimeout(() => {
                        slide.style.left = "0";
                        slide.style.transition = "left .4s ease-in-out";
                    }, 0);
                }
                // 오른쪽클릭
                else if (idx === 1) {
                    console.log("오른쪽")
                    slide.style.left = "-34%";
                    slide.style.transition = "left .4s ease-in-out";
    
                    // 슬라이드 이동 후
                    setTimeout(() => {
                        slide.appendChild(clist[0]);
                        slide.style.left = "0";
                        slide.style.transition = "none";
                    },400);
                    
                }
            } ////////// click ///////////

        }); /////////// forEach ////////////
    } /////////////// csvSlide 함수 ////////////////


    function clearAuto() { 
        console.log("인터발멈춰!");
        // 1. 인터발 지우기
        clearInterval(autoI);

        // 2. 타임아웃도 지우지 않으면
        // 쌓여서 타임아웃 쓰나미실행이 발생한다!
        clearTimeout(autoT);
        
        // 3. 잠시후 다시 작동하도록 타임아웃으로
        // 인터발함수를 호출한다!
        // 5초후 (인터발은 3초후, 토탈 8초후 작동시작)
        autoT = setTimeout(autoSlide,5000);

        
    } ////////////// clearAuto 함수 ////////////


    // 이벤트 등록 ///////////////////////////////////

    slide.addEventListener("click",csvSlide());
    circleTimer.addEventListener("click", vidClick());
    videoBox.addEventListener("timeupdate",vidTimer());
    document.addEventListener("DOMContentLoaded", logSetban());

});///////////// load ////////////////////////////

