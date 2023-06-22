// Vidgroup 모듈 - Vidgroup.js
import $ from "jquery";
import "../css/vidgroup.css";

const jqFn = () => {
    $(() => {

    }); /////////////////// jQB ////////////////////////
}

const Vidgroup = (props) => {
    return (
        <>
            <div className="vidgroup">
                <div className="vidgroup_inner">
                    {/* Video 영역 */}
                    <figure className="video_area">
                        <video autoPlay={true} className="videosrc" loop={true} muted={true} playsInline={true} poster="">
                            <source src="https://www.studiobrot.de/media/pages/wie/0fd2b66c03-1673622947/1-derteig-small.mp4" type="video/mp4" />
                        </video>
                    </figure>
                    {/* text 영역 */}
                    <div className="vidtxt_area">
                        <span className="vidtxt_number">1</span>
                        <span className="vidtxt_title">das brot</span>
                    </div>
                </div>
                <div className="vidgroup_inner">
                    {/* Video 영역 */}
                    <figure className="video_area">
                        <video autoPlay={true} className="videosrc" loop={true} muted={true} playsInline={true} poster="">
                            <source src="https://www.studiobrot.de/media/pages/wie/19383b2f5f-1673622957/2-dasbacken-small.mp4" type="video/mp4" />
                        </video>
                    </figure>
                    {/* text 영역 */}
                    <div className="vidtxt_area">
                        <span className="vidtxt_number">2</span>
                        <span className="vidtxt_title">das brot</span>
                    </div>
                </div>
                <div className="vidgroup_inner">
                    {/* Video 영역 */}
                    <figure className="video_area">
                        <video autoPlay={true} className="videosrc" loop={true} muted={true} playsInline={true} poster="">
                            <source src="https://www.studiobrot.de/media/pages/wie/b5b0865b86-1673622912/3-dasbrot-small.mp4" type="video/mp4" />
                        </video>
                    </figure>
                    {/* text 영역 */}
                    <div className="vidtxt_area">
                        <span className="vidtxt_number">3</span>
                        <span className="vidtxt_title">das brot</span>
                    </div>
                </div>
            </div>
            {jqFn()}
        </>
    );
    
}

export default Vidgroup;