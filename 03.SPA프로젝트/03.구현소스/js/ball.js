const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");

// 메인때문에 추가한거!!!
const content = document.querySelector('.main-content h1');
const contentPosition = content.getBoundingClientRect();

console.log("체크용!",contentPosition);

const DEBUG = false;
// 속도
const FPS = 40;
// 캔버스 벗어나지 않으려면 공 크기와 동일하게 맞춰줘야함
const BALL_RADIUS = 50;
const INIT_BALL_COUNT = 7;
const MAGIC_NUM = 4;
const LIFETIME = 1000 * 30;
let balls = [];

//// 이미지 생성 //////////
let img = new Image();
img.src = "./images/swan.png";
// img.width = 50;
// img.height = 50;


// Ball 클래스
class Ball {
  constructor(x, y) {
    this.radius = BALL_RADIUS;
    this.x = x || random_num(0 + this.radius, CANVAS.width - this.radius);
    this.y = y || random_num(0 + this.radius, CANVAS.height - this.radius);
    this.velocity_x = random_num(1, 15);
    this.velocity_y = random_num(1, 15);
    this.gravity = Math.max(Math.random(), 0.5);
    this.friction = Math.max(Math.random(), 0.5);
    this.create_time = Date.now();
    this.color_hex = "#" + [...Array(6)].map(() => random_num(0, 16).toString(16)).join("");
    this.opacity = 255;
    this.fading = false;
    this.fade_interval_id;
    if (random_num(0, 2)) {
      this.velocity_x = ~this.velocity_x + 1;
    }
    if (random_num(0, 2)) {
      this.velocity_y = ~this.velocity_y + 1;
    }
  }
}

function init() {
  CANVAS.style.position = "absolute";
  CANVAS.style.top = 0;
  CANVAS.style.left = 0;

  CANVAS.addEventListener("click", click_handler);
  window.addEventListener("resize", draw_canvas);

  for (let i = 0; i < INIT_BALL_COUNT; i++) {
    balls.push(new Ball());
  }

  setInterval(draw_canvas, 1000 / FPS);
}

function draw_canvas() {
  clear_canvas();
  set_canvas_size();
  for (let i = 0; i < balls.length; i++) {
    draw_ball(balls[i]);
    move_ball(balls[i]);
  }
}

function clear_canvas() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

function set_canvas_size() {
  CANVAS.height = window.innerHeight;
  CANVAS.width = window.innerWidth;
}

function draw_ball(ball) {
  CTX.beginPath();
  CTX.fillStyle = ball.color_hex + ball.opacity.toString(16);

  // arc를 아래로 대체하기
  // new Image() -> drawImage
//   CTX.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  // CTX.fill();

  ///// 수정 ///////
  // CTX.drawImage(img, 150, 150, 50, 50);
  // ball.x, ball.y의 상수는 
  CTX.drawImage(img, ball.x-90, ball.y-90, 150, 150);
  CTX.fill();

  if (DEBUG) draw_ball_text(ball);
}

function draw_ball_text(ball) {
  let x = Math.round(ball.x);
  let y = Math.round(ball.y);
  let vx = Math.round(ball.velocity_x);
  let vy = Math.round(ball.velocity_y);

  let text = `x: ${x}, y: ${y}, vx: ${vx}, vy: ${vy}`;

  CTX.font = "15px Arial";
  CTX.fillText(text, ball.x + ball.radius + 5, ball.y);

  CTX.beginPath();
  CTX.moveTo(ball.x - ball.radius, ball.y + ball.radius);
  CTX.lineTo(ball.x + ball.radius, ball.y + ball.radius);
  CTX.stroke();
}

// 볼 움직임 컨트롤 함수
function move_ball(ball) {
    
  if (ball.y + ball.radius >= CANVAS.height) {
    if (ball.velocity_y > 0) {
      ball.velocity_y = ~ball.velocity_y + 1;
    }
    ball.velocity_y = ball.velocity_y * ball.gravity;
    ball.velocity_x = ball.velocity_x * ball.friction;
  }
  ball.y += ball.velocity_y;
  if (ball.y + ball.radius < CANVAS.height - MAGIC_NUM) {
    ball.velocity_y += 1;
  }

  if (ball.x + ball.radius >= CANVAS.width || ball.x - ball.radius <= 0) {
    ball.velocity_x = ~ball.velocity_x + 1;
    ball.velocity_x = ball.velocity_x * ball.friction;
  }
  ball.x += ball.velocity_x;
  

  if (ball.fading) {
    return;
  }
  
  if (
    Math.floor(ball.velocity_x) === 0 &&
    Math.floor(ball.velocity_y) === 0 &&
    ball.y + ball.radius > CANVAS.height - MAGIC_NUM
  ) {
    // fade_ball(ball);
  } else {
    if (Date.now() - ball.create_time > LIFETIME) {
    // fade_ball(ball);
    }
  }
}

/////////////////////////////////////////////
function fade_ball(ball) {
  ball.fading = true;
  if (ball.fade_interval_id === undefined) {
    ball.fade_interval_id = setInterval(() => {
      fade_ball(ball);
    }, 1);
  }
  ball.opacity -= 1;
  if (ball.opacity <= 5) {
    clearInterval(ball.fade_interval_id);
    delete_ball(ball);
  }
}

function delete_ball(ball) {
  for (let i = 0; i < balls.length; i++) {
    if (balls[i] === ball) {
      balls.splice(i, 1);
      break;
    }
  }
  draw_canvas();
}
////////////////////////////////////////////

function random_num(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

function click_handler(event) {
  balls.push(new Ball(event.x, event.y));
}

init();
