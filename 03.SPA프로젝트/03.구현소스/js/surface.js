// SPA PJ 기능구현 JS - surface.js

/**************************************************** 
    백그라운드 영역의 움직이는 물결 구현
****************************************************/

let svgElemnt, path, bg;
let connected, tweening, tween;
let mousePos = {}, svgTop;

function init() {
  svgElement = document.getElementById('svg');
  path = document.getElementById('curve');
  bg = document.getElementById("surface");
  setSVGTop();
  addListeners();
  loop();
}

function setSVGTop() {
  svgTop = svgElement.getBoundingClientRect().top;
}

// function setSVGLeft() {
//   svgLeft = svgElement.getBoundingClientRect().left;
// }

function addListeners() {
  window.addEventListener('mousemove', function(e) {
    // storing the y position of the mouse - we want the y pos relative to the SVG container so we'll subtract the container top from clientY.
  	mousePos.y = e.clientY - svgTop;
  	mousePos.x = e.clientX;
	});
  
  window.addEventListener('resize', setSVGTop);
  
  path.addEventListener('mouseover', function() {
    // if we haven't connected yet and we're not tweening back to center, bgin connection
    if (!connected && !tweening) {
      connected = true;
      svgElement.style.cursor = 'pointer';
    }
	});

}

function updateCurve() {
  let y = mousePos.y;
  let x = mousePos.x;
  y = mousePos.y;
  x = mousePos.x;
  console.log(x);
  // 달라붙기 한계값 설정
  if (Math.abs(150-y) > 400) {
    connected = false;
    tweening = true;
    svgElement.style.cursor = 'default';
    snapBack(x,y);
  } else {
    //  path.setAttribute('d', 'M-10 150C142 150 480 -266 960 -266C1440 -266 1777 150 1930 150V310H-20V150Z');

    // 수정 버전
     path.setAttribute('d', 'M-10 150C142 150 480 '+y+' 960 '+y+'C1440 '+y+' 1777 150 1930 150V310H-20V150Z');
     bg.setAttribute('d', 'M-10 150C142 150 480 '+y+' 960 '+y+'C1440 '+y+' 1777 150 1930 150V310H-20V150Z');
    // 1번 버전
    // path.setAttribute('d', 'M-10,150 Q1020,'+y+' 1930,150');
  }
}

function snapBack(x,y) {
  tween = new TWEEN.Tween({ y: y, x: x })
    .to({ y: 50, x:50 }, 1400)
    .easing( TWEEN.Easing.Elastic.Out )
    .onUpdate( function (e) {
      updatePath(e.x, e.y);
      console.log("끊어진 y값:",e.y)
    }).onComplete(function() {
      tweening = false;
    }).start();
}

function updatePath(x,y) {
    
  // update SVG path control point

  // path.setAttribute('d', 'M-10 150C142.22222222222223 150 480 50 960 50C1440 50 1777.7777777777778 150 1930 150V310H-20V150Z');
  
  // 수정버전
  path.setAttribute('d', 'M-10 150C142 150 480 '+y+' 960 '+y+'C1440 '+y+' 1777 150 1930 150V310H-20V150Z');
  bg.setAttribute('d', 'M-10 150C142 150 480 '+y+' 960 '+y+'C1440 '+y+' 1777 150 1930 150V310H-20V150Z');
  // 1번버전
  // path.setAttribute('d', 'M-10,150 Q1020,'+y+' 1930,150');
  console.log("x 값:",x,"y 값:",y);
}

function loop(time) {
  if (connected) updateCurve();
  TWEEN.update(time);
  requestAnimationFrame(loop);
}

window.onload = init;




