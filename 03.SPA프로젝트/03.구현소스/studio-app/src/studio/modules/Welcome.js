// Welcome 모듈 - Welcome.js
import $ from "jquery";
import "../css/welcome.css";

const img_data = [
    {
        "txt":"hallo, wir sind",
        "img":"./images/favicon.png",
        "alt":"이미지1",
    },
    {
        "txt":"asdfsadf",
        "img":"./images/favicon.png",
        "alt":"이미지2",
    },
    {
        "txt":"WWWzzxcvvbvgew",
        "img":"./images/favicon.png",
        "alt":"이미지3",
    },
    {
        "txt":"EXTRA-sdklfjwl",
        "img":"./images/favicon.png",
        "alt":"이미지4",
    },
];

const jqFn = () => {
    $(()=>{

        // 대상수집
        const marquee_item = $(".marquee_item");
        const marquee_h2 = $(".marquee_item h2");
        let maxWidth;

        function marqueeFn() {
            maxWidth = window.innerWidth;
            if (maxWidth > 480) {
                marquee_item.css({height:"120px"})
                marquee_h2.css({fontSize:"120px"})
            }
            else {
                marquee_item.css({height:"20vw"})
                marquee_h2.css({fontSize:"20vw"})
            }
        }

        // 리사이즈
        window.onresize = function(e){
            marqueeFn();
        }

        // 로드
        window.onload = marqueeFn();

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