# GEZPRO Landing Page — HTML/CSS/JavaScript

Starter website statis berdasarkan Master Copy GEZPRO yang disetujui.

## Menjalankan secara lokal
1. Ekstrak folder/ZIP.
2. Buka `index.html` langsung di browser, atau gunakan ekstensi Live Server di VS Code.
3. Tidak perlu instalasi package atau build step.

## Struktur
- `index.html` — struktur section dan copy.
- `styles.css` — styling responsif.
- `script.js` — navigasi mobile.
- `assets/` — tempat menyimpan logo dan aset gambar final.

## Mengganti placeholder logo
Logo GEZPRO dan MGE belum diterima saat starter ini dibuat. Setelah file logo dikirim:
1. Simpan logo GEZPRO sebagai `assets/logo-gezpro.svg` atau `.png`.
2. Simpan logo MGE sebagai `assets/logo-mge.svg` atau `.png`.
3. Ganti elemen `.logo-placeholder` yang sesuai di `index.html` dengan `<img src="assets/logo-gezpro.svg" alt="GEZPRO">` atau `logo-mge.svg`.
4. Tambahkan aturan ukuran gambar di `styles.css`.

Jangan mengganti placeholder dengan logo rekaan. Gunakan file resmi yang diberikan.

## Catatan penting
- Visual Hero saat ini adalah ilustrasi CSS sementara, bukan foto orang. Saat foto ditambahkan, semua perempuan yang tampak wajib mengenakan hijab sesuai ketentuan brand.
- Profile Checker di halaman ini masih **preview visual**, bukan asesmen yang berfungsi. Fungsionalitas 12 pertanyaan dan hasil profil memerlukan implementasi terpisah.
- Tautan kontak resmi, Privacy Policy, dan Terms & Conditions perlu dihubungkan ke URL final.
- Angka Trust Bar mengikuti Master Copy dan perlu diverifikasi bukti pendukungnya sebelum publikasi.
- IELTS Preparation Class dan SAT Preparation Class diberi label COMING SOON pada kartu program dan footer.
- Tidak ada harga atau klaim jaminan penerimaan/beasiswa.
- Section MGE menggunakan placeholder logo dan label Mitra Strategis GEZPRO. Pastikan izin penggunaan logo/nama telah didapatkan.
- Google Fonts memerlukan koneksi internet; fallback font tersedia.


## Logo navbar dan favicon
- Navbar memakai logo simbol GEZPRO saja (`assets/gezpro-symbol.png`).
- Favicon tab browser dan Apple touch icon memakai file simbol yang sama.


## Animated Profile Checker preview
- Section Profile Checker memakai animasi pergantian scene dan progress bar dengan aksen biru GEZPRO.
- Animasi merupakan preview visual 7 scene yang terinspirasi dari file contoh; bukan asesmen aktif dan bukan pengganti rancangan 12 pertanyaan dalam 4 tahap.
- CTA saat ini mengarah ke preview card sebagai placeholder; route asesmen sesungguhnya belum dibuat.


## Hero update
- Hero memakai aset pelajar `assets/gezpro-hero-students.png` dan latar titik-titik peta dunia yang dibuat melalui CSS.
- Jenjang yang ditampilkan: S1, S2, dan S3.
- Warna tetap memakai palet biru GEZPRO; layout memiliki penyesuaian desktop, tablet, dan mobile.
