// EmailSend 모듈 - EmailSend.js
import $, { data } from "jquery";
import "../css/emailsned.css";


// I usually do this
// I do things like this, too // I do this sometimes

const email_data = {
    "works": [
        "color works",
        "b/w drawings",
        "printmaking",
        "books",
        "animation",
        "photography",
        "music",
        "political cartoons",
    ],
    "others": [
        "tattoos",
        "football",
        "charitystuff",
    ],
}; ///////////// email_data //////////////

function Services(props) {

    const tit = props.tit;
    const data = props.data;
    
    return (
        <>
            <div className="services">
                <h2 className="services_title">{tit}</h2>
                <div className="services_list">
                    {/* map 돌릴영역 */}
                    {
                        data.map((x,i)=>
                            <h3 key={i}>{x}</h3>
                        )
                    }
                </div>
            </div>
        </>
    );
}; /////////////// Services 컴포넌트 /////////////////

const EmailSend = () => {

    return (
        <>
            <Services data={email_data.works} tit="I usually do this" />
            <Services data={email_data.others} tit="I do things like this, too" />

            {/* form 태그 */}
            <form className="contact" method="post" action="process.php">
            </form>

        </>
    );

}; //////////////////// EmailSend 컴포넌트 ////////////////////

export default EmailSend;