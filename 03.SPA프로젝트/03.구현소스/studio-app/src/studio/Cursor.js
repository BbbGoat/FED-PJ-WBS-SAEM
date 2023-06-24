import React from "react";
import $ from "jquery";
import "./css/cursor.css";

const jqFn = () => {
  $(() => {

    const cursor = $(".cursor");
    
    // 걸어야할 이벤트 ///////////////////
    // mousemove mousedown mouseup mouseenter mouseleave
    
    // 변수
    let posX, posY;
    
    $(window).mousemove(function(e){
        console.log(e.clientX);
        // 재할당
        posX = e.clientX;
        posY = e.clientY;

        cursor.css({
            // top : posY,
            // left: posX,
            transform: `translate3d(calc(${posX}px - 50%), calc(${posY}px - 50%), 0px)`,
            // transform: translate3d(calc(628px - 50%), calc(282px - 50%), 0px),
            
        })


    })
  });
};
  
const Cursor = () => {
  return (
    <>
        <div className="cursor__custom">
            <div className="cursor cursoract"></div>
            <div className="cursor2 cursorinteractive"></div>
        </div>
        {jqFn()}
    </>
  );
};

export default Cursor;
