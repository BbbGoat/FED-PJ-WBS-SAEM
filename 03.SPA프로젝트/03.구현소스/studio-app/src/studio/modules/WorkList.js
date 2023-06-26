// WorkList 모듈 - WorkList.js
import $ from "jquery";
import { Link } from "react-router-dom";
import { work_data, featured_data} from "../data/work_data";
import Gooey from "./Gooey";
import "../css/worklist.css";

const jqFn = () => {
    $(()=>{
        // 구분선 요소 추가
        $(".project_item").before(`<div class="project_divider"></div>`);
        
    }); ///////// jQB ///////////////
}; ////////////// jqFn /////////////////



const WorkList = () => {
    
    const data = featured_data;
    
    return (
        <>

            {/* 메인 리스트 */}
            <div className="featured-project">
                
                <Link to="/wo/det" className="featured-project_bottom-row"
                 state={{ src:data.src, desc:data.desc, tit:data.tit, detail:data.detail, sub:data.sub }}>
                    {/* 이미지영역 */}
                    <img src={data.src} loading="lazy" alt="최신 프로젝트" />

                    {/* 텍스트영역 */}
                    <div className="featured-project_card">
                        <h2>{data.tit}</h2>
                        <p>{data.desc}</p>
                        <div className="button">View</div>
                    </div>
                </Link>

            </div>

            
            <Gooey />


            {/* 나머지 리스트 */}
            <div className="project-list">

                {/* 여기부터 map 돌리기 */}
                {
                    work_data.map((x,i)=>
                        <Link to="/wo/det" className="project_item" key={i}
                         state={{
                            src:x.src,
                            desc:x.desc, 
                            tit:x.tit,
                            detail:x.detail,
                            sub:x.sub,
                            }}>

                            {/* 이미지영역 */}
                            <img src={x.src} alt="프로젝트" />
        
                            {/* 텍스트영역 */}
                            <h2 className="project_title">
                                <span className="project_title-ele first">{x.tit}</span>
                                <span className="project_title-ele second">{x.tit}</span>
                            </h2>
                            <p className="project_desc">{x.desc}</p>
                            <div className="button">View</div>
                        </Link>
                    ) /////////// map //////////////
                }

                {/* divider는 구분선 역할 */}
                <div className="project_divider"></div>

            </div>

            {jqFn()}
        </>
    );
    
}; //////////////////// WorkList 컴포넌트 ///////////////////////

export default WorkList;