// typing text

var text = "Initializing system access...";
var i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();


// MATRIX RAIN

var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*";
letters = letters.split("");

var fontSize = 14;
var columns = canvas.width/fontSize;

var drops = [];

for(var x=0;x<columns;x++)
drops[x]=1;

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff00";
ctx.font=fontSize+"px monospace";

for(var i=0;i<drops.length;i++){

var text=letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;

}

}

setInterval(draw,33);


// LOGIN FUNCTION

function login(){

startHackAnimation();

var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

var sound=document.getElementById("sound");

sound.play();

setTimeout(function(){

if(username==="admin" && password==="matrix123"){

document.getElementById("status").innerHTML="ACCESS GRANTED";
document.getElementById("status").style.color="lime";

}else{

document.getElementById("status").innerHTML="ACCESS DENIED";
document.getElementById("status").style.color="red";

}

},3000)

}


// FINGERPRINT LOGIN

function fingerprintLogin(){

startHackAnimation();

setTimeout(function(){

document.getElementById("status").innerHTML="BIOMETRIC ACCESS GRANTED";

},3000)

}


// HACKING PROGRESS BAR

function startHackAnimation(){

var bar=document.getElementById("progress-bar");

var width=0;

var interval=setInterval(function(){

if(width>=100){

clearInterval(interval);

}else{

width++;

bar.style.width=width+"%";

}

},30)

}


// FAKE TERMINAL DATA

function randomLogs(){

var logs=["Scanning network...",
"Bypassing firewall...",
"Decrypting password...",
"Tracking IP...",
"Accessing secure node..."];

document.getElementById("log").innerHTML=logs[Math.floor(Math.random()*logs.length)];

document.getElementById("network").innerHTML="Active nodes: "+Math.floor(Math.random()*50);

document.getElementById("ip").innerHTML="IP: 192.168."+Math.floor(Math.random()*255)+"."+Math.floor(Math.random()*255);

}

setInterval(randomLogs,2000);
