// Revelar elementos ao rolar a página

const elementos = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});

elementos.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition="all .8s ease";

observer.observe(el);

});

// Cabeçalho muda ao rolar

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="#ffffff";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

}else{

header.style.background="rgba(255,255,255,.9)";
header.style.boxShadow="0 5px 20px rgba(0,0,0,.05)";

}

});

// Botão voltar ao topo

const topo=document.createElement("div");

topo.innerHTML="▲";

topo.style.position="fixed";
topo.style.bottom="30px";
topo.style.right="30px";
topo.style.width="55px";
topo.style.height="55px";
topo.style.borderRadius="50%";
topo.style.background="#b39b84";
topo.style.color="white";
topo.style.display="flex";
topo.style.alignItems="center";
topo.style.justifyContent="center";
topo.style.fontSize="22px";
topo.style.cursor="pointer";
topo.style.opacity="0";
topo.style.transition=".4s";
topo.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
topo.style.zIndex="999";

document.body.appendChild(topo);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topo.style.opacity="1";

}else{

topo.style.opacity="0";

}

});

topo.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Efeito de digitação no título

const titulo=document.querySelector(".hero h1");

const texto=titulo.innerText;

titulo.innerHTML="";

let i=0;

function escrever(){

if(i<texto.length){

titulo.innerHTML+=texto.charAt(i);

i++;

setTimeout(escrever,35);

}

}

window.onload=escrever;

// Efeito nos cards

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});