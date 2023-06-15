// Info 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";
import $ from "jquery";

// 임시로 넣기
import { createRoot } from 'react-dom/client'
import Lookat from './modules/Lookat'


const jqFn = () => {
    $(()=>{

    }); ///////// jQB //////////////////
} //////////////// jqFn //////////////////////

const Info = () => {

    return(
        <>
            <h2>Info 페이지</h2>
            <Lookat />
            {jqFn()}
        </>
    );

}; ////////////// Info /////////////////

export default Info;