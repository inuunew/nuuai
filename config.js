/* =====================================================================
   CONFIG.JS : semua pengaturan toko ada di sini.
   Ubah nama, nomor WhatsApp, banner, kategori, kontak, pengumuman, dan musik
   tanpa menyentuh file lain. Produk dan harga ada di data.js.
   ===================================================================== */
const CONFIG = {

  /* ---------- Identitas toko ---------- */
  nama: "INUU MARKET",
  tagline: "Menyediakan Berbagai Layanan",
  logo: "https://files.catbox.moe/hfc052.png",
  splashDesc: "Top Up Game • Hosting • Digital Product",
  whatsapp: "6283160556330",              // nomor admin, format 62xxxxxxxxxx

  /* ---------- Pembayaran ---------- */
  qrisGambar: "qris.jpg",                 // taruh file QRIS toko di folder yang sama dengan index.html
  biayaQris: 200,                         // biaya admin flat untuk "QRIS Instan" (isi 0 jika gratis)

  /* ---------- Beranda ---------- */
  banner: [
    "https://files.catbox.moe/qg3moz.png",
    "https://files.catbox.moe/mme683.png"
  ],
  teksJalan: "Selamat datang di InuuMarket • Top Up Game Murah & Cepat • Promo Spesial Diskon Besar • Proses Otomatis 24 Jam",
  keunggulan: [
    { icon: "bolt",   teks: "Proses cepat" },
    { icon: "gem",    teks: "Harga terjangkau" },
    { icon: "clock",  teks: "Layanan 24 jam" },
    { icon: "shield", teks: "Garansi pembelian" }
  ],

  /* ---------- Judul kelompok kategori di beranda ---------- */
  grup: {
    utama:    { judul: "Daftar Layanan",   sub: "Pilih kategori layanan utama" }
  },

  /* ---------- Kategori (card di beranda) ----------
     Mau tambah card kategori baru? Buat kumpulan produknya di data.js,
     lalu tambahkan SATU baris seperti di bawah.
     icon  : nama ikon bawaan (lihat daftar di README) atau emoji
     grup  : "utama" atau "tambahan"
     Urutan baris = urutan tampil. */
  kategori: [
    { id: "game",    label: "Top Up Games",    icon: "gamepad", grup: "utama",
      judul: "Top Up Game", sub: "Layanan 24 jam harga terjangkau dan aman", data: database },
    { id: "hosting", label: "Hosting Product", icon: "server",  grup: "utama",
      judul: "Hosting Area", sub: "Layanan Hosting Panel Pterodactyl/VPS/Digital Ocean", data: databasePanel },
    { id: "hiburan", label: "Akun Premium",    icon: "crown",   grup: "utama",
      judul: "Akun Premium", sub: "Langganan premium berbasis akun (BUKAN APK MOD), beli = sabar", data: databaseHiburan },
    { id: "sosmed",  label: "Layanan Sosmed",  icon: "users",   grup: "utama",
      judul: "Layanan Sosmed", sub: "Buka tab Info lalu pilih \"Apa itu Refill\" untuk penjelasan", data: databaseSosmed },
    { id: "other",   label: "Produk Tambahan", icon: "box",     grup: "utama",
      judul: "Jasa digital", sub: "Produk Anak Tiri", data: databaseOther }
  ],

  /* ---------- Isian yang diminta ke pembeli ----------
     Dipakai lewat require: [...] di data.js. Mau kolom baru? Tambah satu baris di sini. */
  field: {
    userId:   { label: "User ID / ID Player", ph: "Contoh: 12345678", mode: "numeric" },
    username: { label: "Username",            ph: "Masukkan username" },
    phone:    { label: "Nomor Tujuan",        ph: "08xxxxxxxxxx", type: "tel" },
    link:     { label: "Link Tujuan",         ph: "https://...",  type: "url" },
    server:   { label: "Server / Zone",       ph: "Server ID", mode: "numeric" },
    serverId: { label: "Server ID",           ph: "Masukkan Server ID", mode: "numeric" },
    nominal:  { label: "Nominal Topup",       ph: "Contoh: 1000", mode: "numeric",
                hint: "Masukkan nominal yang ingin di-convert" },
    voucher:  { info: "Informasi lebih lanjut akan dikonfirmasi admin setelah pembayaran." }
  },
  region: ["Asia", "America", "Europe", "TW/HK/MO"],   // pilihan server untuk produk serverType: "region"

  /* ---------- Halaman Info ---------- */
  kontak: [
    { icon: "chat",      judul: "WhatsApp Admin", sub: "Fast Response 24/7",       url: "https://wa.me/6283160556330", utama: true },
    { icon: "megaphone", judul: "Saluran Admin",  sub: "Berisi informasi gabut",   url: "https://whatsapp.com/channel/0029Vb84hZx7oQhYjly35b0V" },
    { icon: "globe",     judul: "Web Utama",      sub: "Website Utama Inuu",       url: "https://inuutyzdev.web.id" }
  ],
  faq: [
    { judul: "Jam online admin",
      isi: "Admin Top Up online pukul 06:00 - 22:00." },
    { judul: "Apa itu Refill di layanan sosmed?",
      isi: "Refill, atau garansi isi ulang, adalah fitur yang memungkinkan Anda mendapatkan pengisian ulang untuk layanan yang telah dipesan jika terjadi penurunan pada layanan tersebut. Harap diperhatikan bahwa tidak semua layanan di InuuMarket memiliki opsi refill. Layanan yang mendukung fitur ini akan mencantumkan keterangan \"Refill\" dalam nama atau deskripsinya." },
    { judul: "Sambutan",
      isi: "Selamat datang di Inuu Market! Nikmati layanan transaksi cepat dan aman." }
  ],

  /* ---------- Pengumuman (yang terbaru taruh paling bawah) ---------- */
  pengumuman: [
  {
    title: "InuuMarket Admin",
    date: "18 MARET 2026",
    type: "INFO",
    image: "https://files.catbox.moe/tv1rv6.jpeg",
    banner: "https://files.catbox.moe/b629ct.png",
    desc: "Liburan dimulai dengan membuat web ini karna gabut. ",
    tags: "#InuuTyzDev"
  }, 
  {
    title: "InuuMarket Admin",
    date: "21 MARET 2026",
    type: "INFO",
    image: "https://files.catbox.moe/tv1rv6.jpeg",
    banner: "",
    desc: "Selamat hari raya idul Fitri mohon maaf lahir batin",
    tags: "#InuuTyzDev"
  },
  {
    title: "InuuMarket Admin",
    date: "31 MARET 2026",
    type: "INFO",
    image: "https://files.catbox.moe/tv1rv6.jpeg",
    banner: "https://files.catbox.moe/b629ct.png",
    desc: "Liburan selesai...Moga aja masih ada niat lanjutin soalnya banyak kegiatan juga apalagi mau ujian akhir,yaa.... upgrade dikit-dikit la.",
    tags: "#InuuTyzDev"
  },
  {
    title: "InuuMarket Admin",
    date: "02 APRIL 2026",
    type: "INFO",
    image: "https://files.catbox.moe/tv1rv6.jpeg",
    banner: "",
    desc: "Music page telah ditambahkan, udah bisa dengerin music nih...boleh req nambah lagu loh ke admin...",
    tags: "#InuuTyzDev"
  },
  {
    title: "InuuMarket Admin",
    date: "04 APRIL 2026",
    type: "INFO",
    image: "https://files.catbox.moe/tv1rv6.jpeg",
    banner: "",
    desc: "Update Sistem SPA(Single Page Aplication)! website lebih lancar saat pindah halaman dibanding sebelumnya,music tidak mati walau pindah halaman/hp mati/keluar chrome",
    tags: "#InuuTyzDev"
  },
  {
    title: "InuuMarket Admin",
    date: "05 APRIL 2026",
    type: "INFO",
    image: "https://files.catbox.moe/tv1rv6.jpeg",
    banner: "",
    desc: "Update halaman Kalkulator MLBB buat yang bingung kalo ngedraw skin legend ama zodiac diamond nya bakal cukup tidak",
    tags: "#InuuTyzDev"
  }, 
    {
    title: "InuuMarket Admin",
    date: "08 NOVEMBER 2026",
    type: "INFO",
    image: "https://files.catbox.moe/tv1rv6.jpeg",
    banner: "",
    desc: "Update Ui",
    tags: "#InuuTyzDev"
  }

],

  /* ---------- Musik ---------- */
  kaset: "https://files.catbox.moe/yhxf46.png",
  musik: [
    {
        "title": "Secret Base ~Kimi ga Kureta Mono~ (10 years after Ver.)",
        "artist": "Ai Kayano, Haruka Tomatsu, Saori Hayami",
        "src": "https://files.catbox.moe/v7kp0w.mp3",
        "cover": "https://files.catbox.moe/3o28pu.jpeg",
        "lyrics": [
            {
                "time": 0,
                "text": "Anohana"
            }
        ]
    },
    {
        "title": "Orange",
        "artist": "By 7!!",
        "src": "https://files.catbox.moe/6p85p5.mp3",
        "cover": "https://files.catbox.moe/3o28pu.jpeg",
        "lyrics": [
            {
                "time": 0,
                "text": "Lyrics tidak tersedia"
            }
        ]
    },
    {
        "title": "Your Name - Nandemonaiya",
        "artist": "RADWIMPS",
        "src": "https://files.catbox.moe/o15a0i.mp3",
        "lyrics": [
            {
                "time": 0,
                "text": "Lyrics tidak tersedia"
            }
        ]
    },
    {
        "title": "Your Name - Sparkle",
        "artist": "RADWIMPS",
        "src": "https://files.catbox.moe/1hn4at.mp3",
        "lyrics": [
            {
                "time": 0,
                "text": "Lyrics tidak tersedia"
            }
        ]
    },
    {
        "title": " Kamado Tanjiro no Uta",
        "artist": "Nami Nakagawa",
        "src": "https://files.catbox.moe/cm4zl9.mp3",
        "lyrics": [
            {
                "time": 0,
                "text": "Lyrics tidak tersedia"
            }
        ]
    },
    {
        "title": "Luka Negara - Bertahta Diatas Tanah Mereka",
        "artist": "ft.Fujita Haruka",
        "src": "https://files.catbox.moe/b3heav.mp3",
        "lyrics": [
            {
                "time": 0,
                "text": "Lyrics tidak tersedia"
            }
        ]
    },
    {
        "title": "Lemon",
        "artist": "Kenshi Yonezu",
        "src": "https://files.catbox.moe/rfgm02.mp3",
        "lyrics": [
            {
                "time": 0,
                "text": "Lyrics tidak tersedia"
            }
        ]
    },
    {
        "title": "Cash Cash - Hero",
        "artist": "Christine Perri",
        "src": "https://files.catbox.moe/nw1tn9.mp3",
        "lyrics": [
            {
                "time": 0,
                "text": "Lyrics tidak tersedia"
            }
        ]
    },
    {
        "title": "Alone",
        "artist": "Marsmello",
        "src": "https://files.catbox.moe/5sjanf.mp3",
        "lyrics": [
            {
                "time": 0,
                "text": "Lyrics tidak tersedia"
            }
        ]
    },
    {
        "title": "On My Way",
        "artist": "Alan Walker",
        "src": "https://files.catbox.moe/tgjkvy.mp3",
        "lyrics": [
            {
                "time": 0,
                "text": "Lyrics tidak tersedia"
            }
        ]
    }
]
};
