// 스토어 불러오기
import store from "./store.js";

/***************************************************** 
    뷰 컴포넌트로 데이터 셋업하기
*****************************************************/
// [1] 뷰컴포넌트 - 카테고리
Vue.component("category-comp",{
    template: `
    <ul class="catbx">
        <li v-for="(v,i) in $store.state.gnb">
            <a href="#" v-on:click="chgData(i)">{{v['maintit']}}</a>
        </li>
        <sub-comp></sub-comp>
    </ul>
    `,
    data() {
        return {
        }
    },
    methods: {
        // v-on 클릭시 데이터 변경 발생
        chgData(parm) {
            event.preventDefault();
            // console.log("내용업데이트!");

            // [1] 업데이트!!
            // thumb박스
            store.state.setimgsrc = store.state.gnb[parm].imgsrc;
            store.state.settit = store.state.gnb[parm].imgtit;
            store.state.setdesc = store.state.gnb[parm].desc;

            // dd박스
            store.state.setsubtit1 = store.state.gnb[parm].subtit[0];
            store.state.setsubtit2 = store.state.gnb[parm].subtit[1];
            store.state.setsubtit3 = store.state.gnb[parm].subtit[2];
            store.state.setdd1 = store.state.gnb[parm].dd1;
            store.state.setdd2 = store.state.gnb[parm].dd2;
            store.state.setdd3 = store.state.gnb[parm].dd3;
        }
    }
}); ///////////////// Vue 컴포넌트 ////////////////////

// [1-2] 뷰컴포넌트 - 카테고리 서브영역
Vue.component("sub-comp",{
    template: `
    <div class="subbx">
        <div class="thumb">
            <img v-bind:src="$store.state.setimgsrc" alt="썸네일">
            <h5 v-text="$store.state.settit"></h5>
            <span v-text="$store.state.setdesc"></span>
        </div>
        <dl class="sub">
            <dt class="all"><a href="#" v-text="$store.state.setsubtit1"></a></dt>
            <dd v-for="(v,n) in $store.state.setdd1"><a href="#">{{v}}</a></dd>
        </dl>
        <dl class="sub">
            <dt><a href="#" v-text="$store.state.setsubtit2"></a></dt>
            <dd v-for="(v,n) in $store.state.setdd2"><a href="#">{{v}}</a></dd>
            </dl>
        <dl class="sub">
            <dt><a href="#" v-text="$store.state.setsubtit3"></a></dt>
            <dd v-for="(v,n) in $store.state.setdd3"><a href="#">{{v}}</a></dd>
        </dl>
    </div>
    `
}); //////////////////// Vue 컴포넌트 ///////////////////////


// [2] 뷰컴포넌트 - 푸터
Vue.component("foot-comp",{
    template: `
    <!-- pc용 푸터 -->
    <section id="dt">
        <div class="cs_center">
            <span class="title">고객센터</span>
            <a href="tel:123-4567" class="cs_number">123:4567</a>
            <span class="cs_time">월-금 / 10-17시 (점심시간 13-14)</span>
        </div>
        <div class="sitemap">
            <dl class="depth">
                <dt class="title">주문 및 문의</dt>
                <dd class="list">
                    <a href="#">문의하기</a>
                    <a href="#">자주 묻는 질문</a>
                    <a href="#">배송</a>
                    <a href="#">반품</a>
                    <a href="#">배송 조회하기</a>
                    <a href="#">주문 내역</a>
                </dd>
            </dl>
            <dl class="depth">
                <dt class="title">소셜미디어</dt>
                <dd class="list">
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Kakao Plus Friend</a>
                </dd>
            </dl>
            <dl class="depth">
                <dt class="title">소개</dt>
                <dd class="list">
                    <a href="#">브랜드 스토리</a>
                    <a href="#">이솝 재단</a>
                    <a href="#">채용</a>
                    <a href="#">개인정보처리방침</a>
                </dd>
            </dl>
            <dl class="depth">
                <dt class="title">서비스</dt>
                <dd class="list">
                    <a href="#">기업체 구매</a>
                    <a href="#">페이셜 어포인트먼트</a>
                    <a href="#">1:1 채팅 상담</a>
                    <a href="#">린스 앤 리턴 캠페인</a>
                </dd>
            </dl>
        </div>
        <div class="company">
            <h2>© Aesop</h2>
            <address class="address">
                서울특별시 강남구 도산대로45길 10-6 이솝코리아 | 대표자: 프레데리크미셸어완세일러 | 대표전화: 1800-1987 | 대표 이메일: aesop@aesop.com | 
            </address>
            <span class="company_number">사업자 등록 번호: 220-88-56014 | </span>
            <span class="company_infomem">통신판매업 신고번호: 2014-서울강남-02300</span>
            <p id="copyright">
                © 2023 Aesop All rights reserved. In God we trust.
            </p>
        </div>
    </section>
    `,
}); //////////////////// Vue 컴포넌트 ///////////////////////








/********************************************* 
    뷰인스턴스 생성영역
*********************************************/

// [1] 뷰인스턴스 - 헤더
new Vue({
    el: "#top",
    store,
    data: {},
    methods: {},
    
    created() {
        // store.commit("setData",{
        //     imgsrc: "",
        // });
    },
    
    mounted() {
        // console.log("뷰JS 연결!!!")

        // 클릭시 li에 클래스 on
        $(".catbx li > a").click(function(e){
            e.preventDefault();
            $(this).parent().addClass("on")
            .siblings().removeClass("on");
            $(".top").addClass("on");
            $(".thumb").fadeIn(400);
        }) ///////// click ////////////
        
        // 마우스아웃시 전체 클래스 빼기
        $("nav").mouseleave(function(){
            $(".top").removeClass("on");
            $(".catbx li").removeClass("on");
            $(".thumb").fadeOut(400);
        }); ///////// mouseout //////////


        // 스크롤이벤트
        $(window).on("scroll",function(){
            // 스크롤시작!
            let scStart = $(window).scrollTop();
            // console.log(scStart)

            if (scStart > 0) {
                $("nav").addClass("scl");
            }
            else if (scStart <= 0) {
                // console.log("원상태");
                $("nav").removeClass("scl");
            }
        }); /////// scroll 이벤트 ///////

    } ////////// mounted ///////////

}); ////////////////// Vue 인스턴스 //////////////////////


// [2] 뷰인스턴스 - 푸터
new Vue({
    el:"#info",
    store,
    data: {},
}); ////////////////// Vue 인스턴스 //////////////////////

