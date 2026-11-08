/* =====================================================================
   APP.JS : satu mesin untuk seluruh website.
   Biasanya TIDAK perlu diubah. Produk -> data.js, pengaturan -> config.js.
   Isi: ikon, katalog, halaman (beranda/kategori/musik/kalkulator/info),
        sheet detail + checkout + invoice QRIS, pemutar musik.
   ===================================================================== */
(function () {
'use strict';
const C = CONFIG;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const num = (s) => parseInt(String(s).replace(/\D/g, ''), 10) || 0;
const money = (n) => 'Rp' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const hue = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360; return h; };
const mono = (n) => { const w = n.replace(/[^A-Za-z0-9 ]/g, '').trim().split(/\s+/); return (w.length > 1 ? w[0][0] + w[1][0] : (w[0] || '?').slice(0, 2)).toUpperCase(); };
const nowText = () => new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' });

/* ---------- ikon bawaan (nama dipakai di config.js) ---------- */
const IC = {
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
  music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  calc: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 11h2M14 11h2M8 15h2M14 15h2M8 19h2M14 19h2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  gamepad: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4M16 11.5h.01M18.5 13.5h.01"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  crown: '<path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.8 0 4.5 1.9 4.5 4.5"/>',
  box: '<path d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5z"/><path d="M3 7.5L12 12l9-4.5M12 12v9"/>',
  ticket: '<path d="M3 7h18v3a2 2 0 000 4v3H3v-3a2 2 0 000-4z"/><path d="M14 8v8"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chat: '<path d="M21 12a8 8 0 01-12 7l-5 1.5L5 16a8 8 0 1116-4z"/>',
  chevron: '<path d="M9 5l7 7-7 7"/>',
  play: '<path d="M7 4l13 8-13 8z"/>',
  pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
  prev: '<path d="M19 5l-9 7 9 7z"/><path d="M6 5v14"/>',
  next: '<path d="M5 5l9 7-9 7z"/><path d="M18 5v14"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v4h16v-4"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M14 21h3M21 17v4"/>',
  megaphone: '<path d="M3 11v3l12 5V6z"/><path d="M15 9a3 3 0 010 6M6 14l1 5h3l-1-4"/>',
  headset: '<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 01-10 0z"/><path d="M7 6H4v2a3 3 0 003 3M17 6h3v2a3 3 0 01-3 3M12 14v4M8 21h8M10 18h4"/>',
  wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3v7M12 14v7M3 12h7M14 12h7"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  gem: '<path d="M6 3h12l3 5-9 13L3 8z"/><path d="M3 8h18M9 8l3 13 3-13"/>',
  chart: '<path d="M4 20V4M4 20h16"/><path d="M8 16l4-5 3 3 5-7"/>',
  refresh: '<path d="M4 4v6h6"/><path d="M5.5 14a7.5 7.5 0 101.5-7.5L4 10"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.2a1 1 0 00.8.8h9.6a1 1 0 001-.8L21 7H6"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'
};
const FILL = { play: 1, pause: 1 };
const ic = (n, c) => {
  const d = IC[n];
  if (!d) return '<span class="ic-txt">' + esc(n || '') + '</span>';
  const f = FILL[n];
  return '<svg class="ic' + (c ? ' ' + c : '') + '" viewBox="0 0 24 24" fill="' + (f ? 'currentColor' : 'none') + '" stroke="' + (f ? 'none' : 'currentColor') + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
};

/* ---------- katalog: baca semua kategori dari config + data ---------- */
const products = [];
const byUid = {};
C.kategori.forEach((c) => {
  Object.keys(c.data || {}).forEach((key) => {
    const p = c.data[key];
    const mk = (list, gi) => list.map((it, i) => ({ id: gi + '-' + i, name: String(it.name).trim(), price: num(it.price), on: it.status === 'online' }));
    const groups = [];
    const main = p.regular || p.items || [];
    if (main.length) groups.push({ label: p.regular ? 'Reguler' : 'Pilihan', items: mk(main, groups.length) });
    if (p.membership && p.membership.length) groups.push({ label: 'Membership', items: mk(p.membership, groups.length) });
    let all = []; groups.forEach((g) => { all = all.concat(g.items); });
    const on = all.filter((i) => i.on);
    const pool = on.length ? on : all;
    const name = String(p.name).trim();
    const o = {
      uid: c.id + ':' + key, cat: c.id, name, desc: p.desc || '', detail: p.detail || '', image: p.image || '',
      req: p.require || [], serverType: p.serverType || '', qris: !!p.qris, qty: !!p.qty && p.qty !== 'inactive',
      pop: p.premium === true || p.populer === true,
      groups, total: all.length, avail: on.length,
      from: pool.length ? Math.min.apply(null, pool.map((i) => i.price)) : 0,
      soon: /segera hadir/i.test(p.desc || '') || /belum tersedia/i.test(p.detail || ''),
      hue: hue(name), mono: mono(name),
      search: (name + ' ' + (p.desc || '') + ' ' + all.map((i) => i.name).join(' ')).toLowerCase()
    };
    products.push(o); byUid[o.uid] = o;
  });
});
const findItem = (p, id) => { for (const g of p.groups) for (const i of g.items) if (i.id === id) return i; return null; };
const catById = (id) => C.kategori.find((c) => c.id === id);

const decorate = (root) => root.querySelectorAll('[data-h]').forEach((el) => el.style.setProperty('--h', el.dataset.h));
const thumb = (p, sm) => '<span class="thumb' + (sm ? ' sm' : '') + '" data-h="' + p.hue + '"><span class="mono">' + esc(p.mono) + '</span>' +
  (p.image ? '<img src="' + esc(p.image) + '" alt="" loading="lazy">' : '') +
  (sm ? '' : (p.qris ? '<span class="bdg q">QRIS</span>' : '') + (p.pop ? '<span class="bdg p">Populer</span>' : '') +
    (p.soon || p.avail === 0 ? '<span class="bdg o">' + (p.soon ? 'Segera' : 'Kosong') + '</span>' : '')) + '</span>';
const card = (p) => '<button class="pcard' + (p.soon || p.avail === 0 ? ' dim' : '') + '" type="button" data-uid="' + esc(p.uid) + '">' + thumb(p) +
  '<span class="pc-b"><span class="pc-n">' + esc(p.name) + '</span><span class="pc-m">' + p.total + ' pilihan</span><span class="tag">mulai ' + money(p.from) + '</span></span></button>';
const grid = (list, emptyMsg) => list.length ? '<div class="pgrid">' + list.map(card).join('') + '</div>' : '<p class="empty">' + emptyMsg + '</p>';

let toastT;
const toast = (m, bad) => { const t = $('toast'); t.textContent = m; t.className = 'toast show' + (bad ? ' bad' : ''); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), bad ? 3600 : 2200); };

