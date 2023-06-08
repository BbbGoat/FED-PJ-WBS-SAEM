// 메인 레이아웃 컴포넌트
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";

/********************************************************* 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    1. <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명">과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*********************************************************/

const Layout = () => {

    return (
        <>
            {/* 1. 상단영역 */}
            <header className="top">
                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <Link to="/in">INFO</Link>
                    <Link to="/wo">WORK</Link>
                    <Link to="/ct">CONTACT</Link>
                </nav>
                {/* 모바일 파트 */}
                <button className="button button_large">
                    <span className="button_init">Menu</span>
                    <span className="button_active">Close</span>
                </button>
                <div className="menu_open">
                    <div className="menu_main">
                        <Link to="/in" className="button button_large">Info</Link>
                        <Link to="/wo" className="button button_large">Work</Link>
                        <Link to="/ct" className="button button_large">Contact</Link>
                    </div>
                </div>
                <ul className="menu_secondary">
                    <li><a href="#" target="_blank">Instagram</a></li>
                    <li><a href="#" target="_blank">Tictok</a></li>
                    <li><a href="#" target="_blank">Youtube</a></li>
                </ul>

                {/* 로고 파트 */}
                <Link to="/" className="logo">
                    <img src="./images/menu-small.gif" />
                </Link>

            </header>
            {/* 2. 메인영역 */}
            <main className="cont">
                {/* 출력파트 : 각 페이지의 컴포넌트가 출력됨 */}
                <Outlet />
            </main>
            {/* 3.하단영역 */}
            <footer className="info">
                All Site Content © &amp; TM DC, unless otherwise noted here.
                <br /> 
                All rights reserved. 
            </footer>
        </>
    );
  
}; /////////////////////// Layout 컴포넌트 //////////////////////////

export default Layout;