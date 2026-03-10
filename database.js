const database = {

  // 1
  ff: {
    name: "Free Fire",
    type: "id",
    image: "https://seeklogo.com/images/F/free-fire-logo-672E1756F3-seeklogo.com.png",
    regular: [
      { name: "5 Diamond", price: "Rp1.130" },
      { name: "12 Diamond", price: "Rp2.070" },
      { name: "50 Diamond", price: "Rp6.638" },
      { name: "70 Diamond", price: "Rp9.200" },
      { name: "140 Diamond", price: "Rp18.000" },
      { name: "355 Diamond", price: "Rp45.000" },
      { name: "720 Diamond", price: "Rp90.000" },
      { name: "1440 Diamond", price: "Rp180.000" },
      { name: "2880 Diamond", price: "Rp360.000" },
      { name: "6000 Diamond", price: "Rp720.000" }
    ],
    membership: []
  },

  // 2
  ml: {
    name: "Mobile Legends",
    type: "idserver",
    image: "https://seeklogo.com/images/M/mobile-legends-bang-bang-logo-DD3B317A12-seeklogo.com.png",
    regular: [
      { name: "86 Diamond", price: "Rp20.000" },
      { name: "172 Diamond", price: "Rp40.000" },
      { name: "257 Diamond", price: "Rp60.000" },
      { name: "344 Diamond", price: "Rp80.000" },
      { name: "430 Diamond", price: "Rp100.000" },
      { name: "515 Diamond", price: "Rp120.000" },
      { name: "600 Diamond", price: "Rp140.000" },
      { name: "720 Diamond", price: "Rp170.000" },
      { name: "860 Diamond", price: "Rp200.000" },
      { name: "1000 Diamond", price: "Rp230.000" }
    ],
    membership: []
  },

  // 3
  pubg: {
    name: "PUBG Mobile",
    type: "voucher",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/PUBG_Mobile_Logo.png",
    regular: [
      { name: "60 UC", price: "Rp15.000" },
      { name: "300 UC", price: "Rp75.000" },
      { name: "600 UC", price: "Rp140.000" },
      { name: "1200 UC", price: "Rp280.000" },
      { name: "1800 UC", price: "Rp420.000" },
      { name: "2500 UC", price: "Rp580.000" },
      { name: "3000 UC", price: "Rp700.000" },
      { name: "4000 UC", price: "Rp920.000" },
      { name: "5000 UC", price: "Rp1.140.000" },
      { name: "6000 UC", price: "Rp1.360.000" }
    ],
    membership: []
  },

  // 4
  genshin: {
    name: "Genshin Impact",
    type: "uid",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/Genshin_Impact_cover_art.jpg",
    regular: [
      { name: "60 Genesis Crystal", price: "Rp16.000" },
      { name: "300 Genesis Crystal", price: "Rp79.000" },
      { name: "600 Genesis Crystal", price: "Rp155.000" },
      { name: "1200 Genesis Crystal", price: "Rp310.000" },
      { name: "1800 Genesis Crystal", price: "Rp460.000" },
      { name: "2700 Genesis Crystal", price: "Rp680.000" },
      { name: "3280 Genesis Crystal", price: "Rp820.000" },
      { name: "6480 Genesis Crystal", price: "Rp1.600.000" },
      { name: "9800 Genesis Crystal", price: "Rp2.400.000" },
      { name: "19800 Genesis Crystal", price: "Rp4.800.000" }
    ],
    membership: []
  },

  // 5
  roblox: {
    name: "Roblox",
    type: "id",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Roblox_Logo.png",
    regular: [
      { name: "400 Robux", price: "Rp55.000" },
      { name: "800 Robux", price: "Rp110.000" },
      { name: "1700 Robux", price: "Rp220.000" },
      { name: "4500 Robux", price: "Rp580.000" },
      { name: "10000 Robux", price: "Rp1.120.000" },
      { name: "22500 Robux", price: "Rp2.400.000" },
      { name: "50000 Robux", price: "Rp5.100.000" },
      { name: "100000 Robux", price: "Rp10.000.000" },
      { name: "150000 Robux", price: "Rp14.800.000" },
      { name: "200000 Robux", price: "Rp19.500.000" }
    ],
    membership: []
  },

  // 6
  valorant: {
    name: "Valorant",
    type: "voucher",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Valorant_logo.png",
    regular: [
      { name: "100 VP", price: "Rp15.000" },
      { name: "500 VP", price: "Rp70.000" },
      { name: "1000 VP", price: "Rp130.000" },
      { name: "1700 VP", price: "Rp210.000" },
      { name: "2500 VP", price: "Rp300.000" },
      { name: "4000 VP", price: "Rp460.000" },
      { name: "6000 VP", price: "Rp650.000" },
      { name: "10000 VP", price: "Rp1.000.000" },
      { name: "17000 VP", price: "Rp1.600.000" },
      { name: "25000 VP", price: "Rp2.400.000" }
    ],
    membership: []
  },

  // 7
  clashroyale: {
    name: "Clash Royale",
    type: "id",
    image: "https://seeklogo.com/images/C/clash-royale-logo-8F746DDF82-seeklogo.com.png",
    regular: [
      { name: "500 Gems", price: "Rp50.000" },
      { name: "1000 Gems", price: "Rp90.000" },
      { name: "2500 Gems", price: "Rp200.000" },
      { name: "5000 Gems", price: "Rp380.000" },
      { name: "7500 Gems", price: "Rp550.000" },
      { name: "10000 Gems", price: "Rp700.000" },
      { name: "15000 Gems", price: "Rp1.000.000" },
      { name: "20000 Gems", price: "Rp1.300.000" },
      { name: "30000 Gems", price: "Rp1.900.000" },
      { name: "50000 Gems", price: "Rp3.000.000" }
    ],
    membership: []
  },

  // 8
  fortnite: {
    name: "Fortnite",
    type: "id",
    image: "https://seeklogo.com/images/F/fortnite-logo-2841FE4B54-seeklogo.com.png",
    regular: [
      { name: "1000 V-Bucks", price: "Rp140.000" },
      { name: "2800 V-Bucks", price: "Rp350.000" },
      { name: "5000 V-Bucks", price: "Rp600.000" },
      { name: "7500 V-Bucks", price: "Rp850.000" },
      { name: "10000 V-Bucks", price: "Rp1.100.000" },
      { name: "13500 V-Bucks", price: "Rp1.500.000" },
      { name: "20000 V-Bucks", price: "Rp2.200.000" },
      { name: "30000 V-Bucks", price: "Rp3.000.000" },
      { name: "40000 V-Bucks", price: "Rp3.800.000" },
      { name: "50000 V-Bucks", price: "Rp4.500.000" }
    ],
    membership: []
  },

  // 9
  apex: {
    name: "Apex Legends",
    type: "voucher",
    image: "https://seeklogo.com/images/A/apex-legends-logo-F8559F6158-seeklogo.com.png",
    regular: [
      { name: "100 Apex Coins", price: "Rp25.000" },
      { name: "300 Apex Coins", price: "Rp60.000" },
      { name: "500 Apex Coins", price: "Rp120.000" },
      { name: "1000 Apex Coins", price: "Rp220.000" },
      { name: "1500 Apex Coins", price: "Rp320.000" },
      { name: "2400 Apex Coins", price: "Rp520.000" },
      { name: "3500 Apex Coins", price: "Rp720.000" },
      { name: "5000 Apex Coins", price: "Rp1.000.000" },
      { name: "7000 Apex Coins", price: "Rp1.300.000" },
      { name: "10000 Apex Coins", price: "Rp1.800.000" }
    ],
    membership: []
  },

  // 10
  dota2: {
    name: "Dota 2",
    type: "voucher",
    image: "https://seeklogo.com/images/D/dota-2-logo-5FEE389871-seeklogo.com.png",
    regular: [
      { name: "500 Dota Points", price: "Rp50.000" },
      { name: "1000 Dota Points", price: "Rp90.000" },
      { name: "2000 Dota Points", price: "Rp160.000" },
      { name: "3000 Dota Points", price: "Rp230.000" },
      { name: "5000 Dota Points", price: "Rp360.000" },
      { name: "8000 Dota Points", price: "Rp550.000" },
      { name: "10000 Dota Points", price: "Rp680.000" },
      { name: "15000 Dota Points", price: "Rp980.000" },
      { name: "20000 Dota Points", price: "Rp1.200.000" },
      { name: "30000 Dota Points", price: "Rp1.700.000" }
    ],
    membership: []
  },

  // … **lanjut 20 game berikutnya**
};