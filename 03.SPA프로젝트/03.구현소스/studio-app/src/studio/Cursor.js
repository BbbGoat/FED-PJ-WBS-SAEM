import React from "react";
import $ from "jquery";
import "./css/cursor.css";

const jqFn = () => {
  $(() => {

    $("body").css({cursor:"none"})
    const cursor = $(".cursor");
    const cursor2 = $(".cursor2");
    
    // 걸어야할 이벤트 ///////////////////
    // mousemove mousedown mouseup mouseenter mouseleave
    
    // 변수
    let posX, posY;
    
    $(document).mousemove(function(e){
        // 재할당
        posX = e.clientX;
        posY = e.clientY;
        
        cursor.css({
            transform: `translate3d(calc(${posX}px - 50%), calc(${posY}px - 50%), 0px)`,
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
