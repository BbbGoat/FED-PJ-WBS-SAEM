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
            마우스 오버시 트랜스폼 효과
    *******************************************/

    // 변경대상
    const logBan = document.querySelectorAll(".log a");

    function logSetban() {
        console.log("셋벤로딩완료");

        // 변경셋팅
        logBan.forEach((ele,idx,obj) => {
            
            for (let i = 0; i < logBan.length; i++) {
                // console.log(i);
                obj[i].innerHTML = ``;
            }
            // console.log(obj[2])
        }); /////// forEach /////////////
        
        // 출력
        // logBan.innerHTML = chgBan;

    } ///////////// logSetban 함수 ///////////////////


    // 이벤트 등록 ///////////////////////////////////
    circleTimer.addEventListener("click", vidClick());
    videoBox.addEventListener("timeupdate",vidTimer());
    document.addEventListener("DOMContentLoaded", logSetban());

});///////////// load ////////////////////////////

