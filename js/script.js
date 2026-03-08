const params = new URLSearchParams(window.location.search);
const gameName = params.get("game");

document.getElementById("gameTitle").innerText = gameName;

const container = document.getElementById("packageList");

if(packages[gameName]){

packages[gameName].forEach(pkg => {

let label = document.createElement("label");

label.innerHTML = `
<input type="radio" name="package" value="${pkg}">
${pkg}
`;

container.appendChild(label);

});

}

function orderWhatsApp(){

let userId = document.getElementById("userId").value;
let serverId = document.getElementById("serverId").value;

let selected =
document.querySelector('input[name="package"]:checked');

if(userId === ""){
alert("Masukkan User ID");
return;
}

if(!selected){
alert("Pilih paket top up");
return;
}

let pkg = selected.value;

let message =
`Halo Admin, saya ingin top up.

Game: ${gameName}
User ID: ${userId}
Server: ${serverId}
Item: ${pkg}

Mohon diproses.`;

let phone = "6283160556330";

let url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

}