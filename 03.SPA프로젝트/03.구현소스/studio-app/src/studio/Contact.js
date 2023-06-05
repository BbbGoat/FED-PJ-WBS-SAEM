// Contact 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";

// map으로 특정 순번의 키값 출력하는법
function 예시함수(num){
    return cat_data.CONTACT.map((x,i)=>x.tit)[num]
}

const Contact = () => {

    return(
        <>
            <h2>Contact 페이지</h2>
            {/* <h3>{cat_data.CONTACT[1].tit}</h3> */}
            <h3>{예시함수(1)}</h3>
            {/* <h3>{cat_data.CONTACT.map((x)=>x.tit)}</h3> */}
        </>
    );

}; ////////////// Contact /////////////////

export default Contact;