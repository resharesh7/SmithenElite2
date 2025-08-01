// Rain animation
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let raindrops = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  l: Math.random() * 15 + 15,
  xs: -4 + Math.random() * 4 + 2,
  ys: Math.random() * 10 + 10
}));

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(174,194,224,0.5)';
  ctx.lineWidth = 1;
  ctx.lineCap = 'round';

  for (let i = 0; i < raindrops.length; i++) {
    let r = raindrops[i];
    ctx.beginPath();
    ctx.moveTo(r.x, r.y);
    ctx.lineTo(r.x + r.xs, r.y + r.ys);
    ctx.stroke();
    r.x += r.xs;
    r.y += r.ys;
    if (r.y > canvas.height || r.x > canvas.width) {
      r.x = Math.random() * canvas.width;
      r.y = -20;
    }
  }
  requestAnimationFrame(drawRain);
}
drawRain();

// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Music toggle
const music = new Audio('https://cdn.pixabay.com/download/audio/2023/04/01/audio_1e0d232de2.mp3?filename=soft-rain-ambient-143040.mp3');
music.loop = true;
let playing = false;

document.getElementById('musicBtn').addEventListener('click', () => {
  if (!playing) {
    music.play();
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
});
