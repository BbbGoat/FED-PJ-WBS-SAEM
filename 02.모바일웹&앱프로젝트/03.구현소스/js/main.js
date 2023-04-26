// 웹&앱 PJ 메인페이지 JS -main.js

window.addEventListener("DOMContentLoaded",()=>{


    console.log("로딩완료!");
    
    
    /********************************************** 
        [ 터치 배너 기능구현하기 ]

        1. 원리 : 제이쿼리 UI를 이용하여 x축으로만
        드래그가 되도록 설정 후 위치값을 체크하여
        드래그가 끝난 시점에 자동 위치이동 애니메이션
        처리해준다!
    
        2. 대상 : .vidslide
    
        3. 기준
        (1) 왼쪽방향이동 : 기준값(-100%) 보다 -10% 작은경우(-110%)
        (2) 오른쪽방향이동 : 기준값(-100%) 보다 10% 큰경우(-90%)
        (3) 제자리이동 : 양쪽기준값 사이일때(-110% ~ -90%)
    
        4. 구현시 주의사항
        -> %단위는 모두 px단위로 변환하여 구현한다!
        -> 배너크기가 윈도우가로크기와 같다! 이것을 활용함!
        
    **********************************************/
    function slideFn() {

        // 슬라이드 대상수집
        const slide = $(".vidslide");
        
        // 드래그설정
        slide.draggable({
            axis: "x" // x축고정
        }); ///// 드래그설정 /////
    
        // 윈도우크기 리턴함수
        const retWin = () => {
            return $(window).width();
        }
        // 윈도우 가로크기 : left 기준위치 px변환!
        let winW = retWin();
        // 리사이즈시 윈도우크기 업데이트
        $(window).resize(()=>{
            winW = retWin();
            // console.log(winW)
        });
    
        // 광드래그 방지 커버
        const cover = $(".cover");
    
        // 드래그 종료후 발생하는 이벤트 함수
        slide.on("dragstop",function(){
            console.log("드래그멈춤");
    
            // 광드래그 방지 커버 보이기
            cover.show();
    
            // 슬라이드 left위치값
            let sleft = $(this).offset().left;
            console.log(sleft);
    
            // 분기점 : -110%보다 작을때
            if (sleft < -winW*1.1) {
                slide.animate({
                    left: -winW*2 + "px"
                },1000,"easeOutQuint",()=>{
                    // 이동후 첫번째 li 이동
                    slide.append(slide.find("li").first()).css({left:"-100%"});
                    // 커버제거하기
                    cover.hide();
                }); // animate
    
                // 블릿 변경함수 호출!
                addOn(2);
                // 영상 재생함수 호출!
                vidOn(2);
                
            } ///// if : 왼쪽이동 /////
            
            // 분기점 : -90%보다 클때
            else if (sleft > -winW*0.9) {
                slide.animate({
                    left: "0px",
                },1000,"easeOutQuint",()=>{
                    // 이동후 맨뒤 li 맨앞으로 이동하기
                    slide.prepend(slide.find("li").last()).css({left:"-100%"});
                    // 커버제거하기
                    cover.hide();
                });
                
                // 블릿 변경함수 호출!
                addOn(0);
                // 영상 재생함수 호출!
                vidOn(0);
                
            } ///// else if : 오른쪽이동 /////
            
            // 분기점 : 제자리일경우
            else {
                slide.animate({
                    left: -winW + "px"
                }, 200, "easeOutQuint", ()=>{
                    cover.hide();
                });
            } ///// else : 제자리 /////
            
        }); ////////////////// slide dragstop 이벤트 //////////////////

        /**************************************** 
            영상바로재생
        ****************************************/
        // 이벤트대상
        const mainVid = $("#mainvid1");

        // 트리거발생
        mainVid.trigger("dragstop");
    
        /*************************************** 
            함수명 : setSeq
            기능 : 슬라이드에 data-seq 속성값 설정
        ***************************************/
        function setSeq() {
            // 배너 li
            const list = slide.find("li");
            const cnt = list.length;
    
            // 조건문
            list.each((idx,ele) => {
                // 처음것을 마지막 순번으로 넣기
                if (idx === 0) {
                    $(ele).attr("data-seq", cnt-1)
                }
                else {
                    $(ele).attr("data-seq", idx-1)
                }
            }); //////////// each ////////////
            
        } /////////// setSeq 함수 ///////////////////

        // 최초호출
        setSeq();

    
        /*************************************** 
            함수명 : addOn
            기능 : data-seq를 조건으로 클래스 on 넣기/빼기
        ***************************************/
        const indic = $(".indic li");
    
        function addOn(seq) { // seq - 읽을 슬라이드
    
            // 0 - 오른쪽, 2 - 왼쪽 이동
            // 슬라이드 data-seq 읽어오기
            let getseq = slide.find("li").eq(seq).attr("data-seq");
    
            // 해당 슬라이드와 동일순번 블릿에 클래스 on
            indic.eq(getseq).addClass("on")
            .siblings().removeClass("on");
    
        } ////////////// addOn 함수 ///////////////


        
        function vidOn(seq) {

            // 타임업데이트 ///////////////////////////
            
            let getseq = slide.find("li").eq(seq).attr("data-seq");
            
            // 타겟 비디오
            let tgVid = slide.find("li").eq(seq).find("video");
            // 타겟 제외
            let noneTg = tgVid.parent().siblings().find("video");
            // 출력대상
            let chgVar = indic.eq(getseq).find(".bld");
            let noneVar = chgVar.parent().siblings().find(".bld");
            

            // 비디오재생
            play(tgVid);
            
            // 타이머 작동 이벤트
            $(document).ready(function(){
                tgVid.on("timeupdate",function(event){
                    // console.log(this.currentTime)
                    let nowTime = this.currentTime;
                    let maxTime = this.duration;

                    let timer = (100*nowTime / maxTime);
                    
                    // 출력
                    chgVar.css({
                        width: timer+"%",
                        transition: ".3s ease 0"
                    });

                    // 제외대상들 초기화
                    noneTg.off("timeupdate",stop(noneTg));
                }); //////////// timeupdate ///////////////
            });

            // 재생함수
            function play(tg) {
                tg.get(0).currentTime = 0;
                tg.get(0).play();
            }

            // 멈춤함수
            function stop(tg) {
                tg.get(0).pause();
                // 재생시간 초기화
                tg.get(0).currentTime = 0;
                noneVar.css({width:"0"});
            }
            
        } ////////////////////// vidOn 함수 //////////////////////
        
        
        addOn(1);
        vidOn(1);
        
    } ///////////////// slideFn 함수 /////////////////////

    
    // 최초호출
    slideFn();
}); ///////////////////// 로드구역 ///////////////////////