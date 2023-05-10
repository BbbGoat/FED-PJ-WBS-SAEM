// 스토어 불러오기
import store from "./store.js";
import footData from "./temData/footerData.js";

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
    template: footData.footarea,
}); //////////////////// Vue 컴포넌트 ///////////////////////


// [3] 뷰컴포넌트 - 서브페이지 상품

Vue.component("goods-comp",{
    template: `
    <div class="prdList">
        <!-- 상품리스트 -->
        <div class="gridbox" v-for="(v,i) in $store.state.cnt">
                <a href="#">
                <div class="prd_thumb">
                    <div class="prdImg">
                        <img v-bind:src="$store.state.goods.prdImg+v+'.png'" alt="prdimage">
                    </div>
                    <!-- <div class="icon"></div> -->
                </div>
                </a>
                <div class="description">
                    <!-- 주요정보: 상품명/용량/가격 -->
                    <div class="pdInfo">
                        <a href="#">
                            <h5 class="pdInfo-name">상품명들어가는란</h5>
                            <div class="pdInfo-info">
                                <span>180 ml</span>
                                <span class="separator">/</span>
                                <span>₩00,000</span>
                            </div>
                        </a>
                    </div>
                    <!-- 서브정보: 디테일 정보 -->
                    <div class="pdDetail">
                        <ul class="pdDetail-list">
                            <li class="pdDetail-listItem">
                                <div class="pdDetail-title">사용감</div>
                                <div class="pdDetail-content">부드러움, 매끄러움, 상쾌함</div>
                            </li>
                            <li class="pdDetail-listItem">
                                <div class="pdDetail-title">향</div>
                                <div class="pdDetail-content">신선함, 알파인향, 캠포릭</div>
                            </li>
                        </ul>
                    </div>
                </div>
            <div class="btn_wrap">
                <div class="btn fill">CART</div>
            </div>
        </div>
    </div>
    `,

    methods: {
        // 함수영역
    }
}); /////////////////// Vue 컴포넌트 ////////////////////////


new Vue({
    el: "#cont",
    store,
}); /////////




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
        store.commit("setGoods");
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

