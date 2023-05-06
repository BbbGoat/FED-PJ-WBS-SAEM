/*************************************************** 
    함수: navFn
    기능: 네비게이션 함수
    1. li 클릭시 .top 클래스 on 넣기
    2. .top 구역 mouseleave시 클래스 on 제거
    3. 클릭한 li 클래스 on 넣기/나머지 빼기
    4. scrolltop값 -되면 박스 디자인 변경
***************************************************/
function navFn() {
    console.log("네비게이션!")

    // 0. 대상수집
    const top = document.querySelector(".top");
    const tglist = document.querySelectorAll(".catbx li > a");
    const nav = document.querySelector("nav");

    // 1. 대분류 li 클릭시 클래스 on
    tglist.forEach((ele,idx,val)=>{
        ele.onclick = function(e) {
            e.preventDefault();

            // li 클래스 초기화
            clearClass(val);

            // li 클래스 on
            this.parentElement.classList.add("on")
            // .top 클래스 on
            top.classList.add("on")

        }; ///// click 이벤트 //////////

        
        // 마우스리브 이벤트
        nav.onmouseleave = function(e) {
            e.stopPropagation();

            // 클래스 전체제거
            top.classList.remove("on");
            clearClass(val);
        }
    
    });

    /*********************************** 
        함수명: clearClass
        기능: 클래스 초기화
    ***********************************/
    function clearClass(val) {
    const list = document.querySelectorAll(".catbx li");
        for (let i = 0; i < val.length; i++) {
            list[i].classList.remove("on")
        }
    } /////////// clearClass ////////////


} ///////////////////// navFn //////////////////////


// 최초호출!
navFn();
