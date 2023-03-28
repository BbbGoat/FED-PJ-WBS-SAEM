window.addEventListener("DOMContentLoaded",()=>{


    console.log("로딩완료!");
    
    // 전역 변수 선언 ///////////////////
    const circleTimer = document.querySelector(".circle_timer");
    const timerBtn = document.querySelectorAll(".circle_timer a");
    const videoBox = document.querySelector(".video_box");
    const video = document.querySelectorAll("#video");
    const svg1 = document.querySelector(".svg1");
    const svg2 = document.querySelector(".svg2");
    
    // 변경대상
    const logBan = document.querySelectorAll(".log a");
   
    // 변경대상
    const slide = document.querySelector("#slide ul");
    const slideBtn = document.querySelectorAll(".slide_btn a");
    

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
   
   function logSetban() {

        // 이미지 갯수만큼 배너 이미지 주소 변경
        logBan.forEach((ele,idx,obj) => {
            
            obj[idx].innerHTML = `<img src="./images/log${idx}.jpg" alt="CJ로그배너">`;

        }); /////// forEach /////////////        

    } ///////////// logSetban 함수 ///////////////////


    // 광클금지 변수
    let prot = 0;
    
    /******************************************* 
        함수명: csvSlide
        기능: 버튼 클릭시 이미지 슬라이드
    *******************************************/

    function csvSlide(seq) {
        // console.log("슬라이드 시작",seq)

        // 광클금지 설정
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 잠금해제!
        },700);
        
        // 현재 상태로 업데이트된 슬라이드 li를 수집
        let clist = slide.querySelectorAll("li");
        
        // 오른쪽클릭
        if (seq) {
            // 왼쪽으로 이동
            slide.style.left = "-34%";
            slide.style.transition = "left .7s cubic-bezier(0.38, 0.74, 0.39, 0.95)";

            // 슬라이드 후 잘라내서 이동시키기
            setTimeout(() => {
                // (2-1) 바깥에 나가있는 첫번째 슬라이드
                //       li를 잘라서 맨뒤로 보낸다!
                // 슬라이드li가 잘라내면 매번변경되므로
                // 새로읽어서 맨뒤로 이동한다!
                slide.appendChild(clist[0]);
                // (2-2) 동시에 left값을 0으로 변경한다!
                slide.style.left = "0";
                // (2-3) 트랜지션 없애기!
                slide.style.transition = "none";       
            },700);  
        } // if

        // 왼쪽클릭
        else {
            // 오른쪽 마지막 슬라이드 왼쪽 첫번째로 이동
            slide.insertBefore(clist[clist.length-1], clist[0]);
            slide.style.left = "-34%";
            slide.style.transition = "none";
            
            // 슬라이드 들어오기 설정
            setTimeout(() => {
                slide.style.left = "0";
                slide.style.transition = "left .7s cubic-bezier(0.38, 0.74, 0.39, 0.95)";
            }, 0); 
        } // else

    } /////////////// csvSlide 함수 ////////////////       

    // 버튼에 클릭 이벤트 설정하기 개수만큼
    slideBtn.forEach((ele,idx) => {
        ele.onclick = () => {
            event.preventDefault();
            // 초기화
            clearAuto();
            // 슬라이드 재시작
            csvSlide(idx);
        }; ////////// click ///////////
    }); /////////// forEach ////////////
    
    // 슬라이드 순번 확인용 번호 생성
    let slideList = document.querySelectorAll("#slide li");
    slideList.forEach((ele,idx) => {
        ele.setAttribute("data-seq",idx);
    }); ///// forEach ///////////////
    
    
    /******************************************* 
        함수명: autoSlide
        기능: 인터발함수로 슬라이드함수 호출
    *******************************************/

    // 인터발함수 지우기위한 변수
    let autoI;
    // 타임아웃함수 지우기위한 변수
    let autoT;

    function autoSlide() {
        // console.log("인터발시작!");
        // DOM로딩후 인터발함수로 슬라이드함수 최초호출하기
        autoI = setInterval(() => csvSlide(1), 3000); // 3초마다
    } ///////////// autoSlide 함수 /////////////

    /******************************************* 
        함수명: clearAuto
        기능: 인터발함수를 지우고 다시 셋팅
    *******************************************/
    function clearAuto() { 
        // console.log("인터발멈추기");
        // 인터발 / 타임아웃 초기화!
        clearInterval(autoI);
        clearTimeout(autoT);
        
        // 잠시후 다시 작동하도록 타임아웃으로 재호출
        autoT = setTimeout(autoSlide,1000);
        
    } ////////////// clearAuto 함수 ////////////


    // 이벤트 등록 ///////////////////////////////////


    // slide.addEventListener("click",csvSlide());
    circleTimer.addEventListener("click", vidClick());
    videoBox.addEventListener("timeupdate",vidTimer());
    document.addEventListener("DOMContentLoaded", logSetban(), autoSlide());

});///////////// load ////////////////////////////

