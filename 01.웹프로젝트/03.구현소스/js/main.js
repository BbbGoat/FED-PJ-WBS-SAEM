window.addEventListener("DOMContentLoaded",()=>{

    console.log("로딩완료!");

    // 비디오대상
    const vid1 = document.querySelector("#video1");
    console.log(vid1);

    // 버튼 클릭시 재생/멈춤
    // 버튼대상: .circle_timer
    const btn_vid = document.querySelector(".circle_timer");



    btn_vid.addEventListener("click",()=>{
        console.log("클릭",vid1.paused);

        if(vid1.paused) vid1.play();
        else vid1.pause();

        
    }); /////////// click //////////////////


});///////////// load ////////////////////////////