/* ---------- keranjang (disimpan di browser) ---------- */
const CART_KEY = 'inuu-cart';
let cart = [];
try { cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch (e) { cart = []; }
if (!Array.isArray(cart)) cart = [];
cart = cart.filter((l) => {
  const p = l && byUid[l.uid], it = p && findItem(p, l.itemId);
  return !!(it && it.on && Array.isArray(l.fields));
}).map((l) => ({
  uid: l.uid, itemId: l.itemId, qty: Math.max(1, Math.min(999, parseInt(l.qty, 10) || 1)), nom: parseInt(l.nom, 10) || 0,
  fields: l.fields.map((f) => ({ k: String(f.k), label: String(f.label), value: String(f.value) }))
}));
function cartBadge() {
  const n = cart.reduce((s, l) => s + (byUid[l.uid].qty ? l.qty : 1), 0), b = $('cartBtn');
  if (!b) return;
  b.innerHTML = ic('cart') + (n ? '<span class="cbadge">' + (n > 99 ? '99+' : n) + '</span>' : '');
  b.setAttribute('aria-label', 'Keranjang' + (n ? ' (' + n + ' item)' : ' kosong'));
}
function saveCart() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* abaikan */ } cartBadge(); }
function lineCalc(l) {
  const p = byUid[l.uid], it = findItem(p, l.itemId), q = p.qty ? l.qty : 1, unit = it.price, nom = l.nom || 0;
  return { l, p, it, q, unit, sub: unit * q, nom, total: unit * q + nom };
}
function orderCalc(lines, pay) {
  const cs = lines.map(lineCalc), fee = pay === 'qris' ? (C.biayaQris || 0) : 0;
  return { cs, fee, total: cs.reduce((s, c) => s + c.total, 0) + fee };
}
const allQris = (lines) => lines.length > 0 && lines.every((l) => byUid[l.uid].qris);

/* ---------- halaman: beranda ---------- */
let sliderTimer = null;
function homeHTML() {
  const slides = (C.banner || []).map((src, i) => '<div class="slide"><span class="sl-fb">' + esc(C.nama) + '</span><img src="' + esc(src) + '" alt="Banner ' + (i + 1) + '"></div>').join('');
  const dots = (C.banner || []).map((_, i) => '<i class="' + (i === 0 ? 'on' : '') + '"></i>').join('');
  const perks = (C.keunggulan || []).map((k) => '<li>' + ic(k.icon) + esc(k.teks) + '</li>').join('');
  const txt = esc(C.teksJalan) + ' &nbsp;•&nbsp; ';
  return '<section class="hero"><div class="slider" id="slider">' + slides + '</div><div class="dots" id="dots">' + dots + '</div></section>' +
    '<div class="ticker">' + ic('megaphone') + '<div class="tk-wrap"><span class="tk-text">' + txt + txt + '</span></div></div>' +
    '<ul class="perks">' + perks + '</ul>' +
    '<div class="search">' + ic('search') + '<input id="hq" type="search" placeholder="Cari game atau layanan" autocomplete="off" aria-label="Cari produk"></div>' +
    '<div id="homeList"></div>';
}
function homeList(q) {
  q = q.trim().toLowerCase();
  if (q) {
    const l = products.filter((p) => p.search.indexOf(q) > -1);
    return '<section class="sec"><div class="sec-h"><h2>Hasil pencarian</h2><p>' + l.length + ' produk ditemukan</p></div>' + grid(l, 'Tidak ada produk yang cocok dengan “' + esc(q) + '”.') + '</section>';
  }
  const seen = []; C.kategori.forEach((c) => { if (seen.indexOf(c.grup) < 0) seen.push(c.grup); });
  return seen.map((g) => {
    const gi = (C.grup && C.grup[g]) || { judul: g, sub: '' };
    const cards = C.kategori.filter((c) => c.grup === g).map((c) => {
      const n = products.filter((p) => p.cat === c.id).length;
      return '<a class="ccard" href="#kategori-' + esc(c.id) + '"><span class="cc-ic">' + ic(c.icon) + '</span><span class="cc-t"><b>' + esc(c.label) + '</b><small>' + n + ' produk</small></span><span class="cc-ch">' + ic('chevron') + '</span></a>';
    }).join('');
    return '<section class="sec"><div class="sec-h"><h2>' + esc(gi.judul) + '</h2><p>' + esc(gi.sub) + '</p></div><div class="cgrid">' + cards + '</div></section>';
  }).join('');
}
function bindHome() {
  const out = $('homeList');
  const draw = (q) => { out.innerHTML = homeList(q); decorate(out); };
  draw('');
  $('hq').addEventListener('input', (e) => draw(e.target.value));
  const s = $('slider'), d = $('dots'), n = s.children.length;
  if (n < 2) { d.hidden = true; return; }
  const idx = () => Math.round(s.scrollLeft / (s.clientWidth || 1));
  s.addEventListener('scroll', () => { const i = idx(); [].forEach.call(d.children, (x, k) => x.classList.toggle('on', k === i)); }, { passive: true });
  sliderTimer = setInterval(() => s.scrollTo({ left: ((idx() + 1) % n) * s.clientWidth, behavior: 'smooth' }), 5000);
}

/* ---------- halaman: kategori ---------- */
function catHTML(c) {
  return '<div class="cat-head"><a class="back" href="#beranda" aria-label="Kembali">' + ic('back') + '</a><span class="cc-ic big">' + ic(c.icon) + '</span><div><h1>' + esc(c.judul || c.label) + '</h1><p>' + esc(c.sub || '') + '</p></div></div>' +
    '<div class="search">' + ic('search') + '<input id="cq" type="search" placeholder="Cari di ' + esc(c.label) + '" autocomplete="off" aria-label="Cari produk"></div><div class="sec" id="catList"></div>';
}
function bindCat(c) {
  const out = $('catList');
  const draw = (q) => { q = q.trim().toLowerCase(); out.innerHTML = grid(products.filter((p) => p.cat === c.id && (!q || p.search.indexOf(q) > -1)), 'Tidak ada produk yang cocok.'); decorate(out); };
  draw('');
  $('cq').addEventListener('input', (e) => draw(e.target.value));
}

