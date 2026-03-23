const database = {

  ff: {
    name: "Free Fire",
    type: "id",
    image: "assets/ff.png",

    regular: [
  { name: "5 Diamond Free Fire", price: "Rp1.500" },
  { name: "12 Diamond Free Fire", price: "Rp2.500" },
  { name: "50 Diamond Free Fire", price: "Rp8.000" },
  { name: "70 Diamond Free Fire", price: "Rp10.000" },
  { name: "100 Diamond Free Fire", price: "Rp15.000" },
  { name: "140 Diamond Free Fire", price: "Rp18.000" },
  { name: "210 Diamond Free Fire", price: "Rp27.000" },
  { name: "300 Diamond Free Fire", price: "Rp41.000" },
  { name: "355 Diamond Free Fire", price: "Rp44.000" },
  { name: "500 Diamond Free Fire", price: "Rp65.000" },
  { name: "720 Diamond Free Fire", price: "Rp89.000" },
  { name: "1000 Diamond Free Fire", price: "Rp126.000" },
  { name: "1450 Diamond Free Fire", price: "Rp176.000" },
  { name: "2180 Diamond Free Fire", price: "Rp265.000" },
  { name: "3640 Diamond Free Fire", price: "Rp438.000" },
  { name: "4000 Diamond Free Fire", price: "Rp498.000" },
  { name: "7290 Diamond Free Fire", price: "Rp905.000" }
],

    membership: [
      { name: "Membership level up pass", price: "Rp15.000" },
      { name: "Membership Mingguan", price: "Rp30.000" }, 
      { name: "membership bulanan", price: "Rp84.000" }, 
      { name: "Boyah Pass", price: "Rp44.000" }
    ]
  },


  ml: {
    name: "Mobile Legends",
    type: "idserver",
    image: "assets/ml.png",

    regular: [
      { name: "59 Diamond ML", price: "Rp15.000" },
      { name: "127 Diamond ML", price: "Rp30.000" },
      { name: "241 Diamond ML", price: "Rp55.000" },
      { name: "402 Diamond ML", price: "Rp90.000" },
      { name: "688 Diamond ML", price: "Rp150.000" },
      { name: "973 Diamond ML", price: "Rp210.000" },
      { name: "1446 Diamond ML", price: "Rp310.000" }
    ],

    membership: [
      { name: "Monthly Card", price: "Rp50.000" }
    ]
  },


  pubg: {
    name: "PUBG Mobile",
    type: "voucher",
    image: "assets/pubg.png",

    regular: [
      { name: "71 UC Voucher", price: "Rp16.000" },
      { name: "148 UC Voucher", price: "Rp32.000" },
      { name: "347 UC Voucher", price: "Rp75.000" },
      { name: "689 UC Voucher", price: "Rp145.000" },
      { name: "1097 UC Voucher", price: "Rp225.000" }
    ],

    membership: []
  },


  genshin: {
    name: "Genshin Impact",
    type: "uid",
    image: "assets/genshin.png",

    regular: [
      { name: "63 Genesis Crystal", price: "Rp17.000" },
      { name: "128 Genesis Crystal", price: "Rp34.000" },
      { name: "309 Genesis Crystal", price: "Rp80.000" },
      { name: "642 Genesis Crystal", price: "Rp162.000" },
      { name: "1247 Genesis Crystal", price: "Rp320.000" }
    ],

    membership: [
      { name: "Blessing of the Welkin Moon", price: "Rp79.000" }
    ]
  },


  hok: {
    name: "Honor of Kings",
    type: "id",
    image: "assets/hok.png",

    regular: [
      { name: "46 Tokens HOK", price: "Rp12.000" },
      { name: "117 Tokens HOK", price: "Rp28.000" },
      { name: "236 Tokens HOK", price: "Rp54.000" },
      { name: "418 Tokens HOK", price: "Rp95.000" },
      { name: "735 Tokens HOK", price: "Rp165.000" },
      { name: "1298 Tokens HOK", price: "Rp285.000" }
    ],

    membership: []
  },


  valorant: {
    name: "Valorant",
    type: "voucher",
    image: "assets/valo.png",

    regular: [
      { name: "412 VP", price: "Rp70.000" },
      { name: "843 VP", price: "Rp140.000" },
      { name: "1765 VP", price: "Rp290.000" },
      { name: "3642 VP", price: "Rp590.000" },
      { name: "7594 VP", price: "Rp1.190.000" }
    ],

    membership: []
  },


  fcmobile: {
    name: "FC Mobile",
    type: "id",
    image: "assets/fcm.png",

    regular: [
      { name: "94 FC Points", price: "Rp15.000" },
      { name: "203 FC Points", price: "Rp33.000" },
      { name: "451 FC Points", price: "Rp70.000" },
      { name: "902 FC Points", price: "Rp138.000" },
      { name: "1847 FC Points", price: "Rp275.000" }
    ],

    membership: []
  },


  codm: {
    name: "Call of Duty",
    type: "idserver",
    image: "assets/cod.png",

    regular: [
      { name: "134 CP", price: "Rp20.000" },
      { name: "286 CP", price: "Rp42.000" },
      { name: "598 CP", price: "Rp85.000" },
      { name: "1234 CP", price: "Rp170.000" },
      { name: "2489 CP", price: "Rp335.000" }
    ],

    membership: []
  },


  coc: {
    name: "Clash of Clans",
    type: "id",
    image: "assets/coc.png",

    regular: [
      { name: "88 Gems COC", price: "Rp16.000" },
      { name: "214 Gems COC", price: "Rp35.000" },
      { name: "497 Gems COC", price: "Rp79.000" },
      { name: "1036 Gems COC", price: "Rp158.000" },
      { name: "2145 Gems COC", price: "Rp320.000" },
      { name: "4689 Gems COC", price: "Rp640.000" }
    ],

    membership: [
      { name: "Gold Pass", price: "Rp89.000" }
    ]
  },


  asphalt9: {
    name: "Asphalt 9",
    type: "id",
    image: "assets/asphalt.png",

    regular: [
      { name: "54 Tokens Asphalt", price: "Rp14.000" },
      { name: "149 Tokens Asphalt", price: "Rp36.000" },
      { name: "318 Tokens Asphalt", price: "Rp70.000" },
      { name: "706 Tokens Asphalt", price: "Rp145.000" },
      { name: "1498 Tokens Asphalt", price: "Rp290.000" }
    ],

    membership: []
  }

};

