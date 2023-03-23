window.addEventListener("DOMContentLoaded",()=>{

    console.log("로딩완료!");

    // 비디오대상
    const vid1 = document.querySelector("#video1");
    // console.log(vid1);

    const vid2 = document.querySelector("#video2");

    // 버튼 클릭시 재생/멈춤
    // 버튼대상: .circle_timer
    const btn_mainvid = document.querySelector(".mainVid .circle_timer");
    const btn_brandvid = document.querySelector(".brand .circle_timer");


    // 메인비디오 이벤트 설정
    btn_mainvid.addEventListener("click",()=>{
        // console.log("클릭",vid1.paused);
        event.preventDefault();

        if(vid1.paused) vid1.play();
        else vid1.pause();

    }); /////////// click //////////////////

    // 브랜드비디오 이벤트 설정
    btn_brandvid.addEventListener("click",()=>{
        event.preventDefault();

        if(vid2.paused) vid2.play();
        else vid2.pause();
    }); ////////// click //////////////////

    
    /************************************** 
        영상 길이만큼 svg 움직이기
    **************************************/

    // 동영상전체길이 : svg offset전체길이 = 동영상이동값 : svg offset이동값
    // 그러므로,
    // svg offset 이동값 = svgoffset전체길이 * 동영상이동값 / 동영상전체길이
    // x = 300% * vidsec_now / vidsec_max
    // x = 300% * vid2.currentTime / vid2.duration
    // 223~300 

    
    vid2.addEventListener('timeupdate', () => {
        
        // 0.5초마다 호출로 값 업데이트
        setInterval(()=>{
            // 영상 재생시간 현재값, 최대값 변수
            let vidsec_now = vid2.currentTime;
            let vidsec_max = vid2.duration;
            let svg2 = document.querySelector(".svg2");
            // 결과값
            let timer = ((223-300) * vidsec_now / vidsec_max);
            // console.log(timer);
            // 결과값 대입
            svg2.style.strokeDashoffset = (timer+300)+"%";
            svg2.style.transition = "0.1s ease 0"
        },5);
        
        clearInterval()
    });
    


    
    
    // 비디오 끝났을 때 발생하는 이벤트
    // video.addEventListener('ended', function(e) {});


});///////////// load ////////////////////////////