/* ---------- halaman: info ---------- */
function infoHTML() {
  const news = (C.pengumuman || []).slice().reverse().map((n) =>
    '<article class="news">' + (n.banner ? '<img class="bn" src="' + esc(n.banner) + '" alt="">' : '') +
    '<div class="nb"><div class="nh">' + (n.image ? '<img src="' + esc(n.image) + '" alt="">' : '') + '<div><b>' + esc(n.title) + '</b><small>' + esc(n.date) + '</small></div><span class="ty">' + esc(n.type) + '</span></div>' +
    '<p>' + esc(n.desc) + '</p>' + (n.tags ? '<span class="tg">' + esc(n.tags) + '</span>' : '') + '</div></article>').join('');
  const kontak = (C.kontak || []).map((k) => '<a class="klink" href="' + esc(k.url) + '" target="_blank" rel="noopener"><span class="cc-ic">' + ic(k.icon) + '</span><span class="kt"><b>' + esc(k.judul) + (k.utama ? '<span class="ut">UTAMA</span>' : '') + '</b><small>' + esc(k.sub) + '</small></span>' + ic('chevron') + '</a>').join('');
  const faq = (C.faq || []).map((f) => '<details class="faq"><summary>' + esc(f.judul) + '</summary><p>' + esc(f.isi) + '</p></details>').join('');
  return '<h1 class="h2" style="margin-top:4px">Bantuan &amp; Support</h1><div class="stack">' + kontak + '</div>' +
    '<h2 class="h2">Pertanyaan umum</h2><div class="stack">' + faq + '</div>' +
    '<h2 class="h2">Pengumuman</h2><div class="stack">' + (news || '<p class="empty">Belum ada pengumuman.</p>') + '</div>';
}

