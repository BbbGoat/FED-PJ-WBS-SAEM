// Main 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";

const Main = () => {

    return(
        <>
            <h2>Main 페이지</h2>
            <h3>{cat_data['MAIN'].map((x)=>x.tit)}</h3>
        </>
    );

}; ////////////// Main /////////////////

export default Main;