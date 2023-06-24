// Chat 모듈 - Chat.js
import $ from "jquery";
import "../css/chat.css";

const ChatFn = (function(){
    const myName = "You";

    // init 함수
    function init() {
        clearInterval(setI);
        $('div.chat:not(.format) ul').html('');

        // 0. 먼저 넣는 오너 텍스트
        const owrMsg = ["Hello",`<img src="./images/chat/pic-0.gif">`,"Are you taking a good look around?","It's not?","Then I'll tell you the big news..."];
        const owrData = {
            "senderName" : "D.SHRAG",
            "message" : owrMsg
        };
        owrResive(owrData);
        
        // enter 키 이벤트
        $(document).on('keydown', 'div.input-div textarea', function(e){
            if(e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();
 
                if (message == "") return;
                else {
                    // 메시지 전송
                    sendMessage(message,owrData);
                    // 입력창 clear
                    clearTextarea();
                }
            }
        });
        $(".chat_button").click(function(e){
            e.preventDefault();
            const message = $(".input_wrap textarea").val();

            // 빈값 방지
            if (message == "") return;
            else {
                // 메시지 전송
                sendMessage(message,owrData);
                // 입력창 clear
                clearTextarea();
            }
        })
    }
 
    // 메세지 태그 생성
    function createMsgTag(LR_className, senderName, message) {
        // 형식 가져오기
        let chatLi = $('div.chat.format ul li').clone();

        
        // 수신인 확인 : 아이콘 분기점!
        // console.log(senderName);
 
        // 값 채우기
        chatLi.addClass(LR_className);
        // chatLi.find('.sender span').html(senderName);
        if (senderName === 'D.SHRAG') {
            chatLi.find('.message').prepend('<img class="minImg" src="./images/favicon.png">');
        }
        chatLi.find('.message span').html(message);
 
        return chatLi;
    }


 
    // 메세지 태그 append
    function appendMsgTag(LR_className, senderName, message) {
        const chatLi = createMsgTag(LR_className, senderName, message);
 
        $('div.chat:not(.format) ul').append(chatLi);
 
        // 스크롤바 아래 고정
        $('div.chat').scrollTop($('div.chat').prop('scrollHeight'));
    }
 
    // 메세지 전송
    function sendMessage(message,owrData) {
        // 서버에 전송하는 코드로 후에 대체
        const guestData = {
            "senderName"    : "You",
            "message"        : message
        };
 
        // 통신하는 기능이 없으므로 여기서 receive
        resive(guestData);
        imgMsg(owrData);
    }
 
    // 메세지 입력박스 내용 지우기
    function clearTextarea() {
        $('div.input-div textarea').val('');
    }
 
    // 메세지 수신
    function resive(guesetData) {
        const LR = (guesetData.senderName != myName)? "left" : "right";
        appendMsgTag(LR, guesetData.senderName, guesetData.message);
    }

    let setI;

    // 오너메세지 수신
    function owrResive(owrData) {

        // console.log(owrData.message);
        
        let msgNum = 0
        // 기본메시지 출력하기
        setI = setInterval(()=>{
            if (msgNum === owrData.message.length) return;
            appendMsgTag("left", owrData.senderName, owrData.message[msgNum]);
            msgNum++
            // console.log("msgNum",msgNum);
        },2000);
        
    } /////////// owrResive 함수 ////////////////////
    
    // 랜덤 이미지데이터 메세지 수신
    function imgMsg(owrData) {

        const imgSrc = ["./images/chat/pic-1.jpg","./images/chat/pic-2.jpg","./images/chat/pic-3.jpg","./images/chat/pic-4.jpg","./images/chat/pic-5.jpg","./images/chat/pic-6.jpg","./images/chat/pic-7.jpg","./images/chat/pic-8.jpg"];
        const msg = ["Shocking true story...","It's a community issue...","PIP PIP","BOOOOOOM","Attention!!!","Awesome"]
        
        // 메시지 객체 최대 개수
        const num = imgSrc.length;
        const msgNum = msg.length;
        // 메시지 객체 랜덤출력용 변수 만들기
        let random = Math.floor(Math.random(num)*num);
        let random2 = Math.floor(Math.random(msgNum)*msgNum);

        // 작품 추천용 랜덤메시지 출력
        setTimeout(()=>{
            appendMsgTag("left", owrData.senderName, `${msg[random2]}`);
        },1500);
        setTimeout(()=>{
            appendMsgTag("left", owrData.senderName, `<img src="${imgSrc[random]}">`);
        },2500);
    }

 
    return {
        'init': init
    };

})(); /////////////////////// ChatFn ///////////////////////
 
// boolean 체크 변수
const jqFn = () => {
    $(()=>{
        
        const chatbx = document.querySelector(".chat_wrap");
        let check = true;
        
        $(window).on("scroll", function(){
            let tgTop = chatbx.getBoundingClientRect().top
            // console.log(tgTop);
            if(tgTop < 1000) {
                if(check) {
                    // 한번만실행
                    check = false;
                    // 호출하기
                    ChatFn.init();
                } // if
            }

    }); ////////// scroll /////////////////////////////

    }); ///////// jQB /////////////
} ///////////// jqFn //////////////////////


const Chat = () => {
    
    return(
        <>
            {/* 웹소켓 기능 제외한 채팅모듈 */}
            <div className="chat_wrap">
                <div className="header">
                    {/* <h3>STIMMEN AUS DEM BACKOFEN</h3> */}
                    {/* <button className="button">Alle Nachrichten</button> */}
                </div>
                <div className="chat scbar">
                    <ul>
                        {/* 동적생성 */}
                    </ul>
                </div>
                <div className="input-div">
                    <div className="input_wrap">
                    <textarea placeholder="Just say anything and play with me."></textarea>
                    <button className="chat_button">
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="currentColor" d="M27 1.25903L22.5849 24.459L17.1887 18.1318L8.84906 30.259V19.1863L10.3208 17.6906L12.283 15.6964M27 1.25903L1 13.9136L12.283 15.6964M27 1.25903L12.283 15.6964" strokeWidth="2" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    </div>
                </div>
            
                {/* 포멧 */}
                <div className="chat format">
                    <ul>
                        <li>
                            <div className="sender">
                                <span></span>
                            </div>
                            <div className="message">
                                <span></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {jqFn()}
        </>
    );
}

export default Chat;