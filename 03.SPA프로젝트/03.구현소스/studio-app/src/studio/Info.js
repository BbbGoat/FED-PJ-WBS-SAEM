// Info 페이지 컴포넌트
import React from "react";
import $ from "jquery";
import Horizontal from "./modules/Horizontal";
import Additional from "./modules/Additional";

const jqFn = () => {
    $(()=>{

    }); ///////// jQB //////////////////
} //////////////// jqFn //////////////////////


const Info = () => {

    return(
        <>
            <Horizontal />
            <Additional />
            {jqFn()}
        </>
    );

}; ////////////// Info /////////////////

export default Info;