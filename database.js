const database = {
  ff: {
    name: "Free Fire",
    require: ["userId"],
    image: "assets/ff.png",
    qris: false,
    desc: "Top up diamond Free Fire legal & aman",
    detail: "Tanpa login akun, layanan 24 jam",
    regular: [
      { name: "5 Diamond Free Fire", price: "Rp1.200", status: "online" },
      { name: "12 Diamond Free Fire", price: "Rp2.500", status: "online" },
      { name: "50 Diamond Free Fire", price: "Rp7.500", status: "online" },
      { name: "70 Diamond Free Fire", price: "Rp9.500", status: "online" },
      { name: "100 Diamond Free Fire", price: "Rp13.000", status: "online" },
      { name: "140 Diamond Free Fire", price: "Rp19.000", status: "online" },
      { name: "210 Diamond Free Fire", price: "Rp27.000", status: "online" },
      { name: "300 Diamond Free Fire", price: "Rp41.000", status: "online" },
      { name: "355 Diamond Free Fire", price: "Rp46.000", status: "online" },
      { name: "500 Diamond Free Fire", price: "Rp65.000", status: "online" },
      { name: "720 Diamond Free Fire", price: "Rp91.000", status: "online" },
      { name: "1000 Diamond Free Fire", price: "Rp127.000", status: "online" },
      { name: "1450 Diamond Free Fire", price: "Rp183.000", status: "online" },
      { name: "2180 Diamond Free Fire", price: "Rp275.000", status: "online" },
      { name: "3640 Diamond Free Fire", price: "Rp458.000", status: "online" },
      { name: "4000 Diamond Free Fire", price: "Rp516.000", status: "online" },
      { name: "7290 Diamond Free Fire", price: "Rp935.000", status: "online" }
    ],
    membership: [
      { name: "Membership level up pass", price: "Rp15.000", status: "online" },
      { name: "Membership Mingguan", price: "Rp29.000", status: "online" },
      { name: "Membership Bulanan", price: "Rp84.000", status: "online" },
      { name: "Boyah Pass", price: "Rp43.000", status: "online" }
    ]
  },

  ml: {
    name: "Mobile Legends",
    require: ["userId", "server"],
    serverType: "id",
    image: "assets/ml.png",
    qris: false,
    desc: "Top up diamond Mobile Legends cepat & aman",
    detail: "Tanpa login akun, layanan 24 jam",
    regular: [
      { name: "3 Diamond ML", price: "Rp1.500", status: "online" },
      { name: "5 Diamond ML", price: "Rp2.500", status: "online" },
      { name: "12(11+1) Diamond ML", price: "Rp3.800", status: "online" },
      { name: "19(17+2) Diamond ML", price: "Rp5.600", status: "online" },
      { name: "28(25+3) Diamond ML", price: "Rp8.000", status: "online" },
      { name: "36(33+3) Diamond ML", price: "Rp10.000", status: "online" },
      { name: "40(40+4) Diamond ML", price: "Rp11.500", status: "online" },
      { name: "56(51+5) Diamond ML", price: "Rp15.500", status: "online" },
      { name: "59(53+6) Diamond ML", price: "Rp16.500", status: "online" }, 
      { name: "74(69+5) Diamond ML", price: "Rp19.800", status: "online" },
      { name: "86(78+8) Diamond ML", price: "Rp21.500", status: "online" },
      { name: "100 Diamond ML", price: "Rp25.000", status: "online" },
      { name: "112 Diamond ML", price: "Rp30.000", status: "online" },
      { name: "144 Diamond ML", price: "Rp38.000", status: "online" },
      { name: "172 Diamond ML", price: "Rp44.800", status: "online" },
      { name: "185 Diamond ML", price: "Rp48.000", status: "online" },
      { name: "222 Diamond ML", price: "Rp58.000", status: "online" },
      { name: "257 Diamond ML", price: "Rp65.500", status: "online" },
      { name: "284 Diamond ML", price: "Rp73.000", status: "online" }, 
      { name: "278 Diamond ML", price: "Rp74.000", status: "online" },
      { name: "264 Diamond ML", price: "Rp75.000", status: "online" },
  { name: "296 Diamond ML", price: "Rp78.300", status: "online" },
  { name: "301 Diamond ML", price: "Rp80.300", status: "online" },
  { name: "344 Diamond ML", price: "Rp88.848", status: "online" },
  { name: "345 Diamond ML", price: "Rp90.388", status: "online" },
  { name: "355 Diamond ML", price: "Rp92.766", status: "online" },
  { name: "374 Diamond ML", price: "Rp98.008", status: "online" },
  { name: "381 Diamond ML", price: "Rp99.436", status: "online" },
  { name: "370 Diamond ML", price: "Rp100.500", status: "online" },
  { name: "384 Diamond ML", price: "Rp105.500", status: "online" },
  { name: "408 Diamond ML", price: "Rp106.058", status: "online" },
  { name: "429 Diamond ML", price: "Rp108.888", status: "online" },
  { name: "425 Diamond ML", price: "Rp110.866", status: "online" },
  { name: "514 Diamond ML", price: "Rp131.470", status: "online" },
  { name: "512 Diamond ML", price: "Rp133.507", status: "online" },
  { name: "460 Diamond ML", price: "Rp134.800", status: "online" },
  { name: "500 Diamond ML", price: "Rp135.300", status: "online" },
  { name: "522 Diamond ML", price: "Rp136.366", status: "online" },
  { name: "448 Diamond ML", price: "Rp136.800", status: "online" },
  { name: "518 Diamond ML", price: "Rp138.586", status: "online" },
  { name: "568 Diamond ML", price: "Rp142.700", status: "online" },
  { name: "601 Diamond ML", price: "Rp153.466", status: "online" },
  { name: "600 Diamond ML", price: "Rp154.156", status: "online" },
  { name: "642 Diamond ML", price: "Rp173.300", status: "online" },
  { name: "706 Diamond ML", price: "Rp180.192", status: "online" },
  { name: "712 Diamond ML", price: "Rp181.565", status: "online" },
  { name: "717 Diamond ML", price: "Rp182.995", status: "online" },
  { name: "750 Diamond ML", price: "Rp198.378", status: "offline" },
  { name: "875 Diamond ML", price: "Rp219.098", status: "online" },
  { name: "965 Diamond ML", price: "Rp245.239", status: "online" },
  { name: "963 Diamond ML", price: "Rp245.248", status: "online" },
  { "name": "1050 Diamond ML", "price": "Rp267.625", "status": "online" },
  { "name": "1136 Diamond ML", "price": "Rp288.034", "status": "online" },
  { "name": "1134 Diamond ML", "price": "Rp288.425", "status": "online" },
  { "name": "1139 Diamond ML", "price": "Rp289.854", "status": "online" },
  { "name": "1159 Diamond ML", "price": "Rp294.616", "status": "online" },
  { "name": "1164 Diamond ML", "price": "Rp296.046", "status": "online" },
  { "name": "1183 Diamond ML", "price": "Rp300.764", "status": "online" },
  { "name": "1230 Diamond ML", "price": "Rp312.670", "status": "online" }, 
  { "name": "1368 Diamond ML", "price": "Rp347.870", "status": "online" },
{ "name": "1412 Diamond ML", "price": "Rp362.275", "status": "online" },
{ "name": "1443 Diamond ML", "price": "Rp364.019", "status": "online" },
{ "name": "1453 Diamond ML", "price": "Rp369.778", "status": "online" },
{ "name": "1507 Diamond ML", "price": "Rp380.689", "status": "online" },
{ "name": "1672 Diamond ML", "price": "Rp423.075", "status": "online" },
{ "name": "1704 Diamond ML", "price": "Rp430.651", "status": "online" },
{ "name": "1750 Diamond ML", "price": "Rp440.004", "status": "online" }, 
{ "name": "2010 Diamond ML", "price": "Rp478.017", "status": "online" },
{ "name": "2180 Diamond ML", "price": "Rp521.832", "status": "online" },
{ "name": "2199 Diamond ML", "price": "Rp527.071", "status": "online" },
{ "name": "2195 Diamond ML", "price": "Rp531.798", "status": "online" },
{ "name": "2350 Diamond ML", "price": "Rp565.996", "status": "online" },
{ "name": "2380 Diamond ML", "price": "Rp569.951", "status": "online" },
{ "name": "2382 Diamond ML", "price": "Rp574.049", "status": "online" },
{ "name": "2536 Diamond ML", "price": "Rp613.534", "status": "online" },
{ "name": "2578 Diamond ML", "price": "Rp620.634", "status": "online" },
{ "name": "2885 Diamond ML", "price": "Rp696.618", "status": "online" },
{ "name": "2904 Diamond ML", "price": "Rp701.858", "status": "online" },
{ "name": "3453 Diamond ML", "price": "Rp839.236", "status": "online" },
{ "name": "3481 Diamond ML", "price": "Rp846.855", "status": "online" },
{ "name": "3693 Diamond ML", "price": "Rp901.019", "status": "online" },
{ "name": "4020 Diamond ML", "price": "Rp953.233", "status": "online" },
{ "name": "4404 Diamond ML", "price": "Rp1.052.665", "status": "online" },
{ "name": "4678 Diamond ML", "price": "Rp1.119.687", "status": "online" },
{ "name": "4830 Diamond ML", "price": "Rp1.143.717", "status": "online" },
{ "name": "5372 Diamond ML", "price": "Rp1.286.334", "status": "online" },
{ "name": "5398 Diamond ML", "price": "Rp1.286.334", "status": "online" },
{ "name": "6030 Diamond ML", "price": "Rp1.429.450", "status": "online" },
{ "name": "5940 Diamond ML", "price": "Rp1.434.752", "status": "online" },
{ "name": "6001 Diamond ML", "price": "Rp1.438.347", "status": "online" },
{ "name": "6257 Diamond ML", "price": "Rp1.504.527", "status": "online" },
{ "name": "6840 Diamond ML", "price": "Rp1.618.933", "status": "online" },
{ "name": "7195 Diamond ML", "price": "Rp1.710.202", "status": "online" },
{ "name": "7660 Diamond ML", "price": "Rp1.826.669", "status": "online" },
{ "name": "7723 Diamond ML", "price": "Rp1.842.818", "status": "online" },
{ "name": "8040 Diamond ML", "price": "Rp1.904.166", "status": "online" },
{ "name": "8303 Diamond ML", "price": "Rp1.985.392", "status": "online" }
    ],
    membership: [
      { name: "1X Weekly diamond pass 220", price: "Rp29.000", status: "online" }, 
      { name: "2X Weekly diamond pass 440", price: "Rp57.000", status: "online" }, 
      { name: "3X Weekly diamond pass 660", price: "Rp84.000", status: "online" }, 
      { name: "5X Weekly Diamond Pass 1100", price: "Rp138.200", status: "online" },
      { name: "4X Weekly Diamond Pass 880", price: "Rp110.800", status: "online" },
      { name: "Mobile Legend Twilight Pass", price: "Rp145.417", status: "online" },
      { name: "Starlight Member Plus", price: "Rp195.700", status: "online" }
    ]
  },

  pubg: {
    name: "PUBG Mobile",
    require: ["userId"],
    image: "assets/pubg.png",
    qris: false,
    desc: "Top up UC PUBG Mobile cepat & aman",
    detail: "Tanpa login akun, layanan 24 jam",
    regular: [
      { name: "mobile 15 UC", price: "Rp8.000", status: "online" },
      { name: "mobile 35 UC", price: "Rp15.500", status: "online" },
      { name: "mobile 50 UC", price: "Rp16.500", status: "online" },
      { name: "mobile 70 UC", price: "Rp28.000", status: "online" },
      { name: "mobile 100 UC", price: "Rp29.500", status: "online" },
      { name: "mobile 125 UC", price: "Rp46.000", status: "online" },
      { name: "mobile 150 UC", price: "Rp47.000", status: "online" },
      { name: "mobile 200 UC", price: "Rp60.000", status: "online" },
      { name: "mobile 250 UC", price: "Rp73.000", status: "online" },
      { name: "mobile 300 UC", price: "Rp78.000", status: "online" },
      { name: "mobile 375 UC", price: "Rp82.000", status: "online" },
      
      
      
    ],
    membership: []
  },

  genshin: {
    name: "Genshin Impact",
    require: ["userId", "server"],
    serverType: "region",
    image: "assets/genshin.png",
    qris: false,
    desc: "Top up Genesis Crystal Genshin Impact cepat & aman",
    detail: "Tanpa login akun, layanan 24 jam",
    regular: [
      { name: "60 Crystal", price: "Rp12.000", status: "online" },
      { name: "60 Chronal Nexus", price: "Rp14.000", status: "online" },
      { name: "300+30 Crystal", price: "Rp55.000", status: "online" },
      { name: "980+110 Crystal", price: "Rp168.000", status: "online" },
      { name: "980+110 Chronal Nexus", price: "Rp168.000", status: "online" },
      { name: "1280+140 Genesis Crystal", price: "Rp222.000", status: "online" },
      { name: "1980+260 Genesis Crystal", price: "Rp349.000", status: "online" }
    ],
    membership: [
      { name: "Blessing of the Welkin Moon", price: "Rp55.000", status: "online" }, 
      { name: "Blessing of the Welkin Moon x2", price: "Rp109.000", status: "online" }
    ]
  },

  hok: {
    name: "Honor of Kings",
    require: ["userId"],
    image: "assets/hok.png",
    qris: false,
    desc: "Top up Tokens HOK cepat & aman",
    detail: "Tanpa login akun, layanan 24 jam",
    regular: [
      { name: "16 Tokens HOK", price: "Rp3.500", status: "offline" },
      { name: "80 Tokens HOK", price: "Rp15.000", status: "offline" },
      { name: "240 Tokens HOK", price: "Rp45.000", status: "offline" },
      { name: "400 Tokens HOK", price: "Rp73.000", status: "online" },
      { name: "560 Tokens HOK", price: "Rp103.000", status: "online" },
      { name: "800+30 Tokens HOK", price: "Rp146.000", status: "online" }
    ],
    membership: []
  },

  valorant: {
    name: "Valorant",
    require: [],
    image: "assets/valo.png",
    qris: false,
    desc: "Top up VP Valorant cepat & aman",
    detail: "Tanpa login akun, layanan 24 jam",
    regular: [
      { name: "475 VP", price: "Rp53.000", status: "online" },
      { name: "1000 VP", price: "Rp105.000", status: "online" },
      { name: "1475 VP", price: "Rp158.000", status: "online" },
      { name: "2050 VP", price: "Rp210.000", status: "online" },
      { name: "2525 VP", price: "Rp264.000", status: "online" }
    ],
    membership: []
  },

  fcmobile: {
    name: "FC Mobile",
    require: ["userId"],
    image: "assets/fcm.png",
    qris: false,
    desc: "Top up FC Points FC Mobile cepat & aman",
    detail: "Tanpa login akun, layanan 24 jam",
    regular: [
      { name: "40 FC Points", price: "Rp7.000", status: "offline" },
      { name: "39 silver", price: "Rp7.000", status: "online" },
      { name: "100 FC Points", price: "Rp16.500", status: "offline" },
      { name: "99 silver", price: "Rp16.500", status: "offline" },
      { name: "520 FC Points", price: "Rp77.000", status: "online" }, 
      { name: "999 silver", price: "Rp154.000", status: "online" }, 
      { name: "1070 silver", price: "Rp154.000", status: "online" }
    ],
    membership: []
  },

  BloodStrike: {
  name: "Blood Strike",
  require: ["userId"],
  image: "https://files.catbox.moe/7n9l3i.jpeg",
  qris: false,
  desc: "Top up Gold Blood Strike legal & aman",
  detail: "Proses cepat, 24 jam nonstop",
  regular: [
    { name: "100 Gold", price: "Rp12.500", status: "online" },
    { name: "300 Gold", price: "Rp37.000", status: "online" },
    { name: "500 Gold", price: "Rp62.000", status: "online" },
    { name: "1000 Gold", price: "Rp122.000", status: "online" },
    { name: "2000 Gold", price: "Rp242.000", status: "online" },
    { name: "5000 Gold", price: "Rp600.000", status: "online" }
  ],
  membership: []
}, 
codm: {
  name: "Call of Duty Mobile",
  require: ["userId"],
  image: "https://litter.catbox.moe/6vvyam.jpg",
  qris: false,
  desc: "Top up CP Call of Duty Mobile legal & aman",
  detail: "Proses cepat, 24 jam nonstop",
  regular: [
    { name: "31 CP", price: "Rp6.000", status: "online" },
    { name: "62 CP", price: "Rp10.000", status: "online" },
    { name: "127 CP", price: "Rp20.000", status: "online" },
    { name: "317 CP", price: "Rp46.000", status: "online" },
    { name: "634 CP", price: "Rp95.000", status: "online" },
    { name: "1373 CP", price: "Rp155.000", status: "online" },
    { name: "2059 CP", price: "Rp216.000", status: "online" }
  ],
  membership: []
}, 
  asphalt9: {
    name: "Asphalt 9",
    require: ["userId"],
    image: "assets/asphalt.png",
    qris: false,
    desc: "Top up Tokens Asphalt cepat & aman",
    detail: "Tanpa login akun, layanan 24 jam",
    regular: [
      { name: "54 Tokens Asphalt", price: "Rp14.000", status: "online" },
      { name: "149 Tokens Asphalt", price: "Rp36.000", status: "online" },
      { name: "318 Tokens Asphalt", price: "Rp70.000", status: "offline" },
      { name: "706 Tokens Asphalt", price: "Rp145.000", status: "online" },
      { name: "1498 Tokens Asphalt", price: "Rp290.000", status: "online" }
    ],
    membership: []
  }, 
magicchess: {
  name: "Magic Chess",
  require: ["userId", "serverId"],
  image: "https://files.catbox.moe/nik9nc.jpeg",
  qris: false,
  desc: "Top up Diamond Magic Chess legal & aman",
  detail: "Proses cepat, 24 jam nonstop",
  regular: [
    { name: "5 Diamond", price: "Rp1.734", status: "online" },
    { name: "12 Diamond (11+1)", price: "Rp3.677", status: "online" },
    { name: "19 Diamond (17+2)", price: "Rp5.621", status: "online" },
    { name: "28 Diamond (25+3)", price: "Rp8.238", status: "online" },
    { name: "44 Diamond (40+4)", price: "Rp12.221", status: "online" },
    { name: "59 Diamond (53+6)", price: "Rp16.205", status: "online" },
    { name: "85 Diamond (77+8)", price: "Rp23.178", status: "online" },
    { name: "170 Diamond (156+16)", price: "Rp46.085", status: "online" },
    { name: "240 Diamond (217+23)", price: "Rp65.009", status: "online" },
    { name: "296 Diamond (256+40)", price: "Rp79.974", status: "online" },
    { name: "408 Diamond (367+41)", price: "Rp109.828", status: "online" },
    { name: "568 Diamond (503+65)", price: "Rp149.691", status: "online" },
    { name: "875 Diamond (774+101)", price: "Rp234.363", status: "online" }
  ],
  membership: [
    { name: "Weekly Diamond Pass 1x", price: "Rp29.404", status: "online" }
  ]
}, 
honkai3: {
  name: "Honkai Impact 3",
  require: ["userId"],
  image: "https://files.catbox.moe/cnyij2.jpeg",
  qris: false,
  desc: "Top up Crystal Honkai Impact 3 legal & aman",
  detail: "Proses cepat, 24 jam nonstop",
  regular: [
    { name: "65 Crystal", price: "Rp10.885", status: "online" },
    { name: "330 Crystal", price: "Rp44.735", status: "online" },
    { name: "710 Crystal", price: "Rp155.280", status: "online" },
    { name: "1.430 Crystal", price: "Rp320.724", status: "online" },
    { name: "3.860 Crystal", price: "Rp779.868", status: "online" }
  ],
  membership: []
}, 
pb: {
  name: "Point Blank",
  require: ["userId"],
  image: "https://files.catbox.moe/ltaeas.jpeg",
  qris: false,
  desc: "Top up Cash Point Blank legal & aman",
  detail: "Proses cepat, 24 jam nonstop",
  regular: [
    { name: "1.200 Cash", price: "Rp10.000", status: "online" },
    { name: "2.400 Cash", price: "Rp20.000", status: "online" },
    { name: "6.000 Cash", price: "Rp49.000", status: "online" },
    { name: "12.000 Cash", price: "Rp95.500", status: "online" },
    { name: "36.000 Cash", price: "Rp293.000", status: "online" },
    { name: "60.000 Cash", price: "Rp498.000", status: "online" }
  ],
  membership: []
}, 
honkaisr: {
  name: "Honkai: Star Rail",
  require: ["userId", "serverId"],
  image: "https://files.catbox.moe/ni5glm.jpeg",
  qris: false,
  desc: "Top up Oneiric Shard Honkai: Star Rail legal & aman",
  detail: "Proses cepat, 24 jam nonstop",
  regular: [
    { name: "60 Oneiric Shard", price: "Rp13.900", status: "online" },
    { name: "300 Oneiric Shard", price: "Rp59.602", status: "online" },
    { name: "980 Oneiric Shard", price: "Rp202.255", status: "online" },
    { name: "1.980 Oneiric Shard", price: "Rp451.135", status: "online" },
    { name: "3.280 Oneiric Shard", price: "Rp688.795", status: "online" },
    { name: "6.480 Oneiric Shard", price: "Rp1.370.155", status: "online" }
  ],
  membership: [
    { name: "Supply Pass", price: "Rp60.306", status: "online" }
  ]
}, 
  roblox: {
    name: "Roblox Gift Card",
    require: ["voucher"],
    image: "https://files.catbox.moe/um0wr8.png",
    qris: false,
    desc: "Roblox Gift Card",
    detail: "tutorial redeem kunjungi website https://www.roblox.com/redeem dan pastikan masuk dengan akun roblox kalian agar gift card masuk ke akun kamu.",
    regular: [
      { name: "RGC (IDR)50.000", price: "Rp49.000", status: "online" },
      { name: "RGC (IDR)65.000", price: "Rp64.000", status: "online" },
      { name: "RGC (IDR)100.000", price: "Rp99.000", status: "offline" },
      { name: "RGC (IDR)200.000", price: "Rp199.000", status: "online" }
    ],
    membership: []
  }
};

