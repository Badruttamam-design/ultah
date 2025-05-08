// ========== INITIALIZATION ========== //
document.addEventListener("DOMContentLoaded", function () {
  // Remove intro screen after 3 seconds
  setTimeout(() => {
    document.getElementById("intro").style.opacity = "0";
    setTimeout(() => document.getElementById("intro").remove(), 1000);
  }, 3000);

  // Start background music (will only play after user interaction)
  const bgMusic = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  let musicPlaying = false;

  musicToggle.addEventListener("click", function () {
    if (musicPlaying) {
      bgMusic.pause();
      musicToggle.textContent = "🔇";
    } else {
      bgMusic.play();
      musicToggle.textContent = "🔊";
    }
    musicPlaying = !musicPlaying;
  });

  // Create floating hearts
  createHearts();

  // Create stars and bubbles
  createStars();
  createBubbles();

  // Periodic confetti
  setInterval(fireConfetti, 15000);
});

// ========== FUNCTIONS ========== //
function showBirthdayMessage() {
  document.getElementById("question").style.display = "none";
  document.getElementById("ucapan").style.display = "block";
  document.getElementById("birthdayMessage").style.display = "block";
  document.getElementById("hearts-container").style.display = "block";


  // Hitung umur
  const birthYear = 2006; // Ganti sesuai tahun lahir
  const currentYear = new Date().getFullYear();
  const birthdayNumber = currentYear - birthYear;
  const userName = ("Amelia");
  // Update pesan ulang tahun
  document.getElementById(
    "birthdayNumberText"
  ).innerHTML = `Semoga Allah selalu memberkahimu, memberimu kesehatan, kebahagiaan, dan segala hal baik yang kau impikan. Selamat ulang tahun ke <span style="color: var(--pink);font-size:22px; font-weight: bold; font-family: 'Pacifico', cursive;">${birthdayNumber} ${userName}</span> 🎉💖💞 Sayangku`;

  // Mainkan musik latar
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play().catch((e) => {
    console.log("Musik tidak bisa diputar otomatis:", e);
  });

  // Tampilkan tombol kontrol musik
  const musicToggle = document.getElementById("musicToggle");
  musicToggle.style.display = "block";
  musicToggle.textContent = "🔊";

  // Set status musik menyala
  musicPlaying = true;

  fireConfetti();
  createHearts()
}


function showCryGif() {
  const cryGif = document.getElementById("cryGif");
  cryGif.style.display = "block";
  setTimeout(() => (cryGif.style.display = "none"), 3000);
}

function showGallery() {
  hideAllContent();
  document.getElementById("photoAlbum").style.display = "block";
  fireConfetti();
}

function showQuiz() {
  hideAllContent();
  document.getElementById("quiz").style.display = "block";
  fireConfetti();
}

function checkAnswer(button, isCorrect) {
  if (isCorrect) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }

  // Disable all options
  const parent = button.parentElement;
  const buttons = parent.querySelectorAll(".quiz-option");
  buttons.forEach((btn) => (btn.disabled = true));
  fireConfetti();
}

function showCountdown() {
  hideAllContent();
  document.getElementById("countdown").style.display = "block";

  // Set next birthday date (adjust month/day)
  const nextBirthday = new Date();
  nextBirthday.setMonth(4); // May (0-11)
  nextBirthday.setDate(13); // Date

  // If birthday already passed this year, set to next year
  if (new Date() > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const countdownTimer = document.getElementById("countdownTimer");
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = nextBirthday.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;

    if (distance < 0) {
      clearInterval(interval);
      countdownTimer.innerHTML = "HARI INI ULANG TAHUNMU SAYANG ❤️❤️🎉";
    }
  }, 1000);
  fireConfetti();
}

function showVideoMessage() {
  hideAllContent();
  const video = document.getElementById("myVideo");
  video.pause();         // pastikan tidak autoplay
  video.currentTime = 0; // reset ke awal
  document.getElementById("videoMessage").style.display = "block";
  fireConfetti();
}


