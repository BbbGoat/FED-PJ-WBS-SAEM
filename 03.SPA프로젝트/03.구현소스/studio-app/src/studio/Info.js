// Info 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";

const Info = () => {

    return(
        <>
            <h2>Info 페이지</h2>
            <h3>{cat_data['INFO'].map((x)=>x.tit)}</h3>
        </>
    );

}; ////////////// Info /////////////////

export default Info;