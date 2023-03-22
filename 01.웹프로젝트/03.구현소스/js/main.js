window.addEventListener("DOMContentLoaded",()=>{

    console.log("로딩완료!");

    // 비디오대상
    const vid1 = document.querySelector("#video1");
    console.log(vid1);

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



});///////////// load ////////////////////////////