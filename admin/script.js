let db;

fetch("../database.js")
.then(res=>res.text())
.then(text=>{

let clean=text.replace("const database =","").replace(";","");

db=eval("(" + clean + ")");

loadGames();

});

function loadGames(){

let select=document.getElementById("gameSelect");

for(let key in db){

let option=document.createElement("option");

option.value=key;

option.innerText=db[key].name;

select.appendChild(option);

}

select.onchange=showProducts;

showProducts();

}

function showProducts(){

let key=gameSelect.value;

let list=document.getElementById("productList");

list.innerHTML="";

db[key].regular.forEach((p,i)=>{

let div=document.createElement("div");

div.className="card";

div.innerHTML=`

Nama Produk
<input value="${p.name}" onchange="updateName(${i},this.value)">

Harga
<input value="${p.price}" onchange="updatePrice(${i},this.value)">

<button onclick="deleteProduct(${i})">Hapus</button>

`;

list.appendChild(div);

});

}

function updateName(i,val){

db[gameSelect.value].regular[i].name=val;

}

function updatePrice(i,val){

db[gameSelect.value].regular[i].price=val;

}

function deleteProduct(i){

db[gameSelect.value].regular.splice(i,1);

showProducts();

}

function addProduct(){

db[gameSelect.value].regular.push({
name:"Produk Baru",
price:"Rp0"
});

showProducts();

}

async function saveDatabase(){

const token="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";
const repo="inuunew/nuuai";
const path="database.js";

let content="const database = "+JSON.stringify(db,null,2);

let encoded=btoa(content);

await fetch(`https://api.github.com/repos/${repo}/contents/${path}`,{

method:"PUT",

headers:{
Authorization:"token "+token,
"Content-Type":"application/json"
},

body:JSON.stringify({
message:"update database",
content:encoded
})

});

alert("Database berhasil diupdate");

}