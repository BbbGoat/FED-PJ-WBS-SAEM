// Work 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";

const Work = () => {

    return(
        <>
            <h2>Work 페이지</h2>
            <h3>{cat_data.WORK[0].tit}</h3>
            {/* <h3>{cat_data.WORK.map((x)=>x.tit)}</h3> */}
        </>
    );

}; ////////////// Work /////////////////

export default Work;