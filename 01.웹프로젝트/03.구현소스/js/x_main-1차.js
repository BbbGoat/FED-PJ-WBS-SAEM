window.addEventListener("DOMContentLoaded",()=>{

    console.log("로딩완료!");

    // 비디오대상
    const vid1 = document.querySelector("#video1");
    const vid2 = document.querySelector("#video2");
    
    // 버튼 클릭시 재생/멈춤
    // 버튼대상: .circle_timer
    const btn_mainvid = document.querySelector(".mainVid .circle_timer");
    const btn_brandvid = document.querySelector(".brand .circle_timer");
    // 버튼 아이콘
    const ticon_main = document.querySelector(".timer_icon img:first-child");
    const ticon_brand = document.querySelector(".timer_icon img:last-child");


    // 메인비디오 클릭 이벤트 설정
    btn_mainvid.addEventListener("click",()=>{
        // console.log("클릭",vid1.paused);
        event.preventDefault();

        if (vid1.paused) {
            vid1.play();
            ticon_main.style.marginTop = "0";
            ticon_main.alt = "일시정지";
        }
        else {
            vid1.pause();
            ticon_main.style.marginTop = "-25px";
            ticon_main.alt = "재생";
        }

    }); /////////// click //////////////////

    // 브랜드비디오 클릭 이벤트 설정
    btn_brandvid.addEventListener("click",()=>{
        event.preventDefault();

        if (vid2.paused) {
            vid2.play();
            ticon_brand.style.marginTop = "0";
            ticon_brand.alt = "일시정지";
        }
        else {
            vid2.pause();
            ticon_brand.style.marginTop = "-25px";
            ticon_brand.alt = "재생";
        }
    }); ////////// click //////////////////

    
    /************************************** 
        영상 길이만큼 svg 움직이기
    **************************************/

    // 동영상전체길이 : svg offset전체길이 = 동영상이동값 : svg offset이동값
    // svg offset 이동값 = svgoffset전체길이 * 동영상이동값 / 동영상전체길이
    // x = 300% * vidsec_now / vidsec_max
    // x = 300% * vid2.currentTime / vid2.duration
    // 223~300 

    // svg 대상수집
    const svg1 = document.querySelector(".svg1");
    const svg2 = document.querySelector(".svg2");
    
    // 메인비디오 타임업데이트 이벤트 설정
    vid1.addEventListener("timeupdate",() => {
        setInterval(() => {
            // 영상 재생시간 현재값, 최대값 변수
            let vidsec_now = vid1.currentTime;
            let vidsec_max = vid1.duration;
            // 결과값
            let timer = (300 * vidsec_now / vidsec_max);
            // 출력 + 트랜지션
            svg1.style.strokeDashoffset = (300-timer)+"%";
            svg1.style.transition = "0.3s ease 0";
        },100);

        // 인터발초기화
        clearInterval()

    }); ///////////// timeupdate 이벤트 ////////////

    // 브랜드비디오 타임업데이트 이벤트 설정
    vid2.addEventListener("timeupdate", () => {
        // 0.5초마다 호출로 값 업데이트
        setInterval(()=>{
            // 영상 재생시간 현재값, 최대값 변수
            let vidsec_now = vid2.currentTime;
            let vidsec_max = vid2.duration;
            // 결과값
            let timer = (300 * vidsec_now / vidsec_max);
            // 출력 + 트랜지션
            svg2.style.strokeDashoffset = (300-timer)+"%";
            svg2.style.transition = "0.3s ease 0";
        },100);

        // 인터발초기화
        clearInterval()

    }); ///////////// timeupdate 이벤트 ////////////


});///////////// load ////////////////////////////