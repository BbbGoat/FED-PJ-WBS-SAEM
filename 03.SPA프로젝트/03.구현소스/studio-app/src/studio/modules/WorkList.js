// WorkList 모듈 - WorkList.js
import $ from "jquery";
import { Link } from "react-router-dom";
import { work_data, featured_data} from "../data/work_data";
import "../css/worklist.css";

const jqFn = () => {
    $(()=>{

    }); ///////// jQB ///////////////
}; ////////////// jqFn /////////////////


const WorkList = () => {
    
    return (
        <>
            {/* 메인 리스트 */}
            <div className="featured-project">

                <Link to="/det" className="featured-project_bottom-row" state={{desc:featured_data.desc, tit:featured_data.tit}}>
                    {/* 이미지영역 */}
                    <img src={featured_data.src} loading="lazy" alt="최신 프로젝트" />

                    {/* 텍스트영역 */}
                    <div className="featured-project_card">
                        <h2>{featured_data.tit}</h2>
                        <p>{featured_data.desc}</p>
                        <div className="button">View</div>
                    </div>
                </Link>

            </div>

            {/* 나머지 리스트 */}
            <div className="project-list">

                {/* 여기부터 map 돌리기 */}
                
                {/* divider는 구분선 역할 */}
                <div className="project_divider"></div>
                {
                    work_data.map((x,i)=>
                        <Link to="/det" className="project_item" key={i} state={{desc:x.desc, tit:x.tit}}>
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
        </>
    );
    
}; //////////////////// WorkList 컴포넌트 ///////////////////////

export default WorkList;