const databaseOther = {
  pulsa: {
    name: "Pulsa & Paket Data",
    image: "https://files.catbox.moe/7h9pqr.png",
    items: [
      { name: "Pulsa 5.000", price: "Rp5.000" },
      { name: "Pulsa 10.000", price: "Rp10.000" },
      { name: "Pulsa 25.000", price: "Rp25.000" },
      { name: "Pulsa 50.000", price: "Rp50.000" },
      { name: "Pulsa 100.000", price: "Rp100.000" }
    ]
  },

  tokenListrik: {
    name: "Token Listrik PLN",
    image: "https://files.catbox.moe/qv8b1x.png",
    items: [
      { name: "Token 20.000", price: "Rp20.000" },
      { name: "Token 50.000", price: "Rp50.000" },
      { name: "Token 100.000", price: "Rp100.000" },
      { name: "Token 200.000", price: "Rp200.000" }
    ]
  },

  voucherGame: {
    name: "Voucher Game",
    image: "https://files.catbox.moe/n7y9s2.png",
    items: [
      { name: "Steam Wallet 50k", price: "Rp50.000" },
      { name: "Steam Wallet 100k", price: "Rp100.000" },
      { name: "Google Play 50k", price: "Rp50.000" },
      { name: "Google Play 100k", price: "Rp100.000" }
    ]
  }
};

const databasePanel = {

panel1: {
name: "Panel Bot 1GB",
image: "img/panel.jpg",
items: [
{ name: "1GB", price: 5000 }
]
}

}