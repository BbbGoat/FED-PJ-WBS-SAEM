// 서브 페이지 뷰엑스 스토어 셋팅 JS - store.js

export default new Vuex.Store({
    // (1) 데이터 셋팅구역:
    state: {
        // gnb 데이터셋업
        gnb: {
            skin: {
                maintit: "핸드&스킨",
                subtit: ["제품 모두 보기", "유형", "사랑받는 제품"],
                dd1: ["핸드크림", "바디", "클렌저", "토너", "세럼&에센스"],
                dd2: ["중성", "건성", "지성", "복합성"],
                dd3: ["파슬리 씨드 안티 옥시던트 인텐스 세럼", "이그절티드 아이 세럼", "비 트리플 씨 페이셜 밸런싱 젤"],
                imgsrc: "./images/gnb_1.jpg",
                imgtit: "이솝 에센셜 아로마 케어 번들",
                desc: "효과적인 수분 공급, 퍼스널 케어를 경험해보세요.",
            },
            perfume: {
                maintit: "향수",
                subtit: ["제품 모두 보기", "유형", "사랑받는 제품"],
                dd1: ["신제품:글롬 오 드 퍼퓸", "플로럴", "프레쉬", "우디"],
                dd2: ["향수유형", "향수유형", "향수유형", "향수유형"],
                dd3: [
                    "향수 인기제품 목록입니다",
                    "향수 인기제품 목록입니다",
                    "향수 인기제품 목록입니다",
                    "향수 인기제품 목록입니다",
                    "비 트리플 씨 페이셜 밸런싱 젤",
                ],
                imgsrc: "./images/gnb_2.jpg",
                imgtit: "아더토피아 퍼퓸 시리즈",
                desc: "독특한 프래그런스 5종으로 구성된 오 드 퍼퓸 시리즈",
            },
            home: {
                maintit: "홈",
                subtit: ["제품 모두 보기", "유형", "사랑받는 제품"],
                dd1: ["인센스", "캔들", "룸스프레이", "문학"],
                dd2: ["홈유형", "홈유형", "홈유형", "홈유형"],
                dd3: ["홈 인기제품 목록입니다", "홈 인기제품 목록입니다", "홈 인기제품 목록입니다"],
                imgsrc: "./images/gnb_3.jpg",
                imgtit: "매력적인 아로마 3종",
                desc: "대나무 심지가 없는 독특한 인센스 스틱 3종",
            },
            gift: {
                maintit: "선물",
                subtit: ["제품 모두 보기", "유형", "사랑받는 제품"],
                dd1: ["시즈널 기프트 키트", "스킨 케어 키트", "바디&핸드 케어 키트", "트래블"],
                dd2: ["선물유형", "선물유형", "선물유형", "선물유형"],
                dd3: ["기프트 인기제품 목록입니다", "기프트 인기제품 목록입니다", "기프트 인기제품 목록입니다"],
                imgsrc: "./images/gnb_4.jpg",
                imgtit: "마블러스 멘토 기프트 키트",
                desc: "소중한 분들에게 관심과 마음을 전하세요.",
            },
            post: {
                maintit: "칼럼",
                subtit: ["이솝 칼럼 시리즈", "이솝"],
                dd1: [
                    "이솝 프래그런스 컬렉션의 새로운 장: 글롬 오 드 퍼퓸",
                    "홈 프래그런스 가이드",
                    "정원에서의 사색",
                    "섬세한 눈가 피부 관리법",
                    "존재의 울림: 이더시스 오 드 퍼퓸",
                ],
                dd2: ["브랜드스토리", "디자인", "제품"],
                // dd3: ["기프트 인기제품 목록입니다", "기프트 인기제품 목록입니다", "기프트 인기제품 목록입니다"],
                imgsrc: "./images/post_1.jpg",
                imgtit: "내면 세계로의 여정",
                desc: "이솝 프래그런스 컬렉션의 새로운 장: 글롬 오 드 퍼퓸",
            },
        }, ////////// gnb /////////

        // 서브페이지 제품 데이터셋업
        goods: {
            skin: {
                pd1: {
                    prdImg: "./images/goods/hand/pd-1.png",
                    pdInfo: {
                        name: "상품명출력",
                        info: "120ml",
                        price: "000000",
                    },
                    pdDetail: {
                        title: ["사용감", "향"],
                        content: ["부드러움, 매끄러움, 상쾌함", "신선함, 알파인향, 캠포릭"],
                    },
                    data: "AWYB847G",
                },
                pd2: {
                    prdImg: "./images/goods/hand/pd-2.png",
                    pdInfo: {
                        name: "상품명출력2",
                        info: "100ml",
                        price: "100000",
                    },
                    pdDetail: {
                        title: ["사용감", "향"],
                        content: ["sadf, sadf, 상쾌fd함", "a, b, c"],
                    },
                    data: "MDIB547",
                },
            }, //////// hand
            perfume: {
                pd1: {
                    prdImg: "./images/goods/perfume/pd-1.png",
                    pdInfo: {
                        name: "상품명출력",
                        info: "120ml",
                        price: "000000",
                    },
                    pdDetail: {
                        title: ["사용감", "향"],
                        content: ["부드러움, 매끄러움, 상쾌함", "신선함, 알파인향, 캠포릭"],
                    },
                    data: "AWYB847G",
                },
                pd2: {
                    prdImg: "./images/goods/hand/pd-2.png",
                    pdInfo: {
                        name: "상품명출력2",
                        info: "100ml",
                        price: "100000",
                    },
                    pdDetail: {
                        title: ["사용감", "향"],
                        content: ["sadf, sadf, 상쾌fd함", "a, b, c"],
                    },
                    data: "MDIB547",
                },
            }, /////// perfume
        }, //////// goods ////////
        

        //////////////////////////////////////

        // 대분류/중분류 변수
        setsubtit: "",
        setdd1: "",
        setdd2: "",
        setdd3: "",

        // thumb박스 변수
        setimgsrc: "",
        settit: "",
        setdesc: "",

        // 굿즈박스 변수
        name: "상품명출력",
        info: "120ml",
        price: "00,000",
        title: ["사용감", "향"],
        content: ["부드러움, 매끄러움, 상쾌함", "신선함, 알파인향, 캠포릭"],
        cnt: 10,
    }, /////// state 구역 ////////

    // (2) 데이터 변경 메서드구역:
    mutations: {
        catData(state, pm) {
            console.log("임시 뮤테이트");

            let product = state.goods[pm];
            console.log("결과값:",product.pd1.prdImg);
        },
    },
}); ///////////// 뷰엑스 인스턴스 /////////////
