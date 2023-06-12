// Main 페이지 컴포넌트
import React from "react";
// 데이터 불러오기
import cat_data from "./data/cat";
// 모듈 불러오기
import Surface from "./modules/Surface";
import Welcome from "./modules/Welcome";
import Btn from "./modules/Btn";

const Main = () => {

    return(
        <>
            {/* section1 */}
            <Welcome />
            <Surface />

            {/* section2 */}
            <Btn cat={"INFO"} />
            <Btn cat={"WORK"} />
        </>
    );

}; ////////////// Main /////////////////

export default Main;