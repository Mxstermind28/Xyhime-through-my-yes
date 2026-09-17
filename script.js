const opening = document.getElementById("opening");
const experience = document.getElementById("experience");
const openHeartBtn = document.getElementById("openHeartBtn");

const bouquetBtn = document.getElementById("bouquetBtn");
const bouquetScreen = document.getElementById("bouquetScreen");

const roseMessage = document.getElementById("roseMessage");


// ===============================
// OPEN THE EXPERIENCE
// ===============================

openHeartBtn.addEventListener("click", () => {

  opening.style.transition = "opacity 1.2s ease";
  opening.style.opacity = "0";

  createHeartBurst();

  setTimeout(() => {

    opening.classList.add("hidden");

    experience.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    observeSections();

  }, 1200);

});


// ===============================
// SCROLL REVEAL
// ===============================

function observeSections() {

  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  }, {
    threshold: 0.18
  });

  elements.forEach(element => observer.observe(element));

}


// ===============================
// FLOATING HEART PARTICLES
// ===============================

function createParticle() {

  const container =
    document.getElementById("particles");

  const particle =
    document.createElement("div");

  particle.className = "particle";

  const symbols = [
    "♡",
    "♥",
    "✦",
    "·"
  ];

  particle.innerText =
    symbols[Math.floor(Math.random() * symbols.length)];

  particle.style.left =
    Math.random() * 100 + "vw";

  particle.style.fontSize =
    (Math.random() * 15 + 8) + "px";

  particle.style.color =
    Math.random() > .5
      ? "#d8b4fe"
      : "#a855f7";

  particle.style.animationDuration =
    (Math.random() * 7 + 8) + "s";

  container.appendChild(particle);

  setTimeout(() => {

    particle.remove();

  }, 16000);

}


setInterval(createParticle, 900);


// ===============================
// HEART BURST
// ===============================

function createHeartBurst() {

  const container =
    document.getElementById("particles");

  for (let i = 0; i < 30; i++) {

    const heart =
      document.createElement("div");

    heart.className = "particle";

    heart.innerText = "♥";

    heart.style.left =
      (45 + Math.random() * 10) + "vw";

    heart.style.bottom = "45vh";

    heart.style.fontSize =
      (Math.random() * 20 + 10) + "px";

    heart.style.color = "#c084fc";

    heart.style.animationDuration =
      (Math.random() * 3 + 3) + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);

  }

}


// ===============================
// BOUQUET FINALE
// ===============================

bouquetBtn.addEventListener("click", () => {

  experience.style.transition =
    "opacity 1.2s ease";

  experience.style.opacity = "0";

  setTimeout(() => {

    experience.classList.add("hidden");

    bouquetScreen.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    createPetalRain();

  }, 1200);

});


// ===============================
// INTERACTIVE ROSES
// ===============================

document.querySelectorAll(".rose")
  .forEach(rose => {

    rose.addEventListener("click", () => {

      const message =
        rose.dataset.message;

      roseMessage.style.opacity = "0";

      setTimeout(() => {

        roseMessage.innerText = message;

        roseMessage.style.transition =
          "opacity .8s ease";

        roseMessage.style.opacity = "1";

      }, 300);

      createMiniHearts(rose);

    });

  });


// ===============================
// MINI HEARTS FROM ROSES
// ===============================

function createMiniHearts(rose) {

  const rect =
    rose.getBoundingClientRect();

  const container =
    document.getElementById("particles");

  for (let i = 0; i < 8; i++) {

    const heart =
      document.createElement("div");

    heart.className = "particle";

    heart.innerText = "♥";

    heart.style.position = "fixed";

    heart.style.left =
      rect.left +
      rect.width / 2 +
      (Math.random() * 50 - 25) +
      "px";

    heart.style.bottom =
      window.innerHeight -
      rect.top +
      "px";

    heart.style.color = "#c084fc";

    heart.style.fontSize =
      (Math.random() * 10 + 8) + "px";

    heart.style.animationDuration =
      "3s";

    container.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    }, 3500);

  }

}


// ===============================
// PURPLE PETAL RAIN
// ===============================

function createPetalRain() {

  let petalsCreated = 0;

  const rain =
    setInterval(() => {

      const petal =
        document.createElement("div");

      petal.innerText = "❀";

      petal.style.position = "fixed";

      petal.style.top = "-40px";

      petal.style.left =
        Math.random() * 100 + "vw";

      petal.style.color = "#c084fc";

      petal.style.fontSize =
        (Math.random() * 18 + 8) + "px";

      petal.style.opacity =
        Math.random() * .5 + .3;

      petal.style.zIndex = "200";

      petal.style.pointerEvents = "none";

      petal.style.transition =
        `transform ${5 + Math.random() * 5}s linear,
         opacity 8s linear`;

      document.body.appendChild(petal);

      requestAnimationFrame(() => {

        petal.style.transform =
          `translateY(110vh)
           translateX(${Math.random() * 150 - 75}px)
           rotate(${Math.random() * 720}deg)`;

        petal.style.opacity = "0";

      });

      setTimeout(() => {

        petal.remove();

      }, 10000);

      petalsCreated++;

      if (petalsCreated >= 70) {

        clearInterval(rain);

      }

    }, 120);

}
