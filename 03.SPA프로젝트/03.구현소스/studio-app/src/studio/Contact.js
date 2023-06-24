// Contact 페이지 컴포넌트
import React from "react";
import cat_data from "./data/cat";
import Model3dRec from "./modules/Model3dRec";
import EmailSend from "./modules/EmailSend";
import Chat from "./modules/Chat";

const Contact = () => {

    return(
        <>
            {/* <Chat /> */}
            <Model3dRec />
            <EmailSend />
        </>
    );

}; ////////////// Contact /////////////////

export default Contact;