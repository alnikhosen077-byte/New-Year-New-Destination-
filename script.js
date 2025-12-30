// Typing effect on intro
// -------------------- Typing effect --------------------
const typingText = "Elin... before 2026 starts, there is something I must show you...";
const typingEl = document.getElementById("typing");
let index = 0;
function typeWriter(){
  if(index<typingText.length){
    typingEl.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeWriter,50);
  }
}
typeWriter();

// -------------------- Page Navigation --------------------
function showPage(pageClass){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelector(pageClass).classList.add('active');
}
document.getElementById("startBtn").addEventListener("click",()=>{showPage('.timeline'); animateTimeline();});
document.getElementById("toCounterBtn").addEventListener("click",()=>{showPage('.counterPage');});
document.getElementById("toFinalBtn").addEventListener("click",()=>{showPage('.finalPage'); startFireworks(); startHearts(); startConfetti();});

// -------------------- Timeline Animation --------------------
function animateTimeline(){
  const events = document.querySelectorAll('.event');
  events.forEach((e,i)=>{
    setTimeout(()=>{e.style.opacity=1; e.style.transform='translateY(0)';}, i*500);
  });
}

// -------------------- 3 Years Counter --------------------
const startDate = new Date("2023-10-08");
const daysCountEl = document.getElementById("daysCount");
function updateCounter(){
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000*60*60*24));
  daysCountEl.innerHTML = `${diffDays} days of friendship ❤️`;
}
updateCounter();
setInterval(updateCounter,1000);

// -------------------- Fireworks --------------------
function startFireworks(){
  const fireworks = document.getElementById("fireworks");
  for(let i=0;i<40;i++){
    const f=document.createElement("div");
    f.style.position="absolute";
    f.style.width="5px"; f.style.height="5px"; f.style.background="yellow";
    f.style.borderRadius="50%";
    f.style.left=Math.random()*window.innerWidth+"px";
    f.style.top=Math.random()*window.innerHeight+"px";
    f.style.animation=`fly ${2+Math.random()*2}s linear forwards`;
    fireworks.appendChild(f);
    setTimeout(()=>{f.remove()},4000);
  }
}

// -------------------- Floating Hearts --------------------
function createHeart(){
  const heart=document.createElement('div');
  heart.innerHTML='💖';
  heart.style.position='absolute';
  heart.style.left=Math.random()*window.innerWidth+'px';
  heart.style.top=window.innerHeight+'px';
  heart.style.fontSize=20+Math.random()*20+'px';
  heart.style.opacity=1;
  document.body.appendChild(heart);

  let top=window.innerHeight;
  const id=setInterval(()=>{
    top-=2+Math.random()*3;
    heart.style.top=top+'px';
    heart.style.opacity-=0.01;
    if(top<0){clearInterval(id); heart.remove();}
  },20);
}
function startHearts(){ setInterval(createHeart,300); }

// -------------------- Confetti --------------------
function startConfetti(){
  for(let i=0;i<50;i++){
    const c=document.createElement('div');
    c.classList.add('confettiPiece');
    c.style.background= `hsl(${Math.random()*360}, 70%, 60%)`;
    c.style.left=Math.random()*window.innerWidth+'px';
    c.style.top=-20+'px';
    c.style.width=5+Math.random()*10+'px';
    c.style.height=5+Math.random()*10+'px';
    document.body.appendChild(c);
    setTimeout(()=>{c.remove()},4000);
  }
}

// -------------------- Fireworks Keyframes --------------------
const styleSheet=document.createElement("style");
styleSheet.type="text/css";
styleSheet.innerText=`
@keyframes fly{
  to{transform: translateY(-500px) translateX(${(Math.random()-0.5)*200}px); opacity:0;}
}`;
document.head.appendChild(styleSheet);
