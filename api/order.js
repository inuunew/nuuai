// =====================================================================
// api/order.js : fungsi kecil di Vercel yang meneruskan bukti transfer ke Telegram.
// Isi token bot dan id chat admin langsung di dua baris di bawah ini.
// File ini berjalan di server Vercel, tidak ikut dikirim ke browser pembeli.
// JANGAN upload file ini ke GitHub publik jika token sudah diisi.
// =====================================================================
const TELEGRAM_BOT_TOKEN = '8416791607:AAG6qRAnaGP-bYJUyOFTlCd_XAeEgFi9v1w';   // token dari @BotFather
const TELEGRAM_CHAT_ID = '7314158034';       // id chat admin

const esc = (s) => String(s == null ? '' : s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const cut = (s, n) => String(s == null ? '' : s).slice(0, n);
const rp = (n) => 'Rp ' + Number(n || 0).toLocaleString('id-ID');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Metode tidak diizinkan.' });

  const token = TELEGRAM_BOT_TOKEN;
  const chat = TELEGRAM_CHAT_ID;
  if (!token || !chat || token.indexOf('ISI_') === 0 || chat.indexOf('ISI_') === 0) return res.status(500).json({ ok: false, error: 'Server pesanan belum dikonfigurasi.' });

  const b = req.body || {};
  const m = /^data:(image\/(?:jpeg|png));base64,([A-Za-z0-9+/=]+)$/.exec(b.image || '');
  if (!m) return res.status(400).json({ ok: false, error: 'File bukti tidak valid.' });
  const buf = Buffer.from(m[2], 'base64');
  if (buf.length > 2 * 1024 * 1024) return res.status(413).json({ ok: false, error: 'Ukuran file maksimal 2MB.' });
  if (!b.whatsapp || !/^\S+@\S+\.\S+$/.test(b.email || '')) return res.status(400).json({ ok: false, error: 'Kontak tidak lengkap.' });

  // Mendukung keranjang (b.items) dan format lama (satu produk di b.produk/b.paket).
  const items = (Array.isArray(b.items) && b.items.length ? b.items : [b]).slice(0, 20);
  const itemText = items.map((it, i) => {
    const fields = (Array.isArray(it.fields) ? it.fields : []).slice(0, 10)
      .map((f) => '<b>' + esc(cut(f.label, 40)) + ':</b> ' + esc(cut(f.value, 120))).join('\n');
    let t = (items.length > 1 ? '<b>── Item ' + (i + 1) + ' ──</b>\n' : '');
    t += '<b>📦 Produk:</b> ' + esc(cut(it.produk, 80)) + '\n';
    t += '<b>🎁 Paket:</b> ' + esc(cut(it.paket, 80)) + '\n';
    if (Number(it.qty) > 1) t += '<b>🔢 Jumlah:</b> ' + Number(it.qty) + ' x ' + rp(it.harga) + '\n';
    if (Number(it.nominal) > 0) t += '<b>🪙 Nominal:</b> ' + rp(it.nominal) + '\n';
    if (fields) t += fields + '\n';
    return t;
  }).join('\n');

  const head = '<b>✅ BUKTI TRANSFER MASUK</b>\n─────────────────\n' +
    '<b>🧾 Invoice:</b> ' + esc(cut(b.invoice, 40)) + '\n';
  const tail = '<b>💰 Total Dibayar:</b> ' + rp(b.total) + '\n' +
    '<b>📱 WhatsApp:</b> ' + esc(cut(b.whatsapp, 30)) + '\n' +
    '<b>📧 Email:</b> ' + esc(cut(b.email, 80)) + '\n' +
    '<b>💳 Metode:</b> ' + esc(cut(b.metode, 30)) + '\n' +
    '<b>⏰ Waktu:</b> ' + esc(cut(b.waktu, 60)) + '\n─────────────────\nSegera verifikasi pesanan.';

  // Caption foto maksimal 1024 karakter. Kalau kepanjangan, detail item dikirim sebagai pesan terpisah.
  let caption = head + itemText + tail;
  let detail = '';
  if (caption.length > 1000) {
    caption = head + '<b>🛒 ' + items.length + ' item</b> (rincian di pesan berikutnya)\n' + tail;
    detail = '<b>🧾 Rincian ' + esc(cut(b.invoice, 40)) + '</b>\n─────────────────\n' + itemText;
  }

  try {
    const fd = new FormData();
    fd.append('chat_id', chat);
    fd.append('caption', caption);
    fd.append('parse_mode', 'HTML');
    fd.append('photo', new Blob([buf], { type: m[1] }), 'bukti.' + (m[1] === 'image/png' ? 'png' : 'jpg'));
    const r = await fetch('https://api.telegram.org/bot' + token + '/sendPhoto', { method: 'POST', body: fd });
    const j = await r.json();
    if (!j.ok) return res.status(502).json({ ok: false, error: 'Gagal meneruskan ke admin. Coba lagi.' });
    if (detail) {
      await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chat, text: detail.slice(0, 4000), parse_mode: 'HTML' })
      }).catch(() => {});
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'Gagal terhubung ke Telegram.' });
  }
};