const databaseSosmed = {
  foltik: {
    name: "Followers TikTok",
    require: ["link"],
    image: "assets/sosmed.png",
    qris: false,
    desc: "Followers TikTok murah & cepat",
    detail: "Akun bot, tidak dijamin permanen",
    items: [
      { name: "100 Followers", price: "Rp5.000", status: "online" },
      { name: "200 Followers", price: "Rp10.000", status: "online" },
      { name: "300 Followers", price: "Rp15.000", status: "online" },
      { name: "400 Followers", price: "Rp20.000", status: "online" },
      { name: "500 Followers", price: "Rp25.000", status: "online" },
      { name: "600 Followers", price: "Rp30.000", status: "online" },
      { name: "700 Followers", price: "Rp35.000", status: "online" },
      { name: "800 Followers", price: "Rp40.000", status: "online" },
      { name: "900 Followers", price: "Rp45.000", status: "online" },
      { name: "1000 Followers", price: "Rp50.000", status: "online" }
    ]
  },
  folig: {
    name: "Followers Instagram",
    require: ["link"],
    image: "assets/sosmed.png",
    qris: false,
    desc: "Followers Instagram murah & cepat",
    detail: "Akun bot, tidak dijamin permanen",
    items: [
      { name: "50 Followers", price: "Rp5.000", status: "online" },
      { name: "100 Followers", price: "Rp10.000", status: "online" },
      { name: "200 Followers", price: "Rp20.000", status: "online" },
      { name: "300 Followers", price: "Rp30.000", status: "online" },
      { name: "400 Followers", price: "Rp40.000", status: "online" },
      { name: "500 Followers", price: "Rp50.000", status: "online" },
      { name: "600 Followers", price: "Rp60.000", status: "online" },
      { name: "700 Followers", price: "Rp70.000", status: "online" },
      { name: "800 Followers", price: "Rp80.000", status: "online" },
      { name: "900 Followers", price: "Rp90.000", status: "online" }
    ]
  },
  memberwa: {
    name: "Saluran WhatsApp",
    require: ["link"],
    image: "assets/sosmed.png",
    qris: false,
    desc: "Member saluran WhatsApp instan",
    detail: "Bot/tidak aktif",
    items: [
      { name: "100 Member", price: "Rp5.000", status: "online" },
      { name: "200 Member", price: "Rp10.000", status: "online" },
      { name: "300 Member", price: "Rp15.000", status: "online" },
      { name: "400 Member", price: "Rp20.000", status: "online" },
      { name: "500 Member", price: "Rp25.000", status: "online" },
      { name: "600 Member", price: "Rp30.000", status: "online" },
      { name: "700 Member", price: "Rp35.000", status: "online" },
      { name: "800 Member", price: "Rp40.000", status: "online" },
      { name: "900 Member", price: "Rp45.000", status: "online" },
      { name: "1000 Member", price: "Rp50.000", status: "online" }
    ]
  },
  liketik: {
    name: "Like TikTok",
    require: ["link"],
    image: "assets/sosmed.png",
    qris: false,
    desc: "Like TikTok murah & cepat",
    detail: "Bot",
    items: [
      { name: "100 Like", price: "Rp1.000", status: "online" },
      { name: "200 Like", price: "Rp2.000", status: "online" },
      { name: "300 Like", price: "Rp3.000", status: "online" },
      { name: "400 Like", price: "Rp4.000", status: "online" },
      { name: "500 Like", price: "Rp5.000", status: "online" },
      { name: "600 Like", price: "Rp6.000", status: "online" },
      { name: "700 Like", price: "Rp7.000", status: "online" },
      { name: "800 Like", price: "Rp8.000", status: "online" },
      { name: "900 Like", price: "Rp9.000", status: "online" },
      { name: "1000 Like", price: "Rp10.000", status: "online" }
    ]
  },
  likeig: {
    name: "Like Instagram",
    require: ["link"],
    image: "assets/sosmed.png",
    qris: false,
    desc: "Like Instagram murah & cepat",
    detail: "Bot",
    items: [
      { name: "100 Like", price: "Rp3.000", status: "online" },
      { name: "200 Like", price: "Rp5.000", status: "online" },
      { name: "300 Like", price: "Rp8.000", status: "online" },
      { name: "400 Like", price: "Rp10.000", status: "online" },
      { name: "500 Like", price: "Rp13.000", status: "online" },
      { name: "600 Like", price: "Rp15.000", status: "online" },
      { name: "700 Like", price: "Rp18.000", status: "online" },
      { name: "800 Like", price: "Rp20.000", status: "online" },
      { name: "900 Like", price: "Rp23.000", status: "online" },
      { name: "1000 Like", price: "Rp25.000", status: "online" }
    ]
  },
  viewtik: {
    name: "View TikTok",
    require: ["link"],
    image: "assets/sosmed.png",
    qris: false,
    desc: "View TikTok murah & cepat",
    detail: "Bot",
    items: [
      { name: "1000 View", price: "Rp1.000", status: "online" },
      { name: "2000 View", price: "Rp2.000", status: "online" },
      { name: "3000 View", price: "Rp3.000", status: "online" },
      { name: "4000 View", price: "Rp4.000", status: "online" },
      { name: "5000 View", price: "Rp5.000", status: "online" },
      { name: "6000 View", price: "Rp6.000", status: "online" },
      { name: "7000 View", price: "Rp7.000", status: "online" },
      { name: "8000 View", price: "Rp8.000", status: "online" },
      { name: "9000 View", price: "Rp9.000", status: "online" },
      { name: "10000 View", price: "Rp10.000", status: "online" }
    ]
  },
  viewig: {
    name: "View Instagram",
    require: ["link"],
    image: "assets/sosmed.png",
    qris: false,
    desc: "View Instagram murah & cepat",
    detail: "Bot",
    items: [
      { name: "500 View", price: "Rp1.000", status: "online" },
      { name: "1000 View", price: "Rp2.000", status: "online" },
      { name: "2000 View", price: "Rp4.000", status: "online" },
      { name: "3000 View", price: "Rp6.000", status: "online" },
      { name: "4000 View", price: "Rp8.000", status: "online" },
      { name: "5000 View", price: "Rp10.000", status: "online" },
      { name: "6000 View", price: "Rp12.000", status: "online" },
      { name: "7000 View", price: "Rp14.000", status: "online" },
      { name: "8000 View", price: "Rp16.000", status: "online" },
      { name: "9000 View", price: "Rp18.000", status: "online" },
      { name: "10000 View", price: "Rp20.000", status: "online" }
    ]
  }
};
// databaseOther
const databaseOther = {
    WalletSS: {
    name: " Fee Convert saldo",
    require: ["phone", "nominal"],
    image: "https://files.catbox.moe/2klckj.png",
    qris: false,
    desc: "Segera Hadir",
    detail: "Belum Tersedia",
    items: [
      { name: "Allpay → Dana", price: "Rp550", status: "online" },
      { name: "Allpay → Gopay", price: "Rp800", status: "online" },
      { name: "Allpay → Ovo", price: "Rp490", status: "online" },
      { name: "Allpay → Shopeepay", price: "Rp500", status: "online" }, 
      { name: "Allpay → LinkAja", price: "Rp450", status: "online" }, 
      { name: "Allpay → e wallet apapun", price: "Rp700", status: "offline" }
    ]
  }, 
  WebJas: {
    name: "Create website Topup(lihat deskripsi)",
    require: ["voucher"],
    image: "https://files.catbox.moe/zdf9ee.jpeg",
    qris: false,
    desc: "Bisa request game apa saja,atur harga produk, free add halaman kalkulator mlbb,halaman music(req music),halaman pengumuman",
    detail: "Kami akan membuat di gmail yang baru, dan jika web selesai dibuat, maka gmail akan kami berikan ke kalian dan bisa kalian otak atik sendiri di github(mendeploy dari vercel)",
    items: [
      { name: "Buat Website Top Up Mu Sendiri", price: "Rp25.000", status: "online" }, 
      { name: "Buat Website social kaya gw", price: "Rp10.000", status: "online" }
    ]
  }
};

