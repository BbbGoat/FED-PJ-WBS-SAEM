// Contact 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";

const Contact = () => {

    return(
        <>
            <h2>Contact 페이지</h2>
            <h3>{cat_data.CONTACT[1].tit}</h3>
            {/* <h3>{cat_data.CONTACT.map((x)=>x.tit)}</h3> */}
        </>
    );

}; ////////////// Contact /////////////////

export default Contact;