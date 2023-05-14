// 스토어 불러오기
import store from "./store.js";
import footData from "./temData/footerData.js";
import skinData from "./gdsData/skinData.js";
import perfumeData from "./gdsData/perfumeData.js";
import homeData from "./gdsData/homeData.js";

/***************************************************** 
    뷰 컴포넌트로 데이터 셋업하기
*****************************************************/
// [1] 뷰컴포넌트 - 카테고리
Vue.component("category-comp",{
    template: `
    <ul class="catbx">
        <li v-for="(v,i) in $store.state.gnb" :key="i">
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

            // gnb에서 파라미터 받아오기
            store.state.lnbsrc = parm;            
            console.log("내용업데이트!",store.state.lnbsrc);

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
            <dt class="all" v-on:click="linksys($store.state.lnbsrc,'제품 모두 보기')"><a href="#" v-text="$store.state.setsubtit1"></a></dt>
            <dd v-for="(v,n) in $store.state.setdd1" :key="n" v-on:click="linksys($store.state.lnbsrc,v)"><a href="#">{{v}}</a></dd>
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
    `,
    methods: {
        linksys(gnb,src) {
            // 링크시스템
            location.href = "sub.html?cat=" + encodeURIComponent(gnb) +'&'+ encodeURIComponent(src);
        },
    },
}); //////////////////// Vue 컴포넌트 ///////////////////////


// [2] 뷰컴포넌트 - 푸터
Vue.component("foot-comp",{
    template: footData.footarea,
}); //////////////////// Vue 컴포넌트 ///////////////////////


// [3] 뷰컴포넌트 - 서브페이지 상품
Vue.component("goods-comp",{
    template: `
    <section>
        <div class="container">
            <div class="pagewrap" v-on="initSetSubSrc()">
                <!-- 상단영역 -->
                <div class="product_top">
                    <div class="titbx">
                        <!-- 타이틀 -->
                        <div class="cate_main_title">
                            <h3>스킨케어</h3>
                            <p>천연성분으로 순수한 스킨케어를 경험해보세요</p>
                        </div>
                    </div>
                </div>
                <!-- 스티키박스 영역 -->
                <div class="clearfix">
                    <div class="pageL">
                        <div class="stkbx">
                            <div class="stkimg">
                                <img src="./images/cat_hand.jpg" alt="카테고리배너">
                                <div class="stktxt">
                                    <h4>스킨케어</h4>
                                    <span>스킨케어 모두보기</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pageR">
                        <div class="inner">                                    
                            <div class="menuarea">
                                <div class="menu_wrap">
                                    <dl class="menu">
                                        <dd class="on" v-on:click="setCatnum('전체보기')"><a href="#">제품 모두 보기</a></dd>
                                        <dd v-for="(v,n) in $store.state.setlnb" v-on:click="setCatnum(n)"><a href="#">{{v}}</a></dd>
                                    </dl>
                                </div>
                            </div>
                            <!-- 일반상품 -->
                            <div class="product_wrap">
                                <div class="prdList">
                                    <!-- 상품리스트 -->
                                    <div class="gridbox" v-for="(v,i) in this.prdData[dataNum()]" :key="i" v-if="v.catnum === $store.state.catnum || $store.state.catnum === '전체보기'">
                                            <a href="#">{{i}}
                                            <div class="prd_thumb">
                                                <div class="prdImg">
                                                    <img v-bind:src="prdData[dataNum()][i].prdImg" alt="prdimage">
                                                </div>
                                            </div>
                                            </a>
                                            <div class="description">
                                                <!-- 주요정보: 상품명/용량/가격 -->
                                                <div class="pdInfo">
                                                    <a href="#">
                                                        <h5 class="pdInfo-name" v-text="prdData[dataNum()][i].pdInfo['name']"></h5>
                                                        <div class="pdInfo-info">
                                                            <span v-text="prdData[dataNum()][i].pdInfo['info']"></span>
                                                            <span class="separator">/</span>
                                                            <span>{{numberWithCommas(prdData[dataNum()][i].pdInfo['price'])}}₩</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- 서브정보: 디테일 정보 -->
                                                <div class="pdDetail">
                                                    <ul class="pdDetail-list">
                                                        <li class="pdDetail-listItem" v-for="(v,n) in listCnt">
                                                            <div class="pdDetail-title" v-text="prdData[dataNum()][i].pdDetail.title[n]"></div>
                                                            <div class="pdDetail-content" v-text="prdData[dataNum()][i].pdDetail.content[n]"></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        <div class="btn_wrap" v-on:click="addCart(prdData[dataNum()][i].data)">
                                            <div class="btn fill">CART</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            // 외부 서브페이지 데이터
            prdData: [skinData,perfumeData,homeData],
            // 리스트 갯수 변수
            listCnt: 2,
        }
    },

    methods: {
        // 카트 추가 메서드
        addCart(data) {
            console.log("해당제품 카트에 추카 시키기:", data, skinData[data]);

            // 뱉어내기
            return skinData[data]
        },
        // 정규식함수(숫자 세자리마다 콤마해주는 기능)
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        // lnb 클릭시 v-if 조건값 설정하는 메서드
        setCatnum(num) {
            console.log("setCatnum num전달값:",num);
            store.state.catnum = num;
        },
        // 서브페이지 최상위 경로 설정해주는 함수
        initSetSubSrc() {
            // 각 카테고리별 lnb 대분류 경로 설정
            store.state.setlnb = store.state.gnb[store.state.curUrl0].dd1;
        },
        // url 읽어와서 카테고리마다 고유넘버 적용시키고 결과값으로 보내기
        dataNum(){

            let result = "";
            let cat = store.state.curUrl0;

            // 분기시키기
            switch(cat) {
                case cat = "skin" : result = "0"; break;
                case cat = "perfume" : result = "1"; break;
                case cat = "home" : result = "2"; break;
                case cat = "gift" : result = "3"; break;
            }
            
            // 분기한 결과값 뱉어내기!
            return result;
        }
    }
}); /////////////////// Vue 컴포넌트 ////////////////////////




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
        store.commit('getLink')
    },
    
    mounted() {

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


// [2] 뷰인스턴스 - 서브메인
new Vue({
    el: "#cont",
    store,
    methods: {

    },
    
    mounted() {
        
        // 서브페이지 초기데이터 셋팅
        function initCatnum() {
            
            console.log("*********작업 구간**********:",store.state.curUrl1);

            // lnb 텍스트 저장 변수
            const ary = $(".menu dd");
            console.log("배열 텍스트 읽어오기:",ary)

            // 각 변수에 셋팅하기
            ary.each(function(idx,ele){
                // console.log($(ele).text());

                if($(ele).text() === store.state.curUrl1) {
                    // 클릭이벤트 강제발생 / 클래스 on 넣기/빼기
                    $(this).trigger("click")
                    .addClass("on").siblings().removeClass("on");
                }
            });
                
        }
        // 최초호출!
        initCatnum();
        
        // lnb 메뉴 클릭시 클래스on 추가/제거
        $(".menu dd").click(function(e){
            e.preventDefault();
            $(this).addClass("on").siblings().removeClass("on");
        });
    }
}); ////////////////// Vue 인스턴스 //////////////////////


// [3] 뷰인스턴스 - 푸터
new Vue({
    el:"#info",
    store,
    data: {},
}); ////////////////// Vue 인스턴스 //////////////////////