// databasePanel
const databasePanel = {
  panel: {
    name: "Panel Bot wa/tele",
    require: ["username"],
    image: "https://files.catbox.moe/a4jl1w.jpeg",
    qris: true,
    qty: true, 
    desc: "Panel bot whatsapp/telegram",
    detail: "Aktif selama 30 hari GARANSI FULL",
    items: [
      { name: "1GB", price: "2000", status: "online" },
      { name: "2GB", price: "3000", status: "online" },
      { name: "3GB", price: "4000", status: "online" },
      { name: "4GB", price: "5000", status: "online" },
      { name: "5GB", price: "6000", status: "online" },
      { name: "6GB", price: "7000", status: "online" },
      { name: "7GB", price: "8000", status: "online" },
      { name: "8GB", price: "9000", status: "online" },
      { name: "Unlimited", price: "10000", status: "online" }, 
      { name: "Reseller public", price: "15000", status: "online" },
      { name: "Reseller private", price: "20000", status: "online" }, 
      { name: "Admin panel public", price: "20000", status: "online" }
    ],
    membership: []
  },
  vps1: {
    name: "VPS DIGITAL OCEAN",
    require: ["voucher"],
    image: "https://files.catbox.moe/n8f64z.png",
    qris: false,
    qty: true, 
    desc: "VPS Digital Ocean",
    detail: "Aktif 1bulan Garansi 25h,no instalasi apapun(kosongan)",
    items: [
      { name: "VPS R2C2 [LEGAL]", price: "25.000", status: "online" }, 
      { name: "VPS R4C2 [LEGAL]", price: "30.000", status: "online" }, 
      { name: "VPS R8C4 [LEGAL]", price: "35.000", status: "online" }, 
      { name: "VPS R16C4 [LEGAL]", price: "40.000", status: "offline" }
    ],
    membership: []
  }, 
  do1: {
    name: "AKUN DIGITAL OCEAN",
    require: ["voucher"],
    image: "https://files.catbox.moe/n8f64z.png",
    qris: false,
    qty: true, 
    desc: "DIGITAL OCEAN GMAIL MADE AWET TAHAN BANTING",
    detail: "NOTE : NO GARANSI, BUY=PAHAM!",
    items: [
      { name: "D.O Cloud BILL VCC 3 Droplet", price: "100.000", status: "online" }, 
      { name: "D.O Cloud BILL VCC 10 Droplet", price: "130.000", status: "online" }, 
      { name: "D.O Cloud BILL GPAY 10 Droplet", price: "120.000", status: "offline" }
    ],
    membership: []
  }
};

