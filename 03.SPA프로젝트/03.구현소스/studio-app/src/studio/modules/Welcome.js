// Welcome 모듈 - Welcome.js
import $ from "jquery";
import "../css/welcome.css";

const img_data = [
    {
        "txt":"hello, I am",
        "img":"./images/ballimg-3.webp",
        "alt":"이미지1",
    },
    {
        "txt":"david shrigley",
        "img":"./images/ballimg-6.webp",
        "alt":"이미지2",
    },
    {
        "txt":"an artist with",
        "img":"./images/ballimg-7.webp",
        "alt":"이미지3",
    },
    {
        "txt":"an original world",
        "img":"./images/ballimg-8.webp",
        "alt":"이미지4",
    },
];

const jqFn = () => {
    $(()=>{

        // 대상수집
        const marquee_inner = $(".welcome .marquee_inner");
        const marquee_item = $(".welcome .marquee_item");
        const marquee_h2 = $(".welcome .marquee_item h2");
        let maxWidth;

        // 초기값 셋팅
        // marquee_item.css({
        //     animationPlayState: "running",
        //     opacity:0
        // });
        marquee_inner.css({
            animationPlayState: "running",
        })

        marquee_item.each((idx,ele)=>{
            setTimeout(()=>{
                setTimeout(function(e){
                    $(ele).animate({
                        opacity:1
                    },400)
                }, 20*idx)
            },400)
        })
        

        function marqueeFn() {
            maxWidth = window.innerWidth;
            if (maxWidth >= 960) {
                marquee_item.css({height:"150px"})
                marquee_h2.css({fontSize:"150px"})
            }
            else {
                marquee_item.css({height:"20vw"})
                marquee_h2.css({fontSize:"20vw"})
            }
        }

        $(window).on("resize",marqueeFn)

        // 로드
        marqueeFn();

    })
}

const Welcome = () => {
    return (
        <>
            <div className="welcome">
                <div className="marquee dynamic_font">
                    {/* 흘러가는 글자 요소들 셋팅 */}
                    {
                        img_data.map((v,i)=>
                            <div key={i} className="marquee_inner">
                                    <div className="marquee_item">
                                        <h2>{v.txt}</h2>
                                        <img src={v.img} alt={v.alt} />
                                    </div>
                                    <div className="marquee_item">
                                        <h2>{v.txt}</h2>
                                        <img src={v.img} alt={v.alt} />
                                    </div>
                                    <div className="marquee_item">
                                        <h2>{v.txt}</h2>
                                        <img src={v.img} alt={v.alt} />
                                    </div>
                                    <div className="marquee_item">
                                        <h2>{v.txt}</h2>
                                        <img src={v.img} alt={v.alt} />
                                    </div>
                            </div>
                        ) // map
                    }
                </div>
            </div>
            {jqFn()}
        </>
    );
}

export default Welcome;