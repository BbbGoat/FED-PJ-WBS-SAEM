// 상세페이지 컴포넌트 - Detial.js
import $ from "jquery";
import { useLocation } from "react-router-dom";

// 라우터 파라미터값 받아서 데이터 처리!

const jqFn = () => {
    $(()=>{

        
    }); //////////// jQB ///////////////////
}; ///////////////// jqFn 함수 ///////////////////

function Detail(props) {

    // 라우터 전달값을 받기위한 useLocation 생성하기!
    const loc = useLocation();
    // 보낸 속성명을 변수에 할당하기!
    // state.속성명 : 내가 라우터를 통해 보낸 속성값 받기
    // 1. 캐릭터이름
    const tit = loc.state.tit;
    const desc = loc.state.desc;
    
    return(
        <>
            <h2>{tit}</h2>
            <div className="desc">
                {desc}
            </div>
            <div className="facts">
                <h3>이미지 들어갈 부분!! work.js에 이미지 데이터 추가하기</h3>
            </div>

            {jqFn()}
        </>
    );
    
}; ///////////////// Detail //////////////////////

export default Detail;