// databaseHiburan
const databaseHiburan = {
  DuoLingO: {
    name: "Duolingo",
    require: ["voucher"], // Voucher di sini bisa diasumsikan sebagai no WA/Email
    image: "https://files.catbox.moe/fnhfpi.png", // Ganti dengan link icon netflix
    qris: false,
    qty: true, 
    desc: "Duolingo title",
    detail: "",
    items: [
      { name: "duostu", price: "Rp7.000", status: "online" },
      { name: "Duolingo Super 1 bulan", price: "Rp5.000", status: "online" }
    ]
  },
  CapCuT: {
    name: "Capcut Pro",
    require: ["voucher"],
    image: "https://files.catbox.moe/vyaopt.png", // Ganti dengan link icon spotify
    qris: false,
    qty: true, 
    desc: "Capcut Pro",
    detail: "",
    items: [
      { name: "Capcut pro 7 hari", price: "Rp3.000", status: "online" },
      { name: "Capcut Pro 1 Bulan", price: "Rp8.000", status: "online" },
      { name: "Capcut 6 Bulan", price: "Rp15.000", status: "offline" }
    ]
  },
  CanVa: {
    name: "Canva Premium",
    require: ["phone"],
    image: "https://files.catbox.moe/3n8ds6.jpg", // Ganti dengan link icon disney
    qris: false,
    qty: true, 
    desc: "Akun Canva Premium",
    detail: "",
    items: [
      { name: "Canva Premium 1 bulan", price: "Rp3.000", status: "online" },
      { name: "Canva Premium 1 tahun", price: "6.000", status: "online" },
      { name: "Canva Premium Edukasi Lifetime", price: "Rp8.000", status: "online" },
      { name: "Canva Premium Admin Edukasi Lifetime", price: "Rp10.000", status: "offline" },
     { name: "Canva Head 1 bulan", price: "Rp12.000", status: "online" }
    ]
  },
  youtube: {
    name: "YouTube Premium",
    require: ["voucher"],
    image: "https://files.catbox.moe/1ubvar.png", // Ganti dengan link icon youtube
    qris: false,
    qty: true, 
    desc: "Bebas iklan & putar di latar belakang",
    detail: "Sistem invite family atau akun baru.",
    items: [
      { name: "YT Premium 1 Bulan famplan (via inv)", price: "Rp8.000", status: "online" },
      { name: "YT Premium 1 Bulan Indplan (private)", price: "Rp12.000", status: "online" },
      { name: "YT Premium HEAD", price: "Rp15.000", status: "offline" }
    ]
  }, 
  alighm: {
    name: "Alight Motion",
    require: ["voucher"],
    image: "https://files.catbox.moe/f4fmn6.png",
    qris: true,
    qty: true, 
    desc: "berbasis akun bukan apk mod",
    detail: "bergaransi 3 bulan setelah pembelian, aktif sampai januari 2027. made by gmail generator",
    items: [
      { name: "AM prem Sharing EXP Januari 2027", price: "Rp500", status: "offline" },
      { name: "AM prem Private EXP Januari 2027", price: "Rp3.000", status: "online" }
    ],
    membership: []
  }, 
  viu: {
    name: "VIU DRAMA",
    require: ["voucher"],
    image: "https://files.catbox.moe/5x79aa.png",
    qris: true,
    qty: true, 
    desc: "login pakai telepon+pw dari admin",
    detail: "bergaransi setelah pembelian",
    items: [
      { name: "Viu 1 bulan Prem", price: "Rp500", status: "online" },
      { name: "Viu 3 bulan Prem", price: "Rp1.000", status: "online" },
      { name: "Viu 4 bulan Prem", price: "Rp1.500", status: "online" },
      { name: "Viu 1 tahun Prem", price: "Rp2.500", status: "online" },
      { name: "Viu Lifetime (1th+) Prem", price: "Rp3.000", status: "online" }
    ],
    membership: []
  }, 
  GemIn1: {
    name: "Gemini Pro",
    require: ["voucher"],
    image: "https://files.catbox.moe/33783p.jpeg",
    qris: false,
    qty: true, 
    desc: "boleh pakai email dari seller/buyer",
    detail: "bergaransi 1 bulan setelah pembelian",
    items: [
      { name: "Gemini Pro 1 bulan", price: "Rp5.000", status: "online" },
      { name: "Method gemini pro", price: "Rp10.000", status: "online" }
    ],
    membership: []
  },
  iB1sPx: {
    name: "Ibis Paint Pro",
    require: ["voucher"],
    image: "https://files.catbox.moe/e9ft9u.jpg",
    qris: false,
    qty: true, 
    desc: "boleh pakai email dari seller/buyer",
    detail: "bergaransi 1 bulan setelah pembelian",
    items: [
      { name: "Ibis Paint X Pro 7 hari", price: "Rp3.000", status: "online" },
      { name: "Ibis Paint X Pro 1 bulan", price: "Rp7.000", status: "online" }
    ],
    membership: []
  }
  
};

