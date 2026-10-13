const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka menu navigasi');
    });
  });
}

// FAQ memakai elemen <details> native agar tetap dapat digunakan dengan keyboard.


// Animated Profile Checker preview. This is a visual demo, not the live 12-question assessment.
(() => {
  const question = document.getElementById('pc-question');
  const options = document.getElementById('pc-options');
  const step = document.getElementById('pc-step');
  const progress = document.getElementById('pc-progress');
  const label = document.getElementById('pc-question-label');
  if (!question || !options || !step || !progress || !label) return;

  const scenes = [
    {n:'01 / 07',p:'14%',l:'Kenali Dirimu',q:'Kamu sekarang berada di jenjang apa?',o:['SMA / SMK','Mahasiswa','Gap Year']},
    {n:'02 / 07',p:'28%',l:'Target Studi',q:'Kamu ingin melanjutkan studi ke jenjang apa?',o:['S1','S2','S3']},
    {n:'03 / 07',p:'42%',l:'Negara Tujuan',q:'Sudah punya negara tujuan?',o:['Sudah punya','Masih mencari','Belum tahu']},
    {n:'04 / 07',p:'57%',l:'Minat & Jurusan',q:'Bidang apa yang paling menarik buat kamu?',o:['Business & Management','Engineering','Computer Science','Social Science']},
    {n:'05 / 07',p:'71%',l:'Kesiapan Bahasa',q:'Bagaimana kesiapan bahasa Inggrismu?',o:['Sudah punya IELTS / TOEFL','Sedang mempersiapkan','Belum pernah tes']},
    {n:'06 / 07',p:'85%',l:'Kesiapan Pendaftaran',q:'Seberapa siap kamu untuk mulai mendaftar?',o:['Sudah siap daftar','Masih perlu persiapan','Baru mulai mencari']},
    {n:'07 / 07',p:'100%',l:'Hasil Profil',result:true,title:'Gambaran Jalurmu',intro:'Contoh ringkasan untuk keperluan preview visual.'}
  ];
  let current = 0;
  let timerId;

  function renderScene() {
    const scene = scenes[current];
    question.style.opacity = '0';
    options.style.opacity = '0';
    window.setTimeout(() => {
      step.textContent = scene.n;
      progress.style.width = scene.p;
      label.textContent = scene.l;

      if (scene.result) {
        question.textContent = scene.title;
        options.innerHTML = `
          <div class="pc-result-kicker">✦ PERSONALIZED PREVIEW</div>
          <div class="pc-result-preview">
            <div class="pc-result-line"><div class="pc-result-icon">⌖</div><div><strong>Arahmu</strong><small>Eksplorasi jurusan yang relevan</small></div></div>
            <div class="pc-result-line"><div class="pc-result-icon">◎</div><div><strong>Pilihanmu</strong><small>Jelajahi negara dan universitas</small></div></div>
            <div class="pc-result-line"><div class="pc-result-icon">✓</div><div><strong>Langkahmu</strong><small>Persiapan → Beasiswa → Aplikasi</small></div></div>
          </div>`;
      } else {
        question.textContent = scene.q;
        options.innerHTML = '';
        scene.o.forEach((item, index) => {
          const div = document.createElement('div');
          div.className = 'pc-option' + (index === 0 ? ' active' : '');
          div.innerHTML = '<span class="pc-radio" aria-hidden="true"></span><span></span>';
          div.lastElementChild.textContent = item;
          options.appendChild(div);
        });
      }
      question.style.opacity = '1';
      options.style.opacity = '1';
    }, 260);
  }

  function scheduleNext() {
    timerId = window.setTimeout(() => {
      current = (current + 1) % scenes.length;
      renderScene();
      scheduleNext();
    }, current === scenes.length - 1 ? 5200 : 2800);
  }

  renderScene();
  scheduleNext();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.clearTimeout(timerId);
    } else {
      scheduleNext();
    }
  });
})();
