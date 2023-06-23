// Marquee 모듈 - Marquee.js
import $ from "jquery";


const jqFn = () => {
    $(()=>{


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
                                    <h4>{v.txt}</h4>
                                    <img src={v.img} alt={v.alt} />
                                </div>
                                <div className="marquee_item">
                                    <h4>{v.txt}</h4>
                                    <img src={v.img} alt={v.alt} />
                                </div>
                                <div className="marquee_item">
                                    <h4>{v.txt}</h4>
                                    <img src={v.img} alt={v.alt} />
                                </div>
                                <div className="marquee_item">
                                    <h4>{v.txt}</h4>
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