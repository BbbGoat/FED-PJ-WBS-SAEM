// SPA PJ 기능구현 JS - surface.js

/**************************************************** 
    백그라운드 영역의 움직이는 물결 구현
****************************************************/

let svgElemnt, path;
let connected, tweening, tween;
let mousePos = {}, svgTop;

function init() {
  svgElement = document.getElementById('svg');
  path = document.getElementById('curve');
  setSVGTop();
  addListeners();
  loop();
}

function setSVGTop() {
  svgTop = svgElement.getBoundingClientRect().top;
}

function addListeners() {
  window.addEventListener('mousemove', function(e) {
    // storing the y position of the mouse - we want the y pos relative to the SVG container so we'll subtract the container top from clientY.
  	mousePos.y = e.clientY - svgTop;
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
  var y = mousePos.y;
  y = mousePos.y - (150-mousePos.y)*1.1;
  if (Math.abs(150-y) > 100) {
    connected = false;
    tweening = true;
    svgElement.style.cursor = 'default';
    snapBack(y);
  } else {
    // path.setAttribute('d', 'M-10 150C142.22222222222223 150 480 50 960 50C1440 50 1777.7777777777778 150 1930 150V310H-20V150Z');
    path.setAttribute('d', 'M10,150 Q200,'+y+' 390,150');
  }
}

function snapBack(y) {
  tween = new TWEEN.Tween({ y: y })
    .to({ y: 150 }, 800)
    .easing( TWEEN.Easing.Elastic.Out )
    .onUpdate( function (e) {
      updatePath(e.y);
      console.log(e.y)
    }).onComplete(function() {
      tweening = false;
    }).start();
}

function updatePath(y) {
    
  // update SVG path control point
//   path.setAttribute('d', 'M-10 150C142.22222222222223 150 480 50 960 50C1440 50 1777.7777777777778 150 1930 150V310H-20V150Z');
  path.setAttribute('d', 'M10,150 Q200,'+y+' 390,150');
}

function loop(time) {
  if (connected) updateCurve();
  TWEEN.update(time);
  requestAnimationFrame(loop);
}

window.onload = init;




