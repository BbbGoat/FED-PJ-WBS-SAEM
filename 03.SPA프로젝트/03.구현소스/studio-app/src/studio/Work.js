// Work 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";
import WorkList from "./modules/WorkList";
import Welcome from "./modules/Welcome";

const Work = () => {

    return(
        <>
            <WorkList />
            <Welcome />
        </>
    );

}; ////////////// Work /////////////////

export default Work;