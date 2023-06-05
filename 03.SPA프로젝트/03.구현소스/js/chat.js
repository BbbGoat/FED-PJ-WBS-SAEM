const Chat = (function(){
    const myName = "You";
 
    // init 함수
    function init() {

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
 
                // 메시지 전송
                sendMessage(message,owrData);
                // 입력창 clear
                clearTextarea();
            }
        });
    }
 
    // 메세지 태그 생성
    function createMsgTag(LR_className, senderName, message) {
        // 형식 가져오기
        let chatLi = $('div.chat.format ul li').clone();

        
        // 수신인 확인 : 아이콘 분기점!
        console.log(senderName);
 
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

    // 오너메세지 수신
    function owrResive(owrData) {

        console.log(owrData.message);
        
        let msgNum = 0
        // 기본메시지 출력하기
        setInterval(()=>{
            if (msgNum === owrData.message.length) return;
            appendMsgTag("left", owrData.senderName, owrData.message[msgNum]);
            msgNum++
            console.log(msgNum)
        },1000);
        
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
})();
 
$(function(){
    Chat.init();
});
