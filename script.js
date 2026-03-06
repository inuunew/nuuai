const chat=document.getElementById("chat")

let history=[]

function render(text,type){

let msg=document.createElement("div")

msg.className="message "+type

msg.innerHTML=`
<div class="bubble">${marked.parse(text)}</div>
`

chat.appendChild(msg)

chat.scrollTop=chat.scrollHeight

}

async function send(){

let input=document.getElementById("msg")

let text=input.value

if(!text)return

render(text,"user")

input.value=""

render("AI sedang berpikir...","ai")

let res=await fetch("/api/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

message:text,
history

})

})

let data=await res.json()

chat.lastChild.remove()

render(data.reply,"ai")

history.push({role:"user",content:text})

history.push({role:"assistant",content:data.reply})

}

function quick(text){

document.getElementById("msg").value=text

}

function newChat(){

chat.innerHTML=""

history=[]

}

function toggleTheme(){

document.body.classList.toggle("light")

}

function voice(){

let rec=new webkitSpeechRecognition()

rec.lang="id-ID"

rec.onresult=e=>{

document.getElementById("msg").value=e.results[0][0].transcript

}

rec.start()

}

function upload(){

alert("Vision API siap digunakan")

}