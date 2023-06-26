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

                <h3 className="contact_headline">A love letter to send your heart</h3>

                <div className="field field_top">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter Mailadresse" required />
                </div>
                
                <div className="field">
                    <label htmlFor="subject">Title:</label>
                    <input type="text" id="subject" placeholder="Tell me what you need to do here" required />
                </div>

                <div className="field field_message">
                    <label htmlFor="text">Message:</label>
                    <textarea type="text" id="text" placeholder="Friends, let’s go, do the write thing!" required></textarea>
                </div>

                <div className="field_bottom">
                    <label className="checkbox_cont">
                        <p>
                            I confirm that I have read the Privacy Policy.
                        </p>
                        <input type="checkbox" id="checkbox" required />
                        <span className="checkmark"></span>
                    </label>
                    <input className="button" type="submit" value="SEND" action="#contact-section" />
                </div>
                
            </form>

        </>
    );

}; //////////////////// EmailSend 컴포넌트 ////////////////////

export default EmailSend;