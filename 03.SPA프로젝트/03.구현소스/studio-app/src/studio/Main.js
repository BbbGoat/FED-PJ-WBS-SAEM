// Main 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";
import Surface from "./modules/Surface";
import Welcome from "./modules/Welcome";

const Main = () => {

    return(
        <>
            <div className="intro_wrap">
                <Welcome />
                <Surface />
            </div>
        </>
    );

}; ////////////// Main /////////////////

export default Main;