/* ---------- halaman: kalkulator MLBB ---------- */
let ct = 'winrate';
function calcHTML() {
  const tabs = [['winrate', 'trophy', 'Win Rate'], ['magic', 'wheel', 'Magic Wheel'], ['zodiac', 'star', 'Zodiac']];
  return '<div class="calc"><h1 class="h2" style="margin:4px 0 0">Kalkulator MLBB</h1><div class="ctabs">' +
    tabs.map((t) => '<button type="button" data-ct="' + t[0] + '" aria-pressed="' + (ct === t[0]) + '">' + ic(t[1]) + t[2] + '</button>').join('') +
    '</div><div class="cform" id="cform"></div><button class="btn block" type="button" id="creset">' + ic('refresh') + ' Reset</button><div class="res" id="cres"></div></div>';
}
function calcForm() {
  const f = $('cform');
  if (ct === 'winrate') f.innerHTML =
    '<div class="fld"><label for="c-total">Total match</label><input id="c-total" type="number" min="1" step="1" placeholder="Masukkan total match"></div>' +
    '<div class="fld"><label for="c-wr">Win rate saat ini (%)</label><input id="c-wr" type="number" min="0" max="100" step="0.1" placeholder="Masukkan win rate saat ini"></div>' +
    '<div class="fld"><label for="c-target">Target win rate (%)</label><input id="c-target" type="number" min="0" max="100" step="0.1" placeholder="Masukkan target win rate"></div>';
  else if (ct === 'magic') f.innerHTML =
    '<div class="fld"><label for="c-core">Poin Magic Wheel: <b id="c-corev">0</b></label><input id="c-core" type="range" min="0" max="199" value="0" step="1"><div class="hints"><span>Saat ini: <span id="c-corev2">0</span></span><span>Target: 200</span></div></div>';
  else f.innerHTML =
    '<div class="fld"><label for="c-sp">Star Power saat ini: <b id="c-spv">0</b></label><input id="c-sp" type="range" min="0" max="99" value="0" step="1"><div class="hints"><span>Saat ini: <span id="c-spv2">0</span></span><span>Target: 100</span></div></div>' +
    '<div class="fld"><label for="c-bonus">Bonus skin Zodiac dimiliki</label><select id="c-bonus">' + [0, 1, 2, 3, 4, 5, 6].map((n) => '<option value="' + n + '">' + (n === 6 ? '6+' : n) + ' skin (+' + n + ' SP)</option>').join('') + '</select></div>';
  calcRun();
}
function calcRun() {
  const r = $('cres');
  const put = (v, d) => { r.innerHTML = '<div class="rv">' + v + '</div><div class="rd">' + d + '</div>'; };
  if (ct === 'winrate') {
    const t = $('c-total').value, w = $('c-wr').value, g = $('c-target').value;
    if (t === '' || w === '' || g === '') return put('Isi data dulu', 'Masukkan total match, win rate, dan target. Hasil tampil di sini.');
    const tn = parseFloat(t), wn = parseFloat(w), gn = parseFloat(g);
    if (isNaN(tn) || isNaN(wn) || isNaN(gn)) return put('Input tidak valid', 'Periksa kembali angka yang dimasukkan.');
    if (tn < 1) return put('Minimal 1 match', 'Total match minimal adalah 1.');
    if (wn < 0 || wn > 100 || gn < 0 || gn > 100) return put('Di luar batas', 'Win rate harus antara 0 dan 100%.');
    if (gn <= wn) return put('Target tercapai', 'Tidak perlu kemenangan beruntun.');
    if (gn >= 100) return put('Tidak bisa dicapai', 'Win rate 100% tidak bisa dicapai dari win rate di bawah 100%.');
    const need = Math.max(0, Math.ceil(((gn * tn) / 100 - (wn / 100) * tn) / (1 - gn / 100)));
    return put(need.toLocaleString('id-ID') + ' kemenangan beruntun', 'Dibutuhkan untuk mencapai ' + gn + '% WR dari ' + wn + '% (' + tn + ' match)');
  }
  if (ct === 'magic') {
    const core = parseInt($('c-core').value, 10) || 0;
    $('c-corev').textContent = core; $('c-corev2').textContent = core;
    const need = 200 - core;
    if (need <= 0) return put('Magic Core sudah cukup', 'Skin Legend siap diklaim.');
    return put((Math.ceil(need / 5) * 270).toLocaleString('id-ID') + ' Diamond', 'Maksimal yang dibutuhkan (worst case: 5 core per 5x draw). Top up di halaman beranda.');
  }
  const sp = parseInt($('c-sp').value, 10) || 0, bonus = parseInt($('c-bonus').value, 10) || 0;
  $('c-spv').textContent = sp; $('c-spv2').textContent = sp;
  const need = 100 - sp - bonus;
  if (need <= 0) return put('Star Power sudah cukup', 'Skin Zodiac siap diklaim.');
  return put((need * 60).toLocaleString('id-ID') + ' Diamond', 'Maksimal yang dibutuhkan (worst case: 1 SP per draw, 60 diamond per draw). Top up di halaman beranda.');
}
function bindCalc() {
  calcForm();
  const f = $('cform');
  f.addEventListener('input', calcRun); f.addEventListener('change', calcRun);
  $('creset').addEventListener('click', calcForm);
  document.querySelectorAll('[data-ct]').forEach((b) => b.addEventListener('click', () => {
    ct = b.dataset.ct;
    document.querySelectorAll('[data-ct]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    calcForm();
  }));
}

/* ---------- pemutar musik (tetap jalan saat pindah halaman) ---------- */
const songs = C.musik || [];
const au = new Audio();
let mi = 0, mStarted = false, miniOpen = false, curRoute = 'beranda';
const song = () => songs[mi] || { title: '-', artist: '-' };
function mLoad(i) { if (!songs[i]) return; mi = i; au.src = songs[i].src; mLyr(); mUI(); mProg(); }
function mPlay() {
  if (!songs.length) return;
  if (!au.src) mLoad(mi);
  mStarted = true;
  const p = au.play();
  if (p && p.catch) p.catch(() => toast('Lagu gagal diputar', true));
  mUI();
}
const mToggle = () => { if (au.paused) mPlay(); else au.pause(); };
const mNext = () => { if (!songs.length) return; mLoad((mi + 1) % songs.length); mPlay(); };
const mPrev = () => { if (!songs.length) return; mLoad((mi - 1 + songs.length) % songs.length); mPlay(); };
function mLyr() {
  const el = $('lyr'); if (!el) return;
  const l = song().lyrics || [];
  el.innerHTML = l.map((x) => '<p>' + esc(x.text) + '</p>').join('');
}
function mProg() {
  const b = $('mprog'); if (!b || !au.duration) return;
  b.firstElementChild.style.width = (au.currentTime / au.duration * 100) + '%';
  const l = song().lyrics || []; let a = -1;
  for (let i = 0; i < l.length; i++) { if (au.currentTime >= l[i].time) a = i; else break; }
  const el = $('lyr'); if (el) [].forEach.call(el.children, (p, i) => p.classList.toggle('on', i === a));
}
function mUI() {
  const playing = !au.paused;
  document.querySelectorAll('[data-m="play"]').forEach((b) => { b.innerHTML = ic(playing ? 'pause' : 'play'); b.setAttribute('aria-label', playing ? 'Jeda' : 'Putar'); });
  const cs = $('cassette'); if (cs) cs.classList.toggle('playing', playing);
  const s = song();
  if ($('sname')) { $('sname').textContent = s.title; $('sart').textContent = s.artist; }
  document.querySelectorAll('.song').forEach((b, i) => b.classList.toggle('on', i === mi));
  const mini = $('mini');
  mini.hidden = !(mStarted && curRoute !== 'musik');
  if (!mini.hidden) {
    mini.className = 'mini' + (miniOpen ? ' open' : '') + (playing ? ' playing' : '');
    const pic = s.cover || C.kaset;
    mini.innerHTML = (miniOpen ? '<div class="mini-pop"><div class="mt">' + esc(s.title) + '<small>' + esc(s.artist) + '</small></div>' +
      '<button type="button" data-m="prev" aria-label="Sebelumnya">' + ic('prev') + '</button><button type="button" data-m="play" aria-label="' + (playing ? 'Jeda' : 'Putar') + '">' + ic(playing ? 'pause' : 'play') + '</button><button type="button" data-m="next" aria-label="Berikutnya">' + ic('next') + '</button>' +
      '<a class="mg" href="#musik" aria-label="Buka pemutar">' + ic('list') + '</a></div>' : '') +
      '<button type="button" class="bub" data-m="bubble" aria-label="Pemutar musik" aria-expanded="' + miniOpen + '">' + ic('music') + (pic ? '<img src="' + esc(pic) + '" alt="">' : '') + '</button>';
  }
}
au.addEventListener('ended', mNext);
au.addEventListener('timeupdate', mProg);
au.addEventListener('play', mUI);
au.addEventListener('pause', mUI);
function musicHTML() {
  const s = song();
  const list = songs.map((x, i) => '<button class="song' + (i === mi ? ' on' : '') + '" type="button" data-m="pick" data-i="' + i + '"><span class="st"><b>' + esc(x.title) + '</b><small>' + esc(x.artist) + '</small></span>' + ic('play') + '</button>').join('');
  return '<div class="player"><div class="cassette" id="cassette"><img src="' + esc(C.kaset) + '" alt="Kaset"></div>' +
    '<div class="sname" id="sname">' + esc(s.title) + '</div><div class="sart" id="sart">' + esc(s.artist) + '</div><div class="lyr" id="lyr"></div>' +
    '<div class="prog" id="mprog" role="progressbar" aria-label="Posisi lagu"><i></i></div>' +
    '<div class="ctrl"><button type="button" data-m="prev" aria-label="Sebelumnya">' + ic('prev') + '</button><button type="button" class="pl" data-m="play" aria-label="Putar">' + ic('play') + '</button><button type="button" data-m="next" aria-label="Berikutnya">' + ic('next') + '</button></div></div>' +
    '<h2 class="h2">Daftar lagu</h2><div class="plist">' + (list || '<p class="empty">Belum ada lagu.</p>') + '</div>';
}

/* ---------- router (hash) ---------- */
function route() {
  clearInterval(sliderTimer);
  const h = (location.hash || '#beranda').slice(1);
  const v = $('view');
  let key = 'beranda';
  if (h.indexOf('kategori-') === 0 && catById(h.slice(9))) {
    const c = catById(h.slice(9)); v.innerHTML = catHTML(c); bindCat(c);
  } else if (h === 'musik') {
    key = 'musik'; v.innerHTML = musicHTML(); mLyr(); mUI();
  } else if (h === 'kalkulator') {
    key = 'kalkulator'; v.innerHTML = calcHTML(); bindCalc();
  } else if (h === 'info') {
    key = 'info'; v.innerHTML = infoHTML();
  } else {
    v.innerHTML = homeHTML(); bindHome();
  }
  curRoute = key;
  document.querySelectorAll('.tab').forEach((t) => t.classList.toggle('on', t.dataset.go === key));
  window.scrollTo(0, 0);
  mUI();
}

/* ---------- sheet: detail produk -> checkout -> invoice ---------- */
let S = null, lastFocus = null;
const sheet = $('sheet'), panel = $('panel');
const CLOSE = '<button class="iconbtn" type="button" data-a="close" aria-label="Tutup">' + ic('close') + '</button>';
function showSheet() { lastFocus = document.activeElement; sheet.hidden = false; document.body.classList.add('lock'); }
function hideSheet() { sheet.hidden = true; document.body.classList.remove('lock'); S = null; if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) { /* abaikan */ } } }
const head = (p, title, sub) => '<div class="sh-head">' + (p ? thumb(p, true) : '<span class="thumb sm cth">' + ic('cart') + '</span>') + '<div class="tt"><h2>' + esc(title) + '</h2><p>' + esc(sub) + '</p></div>' + CLOSE + '</div>';

