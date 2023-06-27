// Additional 모듈 - Additional.js
import $ from "jquery";
import "../css/additional.css";

const jqFn = () => {
    $(()=>{

    }); ////////// jQB /////////////////
}; /////////////// jqFn ////////////////////////


const Additional = () => {
    
    return (
        <>
            {/* 화이트버전 */}
            <div className="typo-animation typo-animation-light">
                <div className="typo-animation_wrapper">

                    {/* SVG 요소 */}
                    <div className="typo_box stretched_text">
                        <p>D</p>
                        <p>S</p>
                        <p>H</p>
                        <p>R</p>
                        <p>I</p>
                        <p>G</p>
                    </div>
                    
                    <div className="typo-animation_content">
                        {/* 텍스트영역 */}
                        <div className="typo-animation_text">
                            <h2>haltungsnote: brotal gut.</h2>
                            <p>nicht jeder will, dass man eine hat. denn manchmal ist sowas wie haltung echt anstrengend. und zwar in alle richtungen. sie nimmt raum ein und stört. vor allem diejenigen, die den dienstleister suchen, der einfach macht und keine fragen stellt. dabei sieht es ja so aus: die meisten, die nicht wollen, dass man sowas wie haltung hat, mögen es einfach nicht mit der eigenen konfrontiert zu werden. oder vielleicht mögen sie es auch nicht, dass menschen dienstleister sind und dabei trotzdem aufrecht stehen oder sogar gehen. voll schade und definitiv nix für uns. studio brot für die welt - und für mehr haltung im werbergame.</p>
                        </div>
                        {/* 스티커영역 */}
                        <div className="typo-animation_image-wrapper">
                            <img className="typo-animation_image" src="./images/emoji_1.svg" alt="움직이는 스티커" />
                            <img className="typo-animation_image" src="./images/emoji_1.svg" alt="움직이는 스티커" />
                            <img className="typo-animation_image" src="./images/emoji_1.svg" alt="움직이는 스티커" />
                        </div>
                    </div>
                </div>
            </div>
            
            
            {/* 블랙버전 */}
            <div className="typo-animation">
                <div className="typo-animation_wrapper">
                    {/* SVG 요소 */}

                    {/* 내용 */}
                    <div className="typo-animation_content">    
                        {/* 스티커영역 */}
                        <div className="typo-animation_image-wrapper">
                            <img className="typo-animation_image rimg" src="./images/emoji_2.svg" alt="움직이는 스티커" />
                            <img className="typo-animation_image rimg" src="./images/emoji_2.svg" alt="움직이는 스티커" />
                            <img className="typo-animation_image rimg" src="./images/emoji_2.svg" alt="움직이는 스티커" />
                        </div>
                        {/* 텍스트영역 */}
                        <div className="typo-animation_text">
                            <h2>haltungsnote: brotal gut.</h2>
                            <p>nicht jeder will, dass man eine hat. denn manchmal ist sowas wie haltung echt anstrengend. und zwar in alle richtungen. sie nimmt raum ein und stört. vor allem diejenigen, die den dienstleister suchen, der einfach macht und keine fragen stellt. dabei sieht es ja so aus: die meisten, die nicht wollen, dass man sowas wie haltung hat, mögen es einfach nicht mit der eigenen konfrontiert zu werden. oder vielleicht mögen sie es auch nicht, dass menschen dienstleister sind und dabei trotzdem aufrecht stehen oder sogar gehen. voll schade und definitiv nix für uns. studio brot für die welt - und für mehr haltung im werbergame.</p>
                        </div>
                    </div>
                </div>
            </div>
            {jqFn()}
        </>
    );
}

export default Additional;