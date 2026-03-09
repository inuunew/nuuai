let saved = localStorage.getItem("database")

if(saved){
database = JSON.parse(saved)
}

function saveDB(){
localStorage.setItem("database",JSON.stringify(database))
render()
}

function render(){

let html=""

for(let key in database){

let game = database[key]

html += `
<div class="card">

<h3>${game.name}</h3>

<p>Type : ${game.type}</p>

<img src="${game.image}" width="80">

<br>

<button onclick="hapusGame('${key}')">Hapus Game</button>

<button onclick="tambahProduk('${key}')">Tambah Produk</button>

<h4>Produk</h4>
`

game.items.forEach((item,i)=>{

html += `
<p>
${item.name} - Rp ${item.price}

<button onclick="hapusProduk('${key}',${i})">hapus</button>
</p>
`

})

html += "</div>"

}

document.getElementById("gameList").innerHTML = html

}

function tambahGame(){

let key = prompt("ID Game (contoh ml)")
let name = prompt("Nama Game")
let type = prompt("Type (voucher/uid/id/idserver)")
let image = prompt("Link Gambar")

database[key] = {
name:name,
type:type,
image:image,
items:[]
}

saveDB()

}

function hapusGame(key){

if(confirm("Hapus game?")){

delete database[key]
saveDB()

}

}

function tambahProduk(key){

let name = prompt("Nama Produk")
let price = prompt("Harga")

database[key].items.push({
name:name,
price:Number(price)
})

saveDB()

}

function hapusProduk(key,i){

database[key].items.splice(i,1)
saveDB()

}

render()