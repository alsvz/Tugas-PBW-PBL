// Tanggal dan waktu
const clock = document.getElementById('clock');
function tick() {
  clock.textContent = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'medium' });
}
if (clock) { tick(); setInterval(tick, 1000); }

// Pencarian produk (sisi browser, hanya untuk demo)
const cari = document.getElementById('cari');
if (cari) {
  cari.addEventListener('input', () => {
    const q = cari.value.toLowerCase();
    let cocok = 0;
    document.querySelectorAll('#tabel tbody tr').forEach(tr => {
      const ok = tr.textContent.toLowerCase().includes(q);
      tr.hidden = !ok;
      if (ok) cocok++;
    });
    document.getElementById('kosong').hidden = cocok > 0;
  });
}

// Konfirmasi hapus
document.querySelectorAll('[data-hapus]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (confirm('Hapus "' + btn.dataset.hapus + '"? Data tidak bisa dikembalikan.')) {
      btn.closest('tr').remove();
    }
  });
});

// Validasi form produk
const form = document.getElementById('form-produk');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const pesan = document.getElementById('pesan');
    if (Number(form.harga.value) <= 0 || Number(form.stok.value) < 0) {
      pesan.textContent = 'Harga harus lebih dari 0 dan stok tidak boleh negatif.';
      pesan.className = 'pesan galat';
      return;
    }
    pesan.textContent = 'Produk tersimpan (demo, belum terhubung database).';
    pesan.className = 'pesan ok';
  });
}
