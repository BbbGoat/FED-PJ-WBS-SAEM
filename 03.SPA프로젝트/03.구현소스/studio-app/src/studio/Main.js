// Main 페이지 컴포넌트
import React from "react";
// 모듈 불러오기
import Surface from "./modules/Surface";
import Welcome from "./modules/Welcome";
import Btn from "./modules/Btn";
import Vidgroup from "./modules/Vidgroup";
import Ball from "./modules/Ball";
import WorkList from "./modules/WorkList";
import EmailSend from "./modules/EmailSend";
import Chat from "./modules/Chat";

const Main = () => {
    
    return(
        <>
            {/* 메인 최상단 배너 */}
            <Welcome />
            <Surface />

            {/* Info section */}
            <Btn cat={"INFO"} />
            <Vidgroup />
            
            {/* Work section */}
            <Btn cat={"WORK"} />
            <WorkList />
            
            {/* Contact section */}
            <Btn cat={"CONTACT"} />
            <Chat />
            <Ball />
            <EmailSend />
        </>
    );

}; ////////////// Main /////////////////

export default Main;