// 웹&앱 PJ 메인페이지 JS -main.js

window.addEventListener("DOMContentLoaded",()=>{
    
    console.log("로딩완료");
    function chgFixed() {

        const stkimg = document.querySelector(".stkimg");
        const tgbox = document.querySelector(".stkbx");
        const pageL = document.querySelector(".pageL");
        
        
        // 타겟 가로사이즈 변수
        let tg = tgbox.offsetWidth;
        
        // 최초 로딩시 변경
        window.onload = () => {
            tgChg();
        }

        // 리사이즈시 업데이트
        window.onresize = () => {
            tgChg();
        }

        // 스크롤이벤트
        window.onscroll = () => {
            console.log("스크롤");

            let chgFixbx = retVal(tgbox);
            let resetbx = retVal(pageL);
            // console.log(chgFixbx);
            console.log(resetbx);

            if (chgFixbx < 100) {
                console.log("여기서멈춰");
                tgbox.style.position = "fixed";
                tgbox.style.top = "90px";
                if (resetbx > 70) {
                    // 픽스드 지우기
                    tgbox.removeAttribute("style");
                }
                else if (resetbx < -800 || resetbx < -850) {
                    // tgbox.removeAttribute("style");
                    tgbox.style.position = "absolute";
                    tgbox.style.bottom = "0";
                    tgbox.style.top = "auto";
                    // tgbox.removeAttribute("style");
                }
            }

        }

        function retVal(x) {
            return x = x.getBoundingClientRect().top
        }


        /********************** 
            사이즈변경함수
        **********************/
        function tgChg() {
            console.log("사이즈변경")
            tg = tgbox.offsetWidth;
            stkimg.style.width = tg + "px";
        } //////// tgchg //////////////////
        
    } /////////// chgFixed /////////////////////

    // 최초호출
    chgFixed();
    
    
});