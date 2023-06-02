const Chat = (function(){
    const myName = "You";
 
    // init 함수
    function init() {

        // 0. 먼저 넣는 오너 텍스트
        const owrMsg = ["1번텍스트입니다","2번텍스트입니다","3번텍스트입니다"];
        owrResive(owrMsg);
        
        // enter 키 이벤트
        $(document).on('keydown', 'div.input-div textarea', function(e){
            if(e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();
 
                // 메시지 전송
                sendMessage(message);
                // 입력창 clear
                clearTextarea();
            }
        });
    }
 
    // 메세지 태그 생성
    function createMsgTag(LR_className, senderName, message) {
        // 형식 가져오기
        let chatLi = $('div.chat.format ul li').clone();
 
        // 값 채우기
        chatLi.addClass(LR_className);
        chatLi.find('.sender span').text(senderName);
        chatLi.find('.message span').text(message);
 
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
    function sendMessage(message) {
        // 서버에 전송하는 코드로 후에 대체
        const data = {
            "senderName"    : "You",
            "message"        : message
        };
 
        // 통신하는 기능이 없으므로 여기서 receive
        resive(data);
    }
 
    // 메세지 입력박스 내용 지우기
    function clearTextarea() {
        $('div.input-div textarea').val('');
    }
 
    // 메세지 수신
    function resive(data) {
        const LR = (data.senderName != myName)? "left" : "right";
        appendMsgTag(LR, data.senderName, data.message);
    }

    // 오너메세지 수신
    function owrResive(message) {
        const data = {
            "senderName" : "D.SHRAG",
            "message" : message
        };

        console.log(message);
        
        let msgNum = 0
        // 기본메시지 출력하기
        setInterval(()=>{
            if (msgNum === message.length) return;
            appendMsgTag("left", data.senderName, message[msgNum]);
            msgNum++
            console.log(msgNum)
        },1000);
        
        
        
        // 엔터시 출력하는 곳으로 이동시켜야함!!!!!! ////////////
        
        const imgSrc = ["./images/pic-1.jpg","./images/pic-2.jpg","./images/pic-3.jpg,","./images/pic-4.jpg","./images/pic-5.jpg"];
        
        // 메시지 객체 최대 개수
        let num = imgSrc.length;
        // 메시지 객체 랜덤출력용 변수 만들기
        let random = Math.floor(Math.random(num)*num);

        // 작품 추천용 랜덤메시지 출력
        setTimeout(()=>{
            console.log("엔터시 출력!!");
            appendMsgTag("left", data.senderName, imgSrc[random]);
        },3000);

        

    } /////////// owrResive 함수 ////////////////////
 
    return {
        'init': init
    };
})();
 
$(function(){
    Chat.init();
});
