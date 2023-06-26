// 메인 레이아웃 컴포넌트
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Transition from "./Transition";
import Cursor from "./Cursor";
// import "./modules/Gnb.js";
import { Gnb, GnbMob } from "./modules/Gnb";
import "./css/layout.css";
import Logo from "./modules/Logo";

/********************************************************* 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    1. <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명">과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*********************************************************/

const Layout = () => {
    
    // 랜덤수 출력용
    const [num, setNum] = useState(0);
    function randomNumberInRange(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;}
    const handleClick = () => {setNum(randomNumberInRange(0, 4));};

    return (
        <>
            <Cursor />
            <div className="cover"></div>


            {/* 1. 상단영역 */}
            <header className="top" onClick={handleClick}>
                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <Gnb cat={"INFO"}/>
                    <Gnb cat={"WORK"}/>
                    <Gnb cat={"CONTACT"}/>
                </nav>
                {/* 모바일 파트 */}
                <button className="button button_large">
                    <span className="button_init">Menu</span>
                    <span className="button_active">Close</span>
                </button>
                <div className="menu">
                    <div className="menu_main">
                        <GnbMob cat={"INFO"} />
                        <GnbMob cat={"WORK"} />
                        <GnbMob cat={"CONTACT"} />
                    </div>
                    <ul className="menu_secondary">
                        <li><a href="https://www.instagram.com/DavidShrigley/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.tiktok.com/@d.shrig?lang=en" target="_blank">Tictok</a></li>
                        <li><a href="https://davidshrigley.com/" target="_blank">Homepage</a></li>
                    </ul>
                </div>

                {/* 로고 파트 */}
                <Logo />

            </header>


            {/* 2. 메인영역 */}
            <main className="cont">
                {/* 출력파트 : 각 페이지의 컴포넌트가 출력됨 */}
                <Outlet />
            </main>


            {/* 3.하단영역 */}
            <footer className="footer">
                <div className="footer_information">
                    <div className="footer_contact">
                        <a target="_blank" href="mailto:eat.it@studiobrot.de">info@davidshrigley.com</a>
                        <a target="_blank" href="tel:+49 (0) 711 500 963 36">+49 (0) 711 500 963 36</a>
                        <p>Tullinsgade 3</p>
                        <p>Copenhagen Denmark</p>
                    </div>
                    <img className="back-to-top" src="https://www.studiobrot.de/media/pages/footer/18dea29923-1671746882/studiobrot-brot-menu.gif" sizes="(max-width: 800px) 360px,(min-width: 200px) 160px, 360px" />
                </div>
                <ul className="sns_navigation">
                    <li>
                        <a target="_blank" href="https://www.instagram.com/DavidShrigley/">Instagram</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.tiktok.com/@d.shrig?lang=en">Ticktok</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://davidshrigley.com/">Homepage</a>
                    </li>
                </ul>
            </footer>

            <Transition num={num} />
        </>
    );
  
}; /////////////////////// Layout 컴포넌트 //////////////////////////

export default Layout;