// Main 페이지 컴포넌트
import React from "react";
// 모듈 불러오기
import Surface from "./modules/Surface";
import Welcome from "./modules/Welcome";
import Btn from "./modules/Btn";

const Main = () => {

    return(
        <>
            {/* 메인 최상단 배너 */}
            <Welcome />
            <Surface />

            {/* section1 */}
            <Btn cat={"INFO"} />
            <div className="process-teaser-group">
                <div className="process-teaser">
                    {/* Video 영역 */}
                    <figure className="video">
                        <video autoPlay={true} className="videosrc" loop={true} muted={true} playsInline={true} poster="" preload="metadata">
                            <source src="https://www.studiobrot.de/media/pages/wie/0fd2b66c03-1673622947/1-derteig-small.mp4" type="video/mp4" />
                        </video>
                    </figure>
                    {/* text 영역 */}
                    <div className="process-teaser__overlay">
                        <span className="process-teaser__number">1</span>
                        <span className="process-teaser__title">das brot</span>
                    </div>
                </div>
                <div className="process-teaser">
                    {/* Video 영역 */}
                    <figure className="video">
                        <video autoPlay={true} className="videosrc" loop={true} muted={true} playsInline={true} poster="" preload="metadata">
                            <source src="https://www.studiobrot.de/media/pages/wie/19383b2f5f-1673622957/2-dasbacken-small.mp4" type="video/mp4" />
                        </video>
                    </figure>
                    {/* text 영역 */}
                    <div className="process-teaser__overlay">
                        <span className="process-teaser__number">2</span>
                        <span className="process-teaser__title">das brot</span>
                    </div>
                </div>
                <div className="process-teaser">
                    {/* Video 영역 */}
                    <figure className="video">
                        <video autoPlay={true} className="videosrc" loop={true} muted={true} playsInline={true} poster="" preload="metadata">
                            <source src="https://www.studiobrot.de/media/pages/wie/b5b0865b86-1673622912/3-dasbrot-small.mp4" type="video/mp4" />
                        </video>
                    </figure>
                    {/* text 영역 */}
                    <div className="process-teaser__overlay">
                        <span className="process-teaser__number">3</span>
                        <span className="process-teaser__title">das brot</span>
                    </div>
                </div>

            </div>
            
            
            <Btn cat={"WORK"} />
            <Btn cat={"CONTACT"} />
        </>
    );

}; ////////////// Main /////////////////

export default Main;