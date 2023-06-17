// Horizontal 모듈 Horizontal.js
import React from "react";
import "../css/horizontal.css"


const info_data = [
    {
        "idx":"1",
        "vidsrc":"https://www.studiobrot.de/media/pages/wie/0fd2b66c03-1673622947/1-derteig-small.mp4",
        "tit":"Daas Brat",
        "desc":"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq ",
    },
    {
        "idx":"2",
        "vidsrc":"https://www.studiobrot.de/media/pages/wie/19383b2f5f-1673622957/2-dasbacken-small.mp4",
        "tit":"Daas Brat",
        "desc":"asdf. ",
    },
    {
        "idx":"3",
        "vidsrc":"https://www.studiobrot.de/media/pages/wie/b5b0865b86-1673622912/3-dasbrot-small.mp4",
        "tit":"Daas Brat",
        "desc":"er starter kann aus einem gemeinsamen arbeitsmeeting aka kick-off bestehen. ",
    },
];


const Horizontal = () => {
    return (
        <>
            <div className="horizontal_box">
                <div className="horizontal_inner">

                    {/* 반복 섹션 */}
                    {
                        info_data.map((x,i)=>
                            <div className="horizontal_section" key={i}>
                                <div className="content_img">
                                    {/* Video 영역 */}
                                    <figure className="video_area">
                                        <video autoPlay={true} className="videosrc" loop={true} muted={true} playsInline={true} poster="">
                                            <source src={x.vidsrc} type="video/mp4" />
                                        </video>
                                    </figure>
                                    {/* text 영역 */}
                                    <div className="vidtxt_area">
                                        <span className="vidtxt_number">{x.idx}</span>
                                    </div>
                                </div>
                                <div className="content_desc">
                                    <h2>{x.tit}</h2>
                                    <p>{x.desc}</p>
                                </div>

                            </div>
                        ) //////// map ////////////
                    }

                </div>
            </div>
        </>
    );
}

export default Horizontal;