function fieldHTML(p, name) {
  const d = C.field[name] || { label: name, ph: '' };
  if (d.info) return '<div class="vinfo">' + ic('ticket') + '<div><b>Bersifat voucher</b><p>' + esc(d.info) + '</p></div></div>';
  if (name === 'server' && p.serverType === 'region') {
    return '<div class="fld"><label for="f-server">Server</label><select id="f-server" data-f="server" data-label="Server"><option value="">Pilih server</option>' + (C.region || []).map((r) => '<option>' + esc(r) + '</option>').join('') + '</select></div>';
  }
  return '<div class="fld"><label for="f-' + name + '">' + esc(d.label) + '</label><input id="f-' + name + '" data-f="' + name + '" data-label="' + esc(d.label) + '" type="' + (d.type || 'text') + '"' +
    (d.mode ? ' inputmode="' + d.mode + '"' : '') + ' autocomplete="off" placeholder="' + esc(d.ph || '') + '">' + (d.hint ? '<small>' + esc(d.hint) + '</small>' : '') + '</div>';
}
function payBox(qrisOk, offMsg, sel) {
  return '<div class="pays">' +
    '<label class="pay' + (qrisOk ? '' : ' off') + '"><input type="radio" name="pay" value="qris"' + (qrisOk ? '' : ' disabled') + (sel === 'qris' ? ' checked' : '') + '><span class="pt"><b>QRIS Instan</b><small>' + (qrisOk ? 'Scan QRIS, bayar, lalu upload bukti' : offMsg) + '</small></span>' + ic('qr') + '</label>' +
    '<label class="pay"><input type="radio" name="pay" value="wa"' + (sel === 'wa' ? ' checked' : '') + '><span class="pt"><b>QRIS Manual via WhatsApp</b><small>Admin mengirim QRIS lewat chat</small></span>' + ic('chat') + '</label></div>';
}
function formHTML(p) {
  let n = 0;
  const step = (t) => '<div class="step"><span class="n">' + (++n) + '</span>' + t + '</div>';
  let h = head(p, p.name, p.desc) + '<div class="sh-body">';
  if (p.detail) h += '<p class="note">' + esc(p.detail) + '</p>';
  if (p.soon) h += '<p class="warn">Layanan ini belum tersedia.</p>';
  if (p.req.length) h += '<div>' + step('Data pesanan') + '<div class="flds">' + p.req.map((r) => fieldHTML(p, r)).join('') + '</div></div>';
  h += '<div>' + step('Pilih paket') + '<div class="gtabs" id="gtabs"></div>' +
    (p.total > 8 ? '<div class="ifilter"><input id="ifilter" type="search" placeholder="Cari nominal atau nama paket" aria-label="Cari paket" autocomplete="off"></div>' : '') +
    '<div class="items" id="items" role="radiogroup" aria-label="Paket"></div></div>';
  if (p.qty) h += '<div>' + step('Jumlah beli') + '<div class="qty"><button type="button" data-a="qdec" aria-label="Kurangi">−</button><input id="fqty" type="number" min="1" max="999" value="1" aria-label="Jumlah"><button type="button" data-a="qinc" aria-label="Tambah">+</button></div></div>';
  h += '<div>' + step('Metode pembayaran') + payBox(p.qris, 'Belum tersedia untuk produk ini', p.qris ? 'qris' : 'wa') + '</div>';
  h += '<div>' + '<div class="step">Rincian</div><div class="rows" id="rows"></div></div></div>' +
    '<div class="sh-foot fstack"><div class="tot"><small>Total bayar</small><b id="ftotal">Rp0</b></div><div class="acts">' +
    '<button class="btn" type="button" data-a="cart"' + (p.soon ? ' disabled' : '') + '>' + ic('cart') + ' Masukkan ke keranjang</button>' +
    '<button class="btn primary" type="button" data-a="pay"' + (p.soon ? ' disabled' : '') + '>Beli sekarang</button></div></div>';
  return h;
}
function renderTabs() {
  const g = S.p.groups, el = $('gtabs');
  el.innerHTML = g.length > 1 ? g.map((x, i) => '<button type="button" data-a="tab" data-gi="' + i + '" aria-pressed="' + (i === S.gi) + '">' + esc(x.label) + '</button>').join('') : '';
  el.hidden = g.length < 2;
}
function renderItems() {
  const g = S.p.groups[S.gi]; if (!g) { $('items').innerHTML = '<p class="muted">Belum ada paket.</p>'; return; }
  const f = S.filter.toLowerCase();
  const list = g.items.filter((i) => !f || i.name.toLowerCase().indexOf(f) > -1);
  const box = $('items');
  box.className = 'items' + (g.items.length > 8 ? ' scroll' : '');
  box.innerHTML = list.map((i) => '<label class="item' + (i.on ? '' : ' off') + '"><input type="radio" name="pkg" value="' + i.id + '"' + (i.on ? '' : ' disabled') + (S.sel === i.id ? ' checked' : '') + '><span class="in">' + esc(i.name) + '</span><span class="ip">' + (i.on ? money(i.price) : 'Kosong') + '</span></label>').join('') || '<p class="muted">Tidak ada paket yang cocok.</p>';
}
function calc() {
  const it = S.sel ? findItem(S.p, S.sel) : null;
  const unit = it ? it.price : 0, q = S.p.qty ? S.qty : 1;
  const ne = $('f-nominal'), nom = ne ? num(ne.value) : 0;
  const fee = S.pay === 'qris' ? (C.biayaQris || 0) : 0;
  return { it, unit, q, sub: unit * q, nom, fee, total: unit * q + nom + fee };
}
function renderSum() {
  if (S.step !== 'form') return;
  const c = calc(), r = (a, b, t) => '<div class="row' + (t ? ' t' : '') + '"><span>' + a + '</span><b>' + b + '</b></div>';
  let h = r('Paket', c.it ? esc(c.it.name) : '-') + r('Harga satuan', money(c.unit));
  if (S.p.qty) h += r('Jumlah', c.q + ' × ' + money(c.unit)) + r('Subtotal', money(c.sub));
  if (S.p.req.indexOf('nominal') > -1) h += r('Nominal topup', c.nom ? money(c.nom) : '-');
  if (c.fee) h += r('Biaya admin QRIS', money(c.fee));
  h += r('Total', money(c.total), true);
  $('rows').innerHTML = h; $('ftotal').textContent = money(c.total);
}
function openProduct(uid) {
  const p = byUid[uid]; if (!p) return;
  let gi = 0; for (let i = 0; i < p.groups.length; i++) { if (p.groups[i].items.some((x) => x.on)) { gi = i; break; } }
  S = { p, gi, sel: null, qty: 1, pay: p.qris ? 'qris' : 'wa', step: 'form', filter: '', fileData: '', inv: '', fields: [], time: '' };
  panel.innerHTML = formHTML(p); decorate(panel);
  const pr = panel.querySelector('input[name="pay"][value="' + S.pay + '"]'); if (pr) pr.checked = true;
  renderTabs(); renderItems(); renderSum(); showSheet();
  const c = panel.querySelector('[data-a="close"]'); if (c) c.focus();
}
function collect() {
  const out = [], miss = [];
  panel.querySelectorAll('[data-f]').forEach((el) => {
    el.classList.remove('bad'); const v = el.value.trim();
    if (!v) { el.classList.add('bad'); miss.push(el); }
    out.push({ k: el.dataset.f, label: el.dataset.label, value: v });
  });
  return { out, miss };
}
function validForm() {
  if (!calc().it) { toast('Pilih paket dulu.', true); return null; }
  const f = collect();
  if (f.miss.length) { f.miss[0].scrollIntoView({ block: 'center' }); f.miss[0].focus(); toast('Lengkapi: ' + f.miss.map((e) => e.dataset.label).join(', '), true); return null; }
  return f.out;
}
function curLine(fields) {
  const ne = $('f-nominal');
  return { uid: S.p.uid, itemId: S.sel, qty: S.p.qty ? S.qty : 1, nom: ne ? num(ne.value) : 0, fields };
}
function addCart() {
  const f = validForm(); if (!f) return;
  const line = curLine(f), key = (x) => JSON.stringify([x.uid, x.itemId, x.nom, x.fields.map((y) => y.value)]);
  const same = cart.filter((x) => key(x) === key(line))[0];
  if (same) same.qty = Math.min(999, same.qty + line.qty); else cart.push(line);
  saveCart(); hideSheet(); toast('Masuk ke keranjang');
}
function doPay() {
  const f = validForm(); if (!f) return;
  if (!S.pay) return toast('Pilih metode pembayaran.', true);
  startCheckout([curLine(f)], S.pay, false);
}
function startCheckout(lines, pay, fromCart) {
  S.lines = lines; S.pay = pay; S.fromCart = fromCart; S.fileData = '';
  if (pay === 'wa') return sendWA();
  S.inv = 'INV/' + Date.now().toString().slice(-8) + '/' + Math.floor(Math.random() * 1000);
  S.time = nowText(); S.step = 'invoice'; renderInvoice();
}
function sendWA() {
  const o = orderCalc(S.lines, 'wa'), multi = o.cs.length > 1;
  let m = '*ORDER ' + C.nama + '* 🛒\n\n';
  o.cs.forEach((c, i) => {
    if (multi) m += '*Pesanan ' + (i + 1) + '*\n';
    m += 'Produk: ' + c.p.name + '\nItem: ' + c.it.name + '\nJumlah: ' + c.q + ' x ' + money(c.unit) + '\nSubtotal: ' + money(c.sub) + '\n';
    if (c.p.req.indexOf('nominal') > -1) m += 'Nominal Topup: ' + money(c.nom) + '\n';
    c.l.fields.forEach((f) => { m += f.label + ': ' + f.value + '\n'; });
    if (c.p.req.indexOf('voucher') > -1) m += 'Keterangan Voucher: kode dikirim setelah pembayaran\n';
    m += '\n';
  });
  m += '*TOTAL BAYAR: ' + money(o.total) + '*\nMetode: QRIS Manual (WhatsApp)\n\n*Admin tolong segera kirim QRIS pembayarannya!*';
  const a = document.createElement('a');
  a.href = 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(m); a.target = '_blank'; a.rel = 'noopener';
  document.body.appendChild(a); a.click(); a.remove();
  toast('Membuka WhatsApp admin');
}
const orderThumb = (o) => (o.cs.length === 1 ? o.cs[0].p : null);
function renderInvoice() {
  const o = orderCalc(S.lines, 'qris'); S.o = o;
  const r = (x, y, t) => '<div class="row' + (t ? ' t' : '') + '"><span>' + x + '</span><b>' + y + '</b></div>';
  let rows = '';
  o.cs.forEach((c, i) => {
    rows += r(o.cs.length > 1 ? 'Item ' + (i + 1) : 'Produk', esc(c.p.name + ' - ' + c.it.name));
    c.l.fields.forEach((f) => { rows += r(esc(f.label), esc(f.value)); });
    if (c.q > 1) rows += r('Jumlah', c.q + ' × ' + money(c.unit)) + r('Subtotal', money(c.sub));
    else rows += r('Harga paket', money(c.unit));
    if (c.nom) rows += r('Nominal topup', money(c.nom));
  });
  rows += r('Metode', 'QRIS Instan') + r('Waktu order', esc(S.time));
  if (o.fee) rows += r('Biaya admin', money(o.fee));
  rows += r('Total tagihan', money(o.total), true);
  panel.innerHTML = head(orderThumb(o), 'Invoice', S.inv) + '<div class="sh-body">' +
    '<div class="rows">' + rows + '</div>' +
    '<div class="qris"><h3 class="step" style="margin:0">Scan QRIS untuk membayar</h3><button type="button" data-a="zoom" aria-label="Perbesar QRIS"><img id="qrisImg" src="' + esc(C.qrisGambar) + '" alt="QRIS"></button>' +
    '<ol class="how"><li>Buka m-banking atau e-wallet, pilih scan QRIS.</li><li>Scan kode di atas (ketuk gambar untuk memperbesar).</li><li>Masukkan nominal <b>' + money(o.total) + '</b> persis sesuai tagihan.</li><li>Simpan bukti, lalu upload di bawah.</li></ol>' +
    '<p class="warn">Pesanan diproses setelah bukti transfer diverifikasi admin.</p></div>' +
    '<div><div class="step">Data kontak (wajib)</div><div class="flds">' +
    '<div class="fld"><label for="fwa">Nomor WhatsApp</label><input id="fwa" type="tel" inputmode="tel" placeholder="Contoh: 628123456789"></div>' +
    '<div class="fld"><label for="fem">Email</label><input id="fem" type="email" placeholder="contoh@email.com"></div></div></div>' +
    '<div><div class="step">Upload bukti transfer</div><label class="upload" for="ffile">' + ic('upload') + '<span id="fnote">Pilih gambar JPEG atau PNG, maksimal 2MB</span><div id="fprev"></div></label><input id="ffile" type="file" accept="image/jpeg,image/png" hidden></div></div>' +
    '<div class="sh-foot two"><button class="btn danger" type="button" data-a="cancel">Batalkan</button><button class="btn primary" type="button" id="bsend" data-a="send">Kirim bukti</button></div>';
  decorate(panel);
  const c0 = panel.querySelector('[data-a="close"]'); if (c0) c0.focus();
}
function sendProof() {
  if (!S.fileData) return toast('Pilih file bukti transfer dulu.', true);
  const wa = $('fwa').value.trim(), em = $('fem').value.trim();
  if (!wa) { $('fwa').focus(); return toast('Nomor WhatsApp wajib diisi.', true); }
  if (!/^\S+@\S+\.\S+$/.test(em)) { $('fem').focus(); return toast('Email wajib diisi dengan format yang benar.', true); }
  const o = S.o, btn = $('bsend'), old = btn.innerHTML;
  btn.disabled = true; btn.textContent = 'Mengirim...';
  const fail = (msg) => { btn.disabled = false; btn.innerHTML = old; toast(msg || 'Gagal mengirim bukti. Coba lagi atau hubungi admin lewat WhatsApp.', true); };
  fetch('/api/order', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      invoice: S.inv, total: o.total, biayaAdmin: o.fee,
      items: o.cs.map((c) => ({ produk: c.p.name, paket: c.it.name, qty: c.q, harga: c.unit, nominal: c.nom, fields: c.l.fields.map((f) => ({ label: f.label, value: f.value })) })),
      whatsapp: wa, email: em, metode: 'QRIS Instan', waktu: S.time, image: S.fileData
    })
  }).then((r) => r.json().catch(() => ({ ok: false })))
    .then((j) => { if (j && j.ok) renderDone(wa); else fail(j && j.error); })
    .catch(() => fail());
}
function renderDone(wa) {
  const o = S.o; S.step = 'done';
  if (S.fromCart) { cart = []; saveCart(); }
  const r = (x, y) => '<div class="row"><span>' + x + '</span><b>' + y + '</b></div>';
  const prod = o.cs.length === 1 ? o.cs[0].p.name + ' - ' + o.cs[0].it.name : o.cs.length + ' item dari keranjang';
  panel.innerHTML = head(orderThumb(o), 'Bukti terkirim', S.inv) + '<div class="sh-body"><div class="done"><span class="ok">' + ic('check') + '</span><span class="status">Pembayaran sedang diperiksa</span><h3>Terima kasih!</h3>' +
    '<p class="muted">Admin akan memverifikasi dalam waktu maksimal 15 menit.</p></div>' +
    '<div class="rows">' + r('Invoice', esc(S.inv)) + r('Produk', esc(prod)) + r('WhatsApp', esc(wa)) + r('Total dibayar', money(o.total)) + r('Status', 'Dalam antrean') + '</div>' +
    '<p class="muted" style="text-align:center;font-size:.84rem">Jika dalam 1 jam belum ada konfirmasi, <a href="https://wa.me/' + esc(C.whatsapp) + '" target="_blank" rel="noopener" style="color:var(--green);font-weight:600">hubungi CS di WhatsApp</a>.</p></div>' +
    '<div class="sh-foot two"><button class="btn primary" type="button" data-a="close">Kembali ke beranda</button></div>';
  decorate(panel);
}

