window.addEventListener("DOMContentLoaded",()=>{


    console.log("로딩완료!");
    
    // 전역 변수 선언 ///////////////////
    const circleTimer = document.querySelector(".circle_timer");
    const timerBtn = document.querySelectorAll(".circle_timer a");
    const videoBox = document.querySelector(".video_box");
    const video = document.querySelectorAll(".video");
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
                let currentVideo = this.parentElement.previousElementSibling.querySelector(".video");
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

    /******************************************* 
        함수명: chgVid
        기능: 모바일사이즈에서 영상 url 변경
    *******************************************/

    // 대상
    const mainVid = document.querySelector("#mainVid");

    function chgVid() {
        
        // 현재 가로화면 크기
        let currWidth = window.innerWidth;

        // 모바일 사이즈
        if (currWidth <= 650) {
            // console.log(window.innerWidth);
            mainVid.setAttribute("src","./images/mainmov_m.mp4");
            // mainVid.innerHTML="./images/mainmov_m.mp4";
        }
        // 데스크탑 사이즈
        else if (currWidth > 650) {
            mainVid.setAttribute("src","./images/mainmov.mp4");
        }

    } ///////////// chgVid 함수 //////////////////

    chgVid();

    window.addEventListener("resize",function(){
        let currWidth = this.innerWidth;
        console.log(window.innerWidth);
        if (currWidth <= 650) {
            mainVid.setAttribute("src","./images/mainmov_m.mp4");
            // mainVid.innerHTML="./images/mainmov_m.mp4";
        }
        // 데스크탑 사이즈
        else{
            mainVid.setAttribute("src","./images/mainmov.mp4");
        }

    })
    /******************************************* 
        함수명: scrVid
        기능: 로드후 .3초 후 height 변경
    *******************************************/

    const section1Vid = document.querySelector(".mainVid");

    function scrVid() {
        setTimeout(()=>{
            section1Vid.style.height = "80vh";
            section1Vid.transition = "height 1s ease-out";
        },1000);
    } ///////////// scrVid 함수 /////////////////


    /******************************************* 
        함수명: fadeInTxt
        기능: 스크롤 특정 위치값에서 클래스 on 넣기
    *******************************************/
    function fadeInTxt() {
        
        // 대상수집
        const fadeTxt = document.querySelectorAll(".text_area");
        const titleTxt = document.querySelectorAll(".title_area");
        const newsField = document.querySelector(".news_text");
        const csvField = document.querySelector(".csv_area");
        const logField = document.querySelector(".log_area");
        
        // 화면높이값의 절반구하기
        const hv = (window.innerHeight / 3) * 2.5;
        // console.log("2/3높이:",hv);

        ////////////////////////////////
        // 클래스 넣기 함수 /////////////
        ////////////////////////////////
        const addClass = (x) => {
            // x - 등장요소
            // 대상요소의 현재스크롤 위치
            let xval = retVal(x);
            
            // 구간적용여부 검사하기
            // 0보다 크고 화면의 2/3보다 작은 구간!
            // 범위지정
            if (xval < hv && xval > 0) {
                // 해당요소에 클래스 넣기
                x.classList.add("on");
            }
        }; //////////// addClass //////////


        window.addEventListener("scroll",()=>{
            
            for (let x of fadeTxt) addClass(x);
            for (let i of titleTxt) addClass(i);
            addClass(csvField);
            addClass(logField);
            addClass(newsField);

        }); //////// scroll 이벤트 /////////
        
    } //////////// fadeIntxt 함수 //////////////

    fadeInTxt();

    // 브라우저 top을 기준으로한, 전달변수의 위치값 나타내는 함수 retVal
    const retVal = (ele) => ele.getBoundingClientRect().top;


    /******************************************* 
        함수명: scrMove
        기능: 스크롤시 특정 영역 내에서 object 움직임
    ///////// 생성자함수 만들어서 스크롤액션 3개 셋팅하기 //////////////////
    *******************************************/

    // 등장액션 대상: .thumb
    const thumb = document.querySelectorAll(".thumb");
    // 함수 사용할 대상
    const areaBox = document.querySelector(".area_box");


    
    function scrMove() {
        window.addEventListener("scroll",()=>{
            
            // 스크롤시 스크롤 위치값  찍기
            let scrollY = window.scrollY;
            // console.log("현재 스크롤 위치",scrollY);
            
            // 전체문서 높이값
            const docH = document.body.clientHeight;
            // console.log("문서전체높이: ", docH);

            // 윈도우 높이값
            const winH = window.innerHeight;
            // console.log("윈도우 높이: ", winH)

            
            // 기존 비례식
            // x = winH * scTop / docH 
            // 페이지전체길이 : 영역으로 잡을 박스크기(스크롤 속도가 됨!) = 스크롤이동값 : 이미지이동값
            // 이미지이동값 = 윈도우높이 * 스크롤이동값 / 페이지전체길이
            // docH : boxOffsetH = scrollY : x
            // 결과값 = boxOffsetH * scrollY / docH;
            
            let boxOffsetH = areaBox.offsetHeight;
            // console.log("박스고정크기",boxOffsetH);

            // 비례식 결과
            let result = boxOffsetH * scrollY / docH;
            

            thumb.forEach((ele,idx) => {
    
                // 각 thumb요소들 top기준 위치값
                let thumbHeight = retVal(ele);

                if (thumbHeight < winH && thumbHeight > 0) { // 각 요소 0보다 작아질 경우 이벤트 종료
                    // 이벤트 출력
                    ele.style.transform = `translateY(${-result}px)`;
                } ////// if

            });

        }); ///////// scroll 이벤트 ////////
    } ////////////// scrMove 함수 ///////////////


    scrMove();



    

    circleTimer.addEventListener("click", vidClick());
    videoBox.addEventListener("timeupdate",vidTimer());
    document.addEventListener("DOMContentLoaded", logSetban(), autoSlide(), scrVid());



});///////////// load ////////////////////////////

