// Typing effect on intro
const typingText = "Elin... before 2026 starts, there is something I must show you...";
const typingEl = document.getElementById("typing");
let index = 0;

function typeWriter() {
  if(index < typingText.length){
    typingEl.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

// Start button
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.timeline').style.display = 'flex';
});
typeWriter();

// Timeline next button
document.getElementById("toCounterBtn").addEventListener("click", () => {
  document.querySelector('.timeline').style.display = 'none';
  document.querySelector('.counterPage').style.display = 'flex';
});

// Counter Page
const startDate = new Date("2023-10-08");
const daysCountEl = document.getElementById("daysCount");

function updateCounter() {
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000*60*60*24));
  daysCountEl.innerHTML = `${diffDays} days of friendship ❤️`;
}
updateCounter();
setInterval(updateCounter, 1000);

// Final Page button
document.getElementById("toFinalBtn").addEventListener("click", () => {
  document.querySelector('.counterPage').style.display = 'none';
  document.querySelector('.finalPage').style.display = 'flex';
  startFireworks();
});

// Simple Fireworks effect
function startFireworks(){
  const fireworks = document.getElementById("fireworks");
  for(let i=0;i<30;i++){
    const f = document.createElement("div");
    f.style.position="absolute";
    f.style.width="5px";
    f.style.height="5px";
    f.style.background="yellow";
    f.style.borderRadius="50%";
    f.style.left = Math.random()*window.innerWidth+"px";
    f.style.top = Math.random()*window.innerHeight+"px";
    f.style.animation = `fly ${2+Math.random()*2}s linear forwards`;
    fireworks.appendChild(f);
    setTimeout(()=>{f.remove()},4000);
  }
}

// Fireworks animation
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes fly {
  to {transform: translateY(-500px) translateX(${(Math.random()-0.5)*200}px); opacity:0;}
}`;
document.head.appendChild(styleSheet);
