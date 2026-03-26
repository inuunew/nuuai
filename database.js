const database = {

  ff: {
    name: "Free Fire",
    require: ["userId"],
    image: "assets/ff.png",

    regular: [
      { name: "5 Diamond Free Fire", price: "Rp1.500", status: "online" },
      { name: "12 Diamond Free Fire", price: "Rp2.500", status: "online" },
      { name: "50 Diamond Free Fire", price: "Rp8.000", status: "offline" },
      { name: "70 Diamond Free Fire", price: "Rp10.000", status: "online" },
      { name: "100 Diamond Free Fire", price: "Rp15.000", status: "online" },
      { name: "140 Diamond Free Fire", price: "Rp18.000", status: "offline" },
      { name: "210 Diamond Free Fire", price: "Rp27.000", status: "online" },
      { name: "300 Diamond Free Fire", price: "Rp41.000", status: "online" },
      { name: "355 Diamond Free Fire", price: "Rp44.000", status: "online" },
      { name: "500 Diamond Free Fire", price: "Rp65.000", status: "online" },
      { name: "720 Diamond Free Fire", price: "Rp89.000", status: "offline" },
      { name: "1000 Diamond Free Fire", price: "Rp126.000", status: "online" },
      { name: "1450 Diamond Free Fire", price: "Rp176.000", status: "online" },
      { name: "2180 Diamond Free Fire", price: "Rp265.000", status: "online" },
      { name: "3640 Diamond Free Fire", price: "Rp438.000", status: "offline" },
      { name: "4000 Diamond Free Fire", price: "Rp498.000", status: "online" },
      { name: "7290 Diamond Free Fire", price: "Rp905.000", status: "online" }
    ],

    membership: [
      { name: "Membership level up pass", price: "Rp15.000", status: "online" },
      { name: "Membership Mingguan", price: "Rp30.000", status: "online" }, 
      { name: "membership bulanan", price: "Rp84.000", status: "offline" }, 
      { name: "Boyah Pass", price: "Rp44.000", status: "online" }
    ]
  },

  ml: {
    name: "Mobile Legends",
    require: ["userId", "server"],
    serverType: "id", // pakai input number
    image: "assets/ml.png", 

    regular: [
      { name: "59 Diamond ML", price: "Rp15.000", status: "online" },
      { name: "127 Diamond ML", price: "Rp30.000", status: "online" },
      { name: "241 Diamond ML", price: "Rp55.000", status: "offline" },
      { name: "402 Diamond ML", price: "Rp90.000", status: "online" },
      { name: "688 Diamond ML", price: "Rp150.000", status: "online" },
      { name: "973 Diamond ML", price: "Rp210.000", status: "online" },
      { name: "1446 Diamond ML", price: "Rp310.000", status: "offline" }
    ],

    membership: [
      { name: "Monthly Card", price: "Rp50.000", status: "online" }
    ]
  },

  pubg: {
    name: "PUBG Mobile",
    require: ["userid"],
    image: "assets/pubg.png",

    regular: [
      { name: "71 UC Voucher", price: "Rp16.000", status: "online" },
      { name: "148 UC Voucher", price: "Rp32.000", status: "online" },
      { name: "347 UC Voucher", price: "Rp75.000", status: "offline" },
      { name: "689 UC Voucher", price: "Rp145.000", status: "online" },
      { name: "1097 UC Voucher", price: "Rp225.000", status: "online" }
    ],

    membership: []
  },

  genshin: {
  name: "Genshin Impact",
  require: ["userId", "server"],
  serverType: "region",
  image: "assets/genshin.png",

    regular: [
      { name: "63 Genesis Crystal", price: "Rp17.000", status: "online" },
      { name: "128 Genesis Crystal", price: "Rp34.000", status: "online" },
      { name: "309 Genesis Crystal", price: "Rp80.000", status: "offline" },
      { name: "642 Genesis Crystal", price: "Rp162.000", status: "online" },
      { name: "1247 Genesis Crystal", price: "Rp320.000", status: "online" }
    ],

    membership: [
      { name: "Blessing of the Welkin Moon", price: "Rp79.000", status: "online" }
    ]
  },

  hok: {
    name: "Honor of Kings",
    require: ["userId"],
    image: "assets/hok.png",

    regular: [
      { name: "46 Tokens HOK", price: "Rp12.000", status: "online" },
      { name: "117 Tokens HOK", price: "Rp28.000", status: "online" },
      { name: "236 Tokens HOK", price: "Rp54.000", status: "offline" },
      { name: "418 Tokens HOK", price: "Rp95.000", status: "online" },
      { name: "735 Tokens HOK", price: "Rp165.000", status: "online" },
      { name: "1298 Tokens HOK", price: "Rp285.000", status: "online" }
    ],

    membership: []
  },

  valorant: {
    name: "Valorant",
    require: [],
    image: "assets/valo.png",

    regular: [
      { name: "412 VP", price: "Rp70.000", status: "online" },
      { name: "843 VP", price: "Rp140.000", status: "online" },
      { name: "1765 VP", price: "Rp290.000", status: "offline" },
      { name: "3642 VP", price: "Rp590.000", status: "online" },
      { name: "7594 VP", price: "Rp1.190.000", status: "online" }
    ],

    membership: []
  },

  fcmobile: {
    name: "FC Mobile",
    require: ["userId"],
    image: "assets/fcm.png",

    regular: [
      { name: "94 FC Points", price: "Rp15.000", status: "online" },
      { name: "203 FC Points", price: "Rp33.000", status: "online" },
      { name: "451 FC Points", price: "Rp70.000", status: "offline" },
      { name: "902 FC Points", price: "Rp138.000", status: "online" },
      { name: "1847 FC Points", price: "Rp275.000", status: "online" }
    ],

    membership: []
  },

  codm: {
    name: "Call of Duty",
    require: ["userId"],
    image: "assets/cod.png",

    regular: [
      { name: "134 CP", price: "Rp20.000", status: "online" },
      { name: "286 CP", price: "Rp42.000", status: "online" },
      { name: "598 CP", price: "Rp85.000", status: "offline" },
      { name: "1234 CP", price: "Rp170.000", status: "online" },
      { name: "2489 CP", price: "Rp335.000", status: "online" }
    ],

    membership: []
  },

  coc: {
    name: "Clash of Clans",
    require: ["userId"],
    image: "assets/coc.png",

    regular: [
      { name: "88 Gems COC", price: "Rp16.000", status: "online" },
      { name: "214 Gems COC", price: "Rp35.000", status: "online" },
      { name: "497 Gems COC", price: "Rp79.000", status: "offline" },
      { name: "1036 Gems COC", price: "Rp158.000", status: "online" },
      { name: "2145 Gems COC", price: "Rp320.000", status: "online" },
      { name: "4689 Gems COC", price: "Rp640.000", status: "online" }
    ],

    membership: [
      { name: "Gold Pass", price: "Rp89.000", status: "online" }
    ]
  },

  asphalt9: {
    name: "Asphalt 9",
    require: ["userId"],
    image: "assets/asphalt.png",

    regular: [
      { name: "54 Tokens Asphalt", price: "Rp14.000", status: "online" },
      { name: "149 Tokens Asphalt", price: "Rp36.000", status: "online" },
      { name: "318 Tokens Asphalt", price: "Rp70.000", status: "offline" },
      { name: "706 Tokens Asphalt", price: "Rp145.000", status: "online" },
      { name: "1498 Tokens Asphalt", price: "Rp290.000", status: "online" }
    ],

    membership: []
  }

};

