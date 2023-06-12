// Marquee 모듈 - Marquee.js
import $ from "jquery";
// import "../css/welcome.css";


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

        $(window).on("resize",marqueeFn)

        // 로드
        marqueeFn();

    })
}

const Marquee = (props) => {
    
    return (
        <>
            <div className="marquee dynamic_font">
                {/* 흘러가는 글자 요소들 셋팅 */}
                {
                    props.data.map((v,i)=>
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
            {jqFn()}
        </>
    );
}

export default Marquee;