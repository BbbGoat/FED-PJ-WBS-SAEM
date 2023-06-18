// Main 페이지 컴포넌트
import React from "react";
// 모듈 불러오기
import Surface from "./modules/Surface";
import Welcome from "./modules/Welcome";
import Btn from "./modules/Btn";
import Vidgroup from "./modules/Vidgroup";
import Ball from "./modules/Ball";
import WorkList from "./modules/WorkList";

const Main = () => {

    return(
        <>
            {/* 메인 최상단 배너 */}
            <Welcome />
            <Surface />

            {/* section1 */}
            <Btn cat={"INFO"} />

            <Vidgroup />
            
            {/* 캔버스 */}
            <Ball />
            
            <Btn cat={"WORK"} />
            <WorkList />
            
            <Btn cat={"CONTACT"} />
        </>
    );

}; ////////////// Main /////////////////

export default Main;