import React from "react";
import $ from "jquery";
import "./css/cursor.css";

const jqFn = () => {
  $(() => {

    // 커서 초기화!!! //////////////////
    // $("html, a, textarea, label, input").css({cursor:"none"});

    const isMobile = () => {
        try {
          document.createEvent("TouchEvent");
          return true;
        } catch (e) {
          return false;
        }
    };
    
    if (isMobile() === true) {
        console.log("모바일상태");
        return;
    }

    
    const cursor = $(".cursor");
    const cursor2 = $(".cursor2");
    
    // 변수
    let posX, posY;
    
    $(document).mousemove(function(e){
        // 재할당
        posX = e.clientX;
        posY = e.clientY;

        cursor.addClass("curinit");
        
        cursor.css({
            transform: `translate3d(calc(${posX}px - 50%), calc(${posY}px - 50%), 0px)`,
        })
        cursor2.css({
            top: `${posY}px`,
            left: `${posX}px`,
        })
    });
    $(document).mouseup(function(e){
        // console.log("떼기!");
        cursor.removeClass("cursoract");
        cursor2.removeClass("cursorinteractive");
    });
    $(document).mousedown(function(e){
        // console.log("누르기!");
        cursor.addClass("cursoract");
        cursor2.addClass("cursorinteractive");
    });
    $('a').mouseenter(function(e){
        // console.log("엔터야");
        cursor2.addClass("cursorinnerhover");
    });
    $('a').mouseleave(function(e){
        cursor2.removeClass("cursorinnerhover");
    })
    

  });
};
  
const Cursor = () => {
  return (
    <>
        <div className="cursor__custom">
            <div className="cursor"></div>
            <div className="cursor2"></div>
        </div>
        {jqFn()}
    </>
  );
};

export default Cursor;