/* ---------- sheet: keranjang ---------- */
function openCart() {
  S = { step: 'cart', pay: allQris(cart) ? 'qris' : 'wa', lines: [], fromCart: true, fileData: '' };
  renderCart(); showSheet();
}
function renderCart() {
  S.step = 'cart'; S.fileData = '';
  if (!cart.length) {
    panel.innerHTML = head(null, 'Keranjang', 'Belum ada item') + '<div class="sh-body"><p class="empty">Keranjang masih kosong.<br>Pilih produk, lalu tekan “Masukkan ke keranjang”.</p></div>' +
      '<div class="sh-foot two"><button class="btn primary" type="button" data-a="close">Mulai belanja</button></div>';
    return;
  }
  const ok = allQris(cart);
  if (S.pay === 'qris' && !ok) S.pay = 'wa';
  const lines = cart.map((l, i) => {
    const c = lineCalc(l), det = l.fields.filter((f) => f.value).map((f) => esc(f.label) + ': ' + esc(f.value)).join(' • ');
    return '<div class="cline">' + thumb(c.p, true) + '<div class="cl-b"><b>' + esc(c.p.name) + '</b><span>' + esc(c.it.name) + '</span>' + (det ? '<small>' + det + '</small>' : '') +
      '<div class="cl-r">' + (c.p.qty ? '<div class="cqty"><button type="button" data-a="cdec" data-i="' + i + '" aria-label="Kurangi">−</button><span>' + c.q + '</span><button type="button" data-a="cinc" data-i="' + i + '" aria-label="Tambah">+</button></div>' : '<span class="muted">1 item</span>') +
      '<b class="cl-p">' + money(c.total) + '</b></div></div>' +
      '<button class="iconbtn sm" type="button" data-a="cdel" data-i="' + i + '" aria-label="Hapus dari keranjang">' + ic('trash') + '</button></div>';
  }).join('');
  panel.innerHTML = head(null, 'Keranjang', cart.length + ' produk') + '<div class="sh-body"><div class="stack">' + lines + '</div>' +
    '<div><div class="step">Metode pembayaran</div>' + payBox(ok, 'Ada produk di keranjang yang belum mendukung QRIS Instan', S.pay) + '</div>' +
    '<div><div class="step">Rincian</div><div class="rows" id="crows"></div></div>' +
    '<button class="btn danger block" type="button" data-a="cclear">Kosongkan keranjang</button></div>' +
    '<div class="sh-foot"><div class="tot"><small>Total bayar</small><b id="ctotal">Rp0</b></div><button class="btn primary" type="button" data-a="checkout">Bayar semua</button></div>';
  decorate(panel); renderCartSum();
}
function renderCartSum() {
  const o = orderCalc(cart, S.pay), r = (x, y, t) => '<div class="row' + (t ? ' t' : '') + '"><span>' + x + '</span><b>' + y + '</b></div>';
  let h = r('Subtotal (' + cart.length + ' produk)', money(o.total - o.fee));
  if (o.fee) h += r('Biaya admin QRIS', money(o.fee));
  h += r('Total', money(o.total), true);
  $('crows').innerHTML = h; $('ctotal').textContent = money(o.total);
}
function keepScroll(fn) {
  const b = panel.querySelector('.sh-body'), t = b ? b.scrollTop : 0;
  fn();
  const nb = panel.querySelector('.sh-body'); if (nb) nb.scrollTop = t;
}

