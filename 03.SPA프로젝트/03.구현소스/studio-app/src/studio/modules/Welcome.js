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