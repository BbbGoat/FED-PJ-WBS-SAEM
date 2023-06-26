// Detail 페이지 컴포넌트 - Detial.js
import $ from "jquery";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/detail.css";


/******************************************** 
    라우터 파라미터값 받아서 데이터 처리!
********************************************/

function Detail() {

    // 라우터 전달값을 받기위한 useLocation 생성하기!
    const loc = useLocation();

    // 보낸 속성명을 변수에 할당하기!
    // state.속성명 : 내가 라우터를 통해 보낸 속성값 받기
    const src = loc.state.src;
    // const tit = loc.state.tit;
    // const desc = loc.state.desc;
    const detail = loc.state.detail;
    const imgsrc = loc.state.sub;

    const navigate = useNavigate();

    return(
        <>
             
            {/* 디테일에서만 들어가는 헤더 */}
            <div className="detail_header">
                <button className="project-back-button back-button button button--light button_large" onClick={()=>{navigate(-1);}}>Back</button>
            </div>

            {/* 배경색상 바꾸기 */}
            <div className="project-background-cover"></div>
            
            {/* 이미지란 */}
            <img src={src} className="project_mainban" alt="메인이미지" />
            
            {/* 텍스트란 */}
            <div className="project_txtbox">
                <section className="grid">
                    <div className="column">
                        <p>{detail}</p>
                    </div>
                </section>

                {/* 상세이미지란 */}
                {
                    imgsrc.map((x,i)=>
                        <section key={i}>
                            <div className="column">
                                <img src={x} alt="상세이미지" />
                            </div>
                        </section>
                    )
                }                

            </div>            
        </>
    );
    
}; ///////////////// Detail //////////////////////

export default Detail;