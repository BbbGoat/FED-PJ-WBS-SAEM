// Info 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";
import $ from "jquery";

const jqFn = () => {
    $(()=>{

    }); ///////// jQB //////////////////
} //////////////// jqFn //////////////////////

const Info = () => {

    return(
        <>
            <h2>Info 페이지</h2>
            {/* <h3>{cat_data.INFO[0].tit}</h3> */}
            {jqFn()}
        </>
    );

}; ////////////// Info /////////////////

export default Info;