/* ---------- event ---------- */
document.addEventListener('error', (e) => {
  const t = e.target; if (!t || t.tagName !== 'IMG') return;
  if (t.id === 'qrisImg') { t.parentNode.innerHTML = '<span class="noq">Gambar QRIS belum dipasang. Taruh file ' + esc(C.qrisGambar) + ' di folder website.</span>'; return; }
  t.remove();
}, true);
$('view').addEventListener('click', (e) => { const c = e.target.closest('[data-uid]'); if (c) openProduct(c.dataset.uid); });
document.addEventListener('click', (e) => {
  const m = e.target.closest('[data-m]'); if (!m) return;
  const a = m.dataset.m;
  if (a === 'play') mToggle(); else if (a === 'next') mNext(); else if (a === 'prev') mPrev();
  else if (a === 'pick') { mLoad(+m.dataset.i); mPlay(); }
  else if (a === 'bubble') { miniOpen = !miniOpen; mUI(); }
});
document.addEventListener('click', (e) => {
  if (miniOpen && e.composedPath().indexOf($('mini')) < 0) { miniOpen = false; mUI(); }
  else if (miniOpen && e.target.closest && e.target.closest('a.mg')) { miniOpen = false; mUI(); }
});
document.addEventListener('click', (e) => {
  const p = e.target.closest('#mprog'); if (!p || !au.duration) return;
  const b = p.getBoundingClientRect(); au.currentTime = ((e.clientX - b.left) / b.width) * au.duration;
});
sheet.addEventListener('click', (e) => {
  if (e.target.classList.contains('scrim')) return hideSheet();
  const b = e.target.closest('[data-a]'); if (!b) return;
  const a = b.dataset.a;
  if (a === 'cancel' && S && S.fromCart) renderCart();
  else if (a === 'close' || a === 'cancel') hideSheet();
  else if (a === 'tab') { S.gi = +b.dataset.gi; S.filter = ''; const f = $('ifilter'); if (f) f.value = ''; renderTabs(); renderItems(); }
  else if (a === 'qinc' || a === 'qdec') { S.qty = Math.max(1, Math.min(999, S.qty + (a === 'qinc' ? 1 : -1))); $('fqty').value = S.qty; renderSum(); }
  else if (a === 'pay') doPay();
  else if (a === 'cart') addCart();
  else if (a === 'checkout') { if (cart.length) startCheckout(cart.slice(), S.pay, true); }
  else if (a === 'cinc' || a === 'cdec') {
    const l = cart[+b.dataset.i]; if (!l) return;
    l.qty = Math.max(1, Math.min(999, l.qty + (a === 'cinc' ? 1 : -1))); saveCart(); keepScroll(renderCart);
  }
  else if (a === 'cdel') { cart.splice(+b.dataset.i, 1); saveCart(); keepScroll(renderCart); }
  else if (a === 'cclear') { if (window.confirm('Kosongkan semua isi keranjang?')) { cart = []; saveCart(); renderCart(); } }
  else if (a === 'send') sendProof();
  else if (a === 'zoom') { const im = $('qrisImg'); if (im) { $('zimg').src = im.src; $('zoom').hidden = false; } }
});
sheet.addEventListener('input', (e) => {
  const t = e.target;
  if (!S) return;
  if (t.id === 'ifilter') { S.filter = t.value; renderItems(); }
  else if (t.id === 'fqty') { S.qty = Math.max(1, Math.min(999, parseInt(t.value, 10) || 1)); renderSum(); }
  else if (t.id === 'f-nominal') renderSum();
  else if (t.classList && t.classList.contains('bad')) t.classList.remove('bad');
});
sheet.addEventListener('change', (e) => {
  const t = e.target;
  if (!S) return;
  if (t.name === 'pkg') { S.sel = t.value; renderSum(); }
  else if (t.name === 'pay') { S.pay = t.value; if (S.step === 'cart') renderCartSum(); else renderSum(); }
  else if (t.id === 'ffile') {
    const f = t.files && t.files[0]; if (!f) return;
    if (f.type !== 'image/jpeg' && f.type !== 'image/png') { t.value = ''; S.fileData = ''; return toast('Hanya file JPEG atau PNG.', true); }
    if (f.size > 2 * 1024 * 1024) { t.value = ''; S.fileData = ''; return toast('Ukuran file maksimal 2MB.', true); }
    const rd = new FileReader();
    rd.onload = (ev) => { S.fileData = ev.target.result; $('fprev').innerHTML = '<img src="' + S.fileData + '" alt="Pratinjau bukti">'; $('fnote').textContent = f.name; };
    rd.readAsDataURL(f);
  }
});
$('zoom').addEventListener('click', () => { $('zoom').hidden = true; });
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!$('zoom').hidden) $('zoom').hidden = true; else if (!sheet.hidden) hideSheet();
});
window.addEventListener('hashchange', route);

