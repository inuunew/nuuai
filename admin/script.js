let db;

fetch("database.js")
.then(res=>res.json())
.then(data=>{

db=data;

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


function saveDatabase(){

console.log(db);

alert("Database siap dikirim ke GitHub");

}