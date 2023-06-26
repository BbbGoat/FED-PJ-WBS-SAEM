// Surface 모듈 - Surface.js
import React from "react";
import $, { event } from "jquery";
import * as TWEEN from '@tweenjs/tween.js'
import "../css/surface.css";

// 로드구역 ///////////////////////////////////
const jqFn = () => {

    $(()=>{
    // SPA PJ 기능구현 JS - surface.js
    
    /**************************************************** 
        백그라운드 영역의 움직이는 물결 구현
    ****************************************************/
    
    let svgElement = document.getElementById('svg');
    // let path, bg;
    let path = document.getElementById('curve');
    let bg = document.getElementById("surface");
    let connected, tweening, tween;
    let mousePos = {}, svgTop, svgWidth;
    
    function init() {
      setSVGTop();
      setSVGWidth();
      addListeners();
      loop();
    }
    
    function setSVGTop() {
      svgTop = svgElement.getBoundingClientRect().top;
    }
    
    function setSVGWidth() {
      svgWidth = window.innerWidth;
    }

    //  svg상단 높이값 업데이트용 함수
    let letval = (x) => {
        return x.getBoundingClientRect().top;
    }
    
    function addListeners() {
        
       let top = letval(svgElement);
       top = letval(svgElement);
       
        window.addEventListener('scroll', function(e){
            // 스크롤시 svg상단 높이값 업데이트
            return top = letval(svgElement);
        })
    
        window.addEventListener('mousemove', function(e) {
            // storing the y position of the mouse - we want the y pos relative to the SVG container so we'll subtract the container top from clientY.
            mousePos.y = e.clientY - top;
            mousePos.x = e.clientX;
            // console.log("마우스!!:",mousePos.y)
        });
        
        window.addEventListener('resize', setSVGTop);
        window.addEventListener('resize', setSVGWidth, updatePath);
        
        
        path.addEventListener('mouseover', function() {
            // if we haven't connected yet and we're not tweening back to center, bgin connection
            if (!connected && !tweening) {
            connected = true;
            // svgElement.style.cursor = 'pointer';
            }
        });

    
    } //////////////// 이벤트 리스너 등록 //////////////
    
    function updateCurve() {
      let y = mousePos.y;
      let x = mousePos.x;
      
      if (x === undefined) {
        return x = svgWidth
      }
    
      // 달라붙기 한계값 설정
      if ((150-y) < -100 || (150-y) > 500) {
        connected = false;
        tweening = true;
        // svgElement.style.cursor = 'default';
        
        snapBack(x,y);
    } else {
        // 수정 버전
         path.setAttribute('d', 'M-10 150C'+(svgWidth/100 * 74)/10+' 150 '+svgWidth/100 *25+' '+y+' '+svgWidth/2+' '+y+'C'+(svgWidth/100 * 74)+' '+y+' '+(svgWidth-100)+' 150 '+svgWidth+' 150V310H-20V150Z');
         bg.setAttribute('d', 'M-10 150C'+(svgWidth/100 * 74)/10+' 150 '+svgWidth/100 *25+' '+y+' '+svgWidth/2+' '+y+'C'+(svgWidth/100 * 74)+' '+y+' '+(svgWidth-100)+' 150 '+svgWidth+' 150V310H-20V150Z');
    
      }
    }

    function snapBack(x,y) {
      tween = new TWEEN.Tween({ y: y, x: x })
        .to({ y: 50, x: 50 }, 1400)
        .easing( TWEEN.Easing.Elastic.Out )
        .onUpdate( function (e) {
          updatePath(e.x, e.y);
          // console.log("끊어진 y값:",e.y)
        }).onComplete(function() {
          tweening = false;
        }).start();
    }
    
    function updatePath(x,y) {
    
      // 수정버전
      path.setAttribute('d', 'M-10 150C'+(svgWidth/100 * 74)/10+' 150 '+svgWidth/100 *25+' '+y+' '+svgWidth/2+' '+y+'C'+(svgWidth/100 * 74)+' '+y+' '+(svgWidth-100)+' 150 '+svgWidth+' 150V310H-20V150Z');
      bg.setAttribute('d', 'M-10 150C'+(svgWidth/100 * 74)/10+' 150 '+svgWidth/100 *25+' '+y+' '+svgWidth/2+' '+y+'C'+(svgWidth/100 * 74)+' '+y+' '+(svgWidth-100)+' 150 '+svgWidth+' 150V310H-20V150Z');
    
    }
    
    function loop(time) {
      if (connected) updateCurve();
      TWEEN.update(time);
      requestAnimationFrame(loop);
    }
    
    
    
    // 리사이즈 이벤트 등록 ////
    window.addEventListener("resize", function(){
        // console.log("업데이트!!!");
        addListeners();
        setSVGWidth();
        updateCurve();
        })
        
    

        
    // 최초호출!
    init();
    // 로드이벤트 발생시 (최초 셋팅)
    window.onload = updatePath(50,50);
    
    // window.onload = init, updateCurve;
    
    

    }); ///////////////////////////////////////////
}


const Surface = () => {

    return(
        <>
            {/* 마우스 오버시 달라붙는 SVG 코드 */}
            <div className="surface_box">
              <svg id="svg" width="1920" height="300" preserveAspectRatio="none">
              <path id="surface" d="M-10 150C142.22222222222223 150 480 50 960 50C1440 50 1777.7777777777778 150 1930 150V310H-20V150Z" fill="white" stroke="white" strokeWidth="20"></path>
              <path id="curve" d="M-10 150C142.22222222222223 150 480 50 960 50C1440 50 1777.7777777777778 150 1930 150V310H-20V150Z" fill="none" stroke="white" strokeWidth="20" />
              </svg>
              {/* 텍스트영역 */}
              <div className="intro_text">
                <p>
                  hello, I'm David Shrigley. I work drawing, painting, sculpture, installation, photography, animation, and print. I publish books, produces music, occasionally designs tattoos and creates all manner of other paraphernalia. I want to provide a unique art, and I want to provide experience experience that all people can access. I have held solo exhibitions in museums around the world, and my work can be seen in famous collections, including the Museum of Modern Art. (New York), Tate Britain (London), and the National Gallery of Denmark (Copenhagen). Art is for everyone and I welcome everything!
                </p>
              </div>
            </div>
            {jqFn()}

        </>
    );

}; ////////////// Surface /////////////////

export default Surface;