const databaseOther = {
  pulsa: {
  name: "Pulsa",
  require: ["phone"],
    image: "https://files.catbox.moe/7h9pqr.png",
    items: [
      { name: "Pulsa 5.000", price: "Rp5.000", status: "online" },
      { name: "Pulsa 10.000", price: "Rp10.000", status: "online" },
      { name: "Pulsa 25.000", price: "Rp25.000", status: "offline" },
      { name: "Pulsa 50.000", price: "Rp50.000", status: "online" },
      { name: "Pulsa 100.000", price: "Rp100.000", status: "online" }
    ],
    membership: []
  },

};

const databasePanel = {
  panel: {
    name: "Panel Bot",
    require: ["username"], // 🔥 WAJIB USERNAME
    image: "img/panel.jpg",
    items: [
      { name: "1GB", price: 5000, status: "online" },
      { name: "2GB", price: 3000, status: "online" },
      { name: "3GB", price: 4000, status: "offline" },
      { name: "4GB", price: 5000, status: "online" },
      { name: "5GB", price: 6000, status: "online" },
      { name: "6GB", price: 7000, status: "offline" },
      { name: "7GB", price: 8000, status: "online" },
      { name: "8GB", price: 9000, status: "online" },
      { name: "Unlimited", price: 10000, status: "online" }
    ]
  },

  panel10: {
    name: "Reseller Panel",
    require: ["username"], // 🔥 WAJIB USERNAME
    image: "img/panel.jpg",
    items: [
      { name: "Reseller public", price: 15000, status: "online" },
      { name: "Reseller private", price: 20000, status: "online" }
    ]
  },

  panel11: {
    name: "Admin Panel",
    require: ["username"], // 🔥 WAJIB USERNAME
    image: "img/panel.jpg",
    items: [
      { name: "Admin", price: 20000, status: "online" }
    ]
  }
};