/* ---------- mulai ---------- */
const nm = C.nama.split(' ');
$('brandName').innerHTML = esc(nm[0]) + (nm.length > 1 ? ' <span>' + esc(nm.slice(1).join(' ')) + '</span>' : '');
$('brandTag').textContent = C.tagline;
$('brandLogo').src = C.logo; $('spLogo').src = C.logo;
$('spSub').textContent = 'Selamat datang di ' + C.nama;
$('spDesc').textContent = C.splashDesc || '';
cartBadge();
$('cartBtn').addEventListener('click', openCart);
$('foot').innerHTML = 'Powered by <b>' + esc(C.nama) + '</b><br>© ' + new Date().getFullYear() + ' All rights reserved';
$('tabs').innerHTML = [['beranda', 'home', 'Beranda'], ['musik', 'music', 'Musik'], ['kalkulator', 'calc', 'Kalkulator'], ['info', 'info', 'Info']]
  .map((t) => '<a class="tab" data-go="' + t[0] + '" href="#' + t[0] + '">' + ic(t[1]) + t[2] + '</a>').join('');
const splash = $('splash');
let masuk = false; try { masuk = sessionStorage.getItem('inuu-masuk') === '1'; } catch (e) { /* abaikan */ }
if (masuk) splash.hidden = true;
$('masuk').addEventListener('click', () => {
  try { sessionStorage.setItem('inuu-masuk', '1'); } catch (e) { /* abaikan */ }
  splash.classList.add('hide'); setTimeout(() => { splash.hidden = true; }, 500);
});
route();
})();