function showLoveLetter() {
  hideAllContent();
  document.getElementById("loveLetter").style.display = "block";

  new Typed("#typedLetter", {
    strings: [
      `Sayangku tersayang,\n\nHari ini adalah hari yang sangat istimewa — hari ketika seseorang yang paling berarti dalam hidupku dilahirkan.\n\nsayang, sejak kamu hadir, hidupku berubah jadi lebih bermakna. Senyummu adalah penenang, suaramu adalah ketenangan, dan cintamu adalah anugerah terbesar yang pernah aku terima.\n\nDi mataku, kamu adalah definisi dari keindahan, bukan hanya karena wajahmu yang memesona, tapi karena hatimu yang begitu tulus.\nSetiap detik bersamamu selalu terasa baru. Kamu bukan hanya kekasih, kamu rumah untuk hatiku pulang, tempat di mana aku merasa paling diterima dan dicintai.\n\nDi hari ulang tahunmu ini, aku ingin kamu tahu satu hal:\nCintaku padamu bukan sekadar kata-kata, tapi janji.\nJanji untuk selalu berada di sisimu saat tawa maupun duka,\nMenjagamu dalam hangatnya peluk doa dan setia dalam langkah cinta.\n\nAku bersyukur kepada Allah yang mempertemukan kita. Setiap momen bersamamu adalah hadiah terindah.\n\nTerima kasih telah hadir dalam hidupku dengan segala cinta, kesabaran, dan kehangatanmu. Senyummu adalah damai, pelukmu adalah rumah, dan cintamu adalah kekuatan terbesar dalam hidupku.\n\nAku berjanji akan selalu mencintaimu, menghargaimu, dan menyayangimu sepanjang hidupku. Dalam suka maupun duka, dalam tawa maupun air mata, aku ingin terus bersamamu, menggenggam tanganmu, dan menua bersamamu.\n\nSemoga di umur barumu, semua impianmu mendekat satu per satu.\nSemoga kebahagiaan senantiasa memelukmu seperti aku yang selalu ingin memelukmu setiap hari.\nDan semoga cinta kita terus tumbuh, tak lekang oleh waktu, tak rapuh oleh jarak, tak pudar oleh usia.\n\nSelamat ulang tahun, kekasihku.\nAku mencintaimu, lebih dari yang bisa diucapkan, dan akan terus mencintaimu… sepanjang waktu.\n\nDengan cinta yang paling tulus,\nKekasihmu ❤️`,
    ],
    typeSpeed: 20,
    showCursor: false,
    onComplete: () => {
      document.getElementById("nextBtn").style.display = "inline-block";
    },
  });
  fireConfetti();
}

function showFinalSurprise() {
  hideAllContent();
  document.getElementById("finalSurprise").style.display = "block";
  fireConfetti();
}

function hideAllContent() {
  document.querySelectorAll(".content-box").forEach((box) => {
    box.style.display = "none";
  });
  fireConfetti();
}

function fireConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff4d6d", "#ff8fab", "#c9184a", "#fff"],
  });
}

function createHearts() {
  const container = document.getElementById("hearts-container");
  const heartCount = 20;

  const birthYear = 2006;
  const currentYear = new Date().getFullYear();
  const birthdayNumber = currentYear - birthYear;
  const userName = "Amelia";

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const showNumber = Math.random() < 0.3;
    heart.innerHTML = showNumber
    ? `❤️<div class="birthday-number">${birthdayNumber} ${userName}</div>`
    : `❤️`;
  
    // Ukuran font hati
    const fontSize = 50 + Math.random() * 50;
    heart.style.fontSize = `${fontSize}px`;

    // Ukuran layar dihitung agar hati tidak mepet keluar
    const maxLeft = window.innerWidth - fontSize;
    const maxTop = window.innerHeight - fontSize;

    heart.style.left = `${Math.random() * maxLeft}px`;
    heart.style.top = `${Math.random() * maxTop}px`;

    heart.style.animationDuration = `${5 + Math.random() * 10}s`;

    container.appendChild(heart);
  }
}
window.addEventListener("load", createHearts)


function createStars() {
  const count = 100;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.width = `${Math.random() * 10}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    document.body.appendChild(star);
  }
}

function createBubbles() {
  const bubbleCount = 20;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Ukuran bubble
    const bubbleSize = 10 + Math.random() * 500; // max 100px, jangan 500 di HP
    bubble.style.width = `${bubbleSize}px`;
    bubble.style.height = `${bubbleSize}px`;

    // Hitung batas kiri supaya nggak keluar layar
    const maxLeft = window.innerWidth - bubbleSize;
    const left = Math.random() * maxLeft;
    bubble.style.left = `${left}px`;

    // Animasi
    bubble.style.animationDuration = `${10 + Math.random() * 20}s`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;

    document.body.appendChild(bubble);
  }
}

// ========== ROMANTIC NIGHT MODE ========== //
function activateRomanticNightMode() {
  const hour = new Date().getHours();
  const body = document.body;
  const toggleBtn = document.getElementById("toggleNightMode");
  const moon = document.getElementById("moon");

  let starInterval;

  function createShootingStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
  
    // Atur posisi awal di luar layar kanan
    star.style.right = `-100px`;
    star.style.top = `${Math.random() * 100}px`;
  
    // Variasi kecepatan
    const duration = Math.random() * 1 + 1.5;
    star.style.animationDuration = `${duration}s`;
  
    // Variasi kemiringan
    const rotation = -15 + (Math.random() * 10 - 5);
    star.style.transform = `rotate(${rotation}deg)`;
  
    document.body.appendChild(star);
  
    setTimeout(() => {
      star.remove();
    }, duration * 1000);
  }

  function setNightMode(on) {
    if (on) {
      body.classList.add("romantic-night");
      toggleBtn.textContent = "🌙";
      moon.style.display = "block";
      createStars();
      createShootingStar(); // Langsung satu kali
      starInterval = setInterval(createShootingStar, 10000); 
    } else {
      body.classList.remove("romantic-night");
      toggleBtn.textContent = "☀️";
      moon.style.display = "none";
      clearInterval(starInterval);
      document.querySelectorAll(".star").forEach(star => star.remove());
    }
  }

  setNightMode(hour >= 18 || hour < 6);

  // Toggle manual
  toggleBtn.addEventListener("click", () => {
    const isNight = !body.classList.contains("romantic-night");
    setNightMode(isNight);
  });
}
activateRomanticNightMode();


