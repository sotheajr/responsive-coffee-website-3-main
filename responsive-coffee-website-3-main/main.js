/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const header = document.getElementById("header");

const scrolHeader = () => {
  if (window.scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
};

// Function to open Sign Up modal
function openSignupModal() {
  document.getElementById("signup-modal").style.display = "flex";
}

// Function to close Sign Up modal
function closeSignupModal() {
  document.getElementById("signup-modal").style.display = "none";
}

// Function to open Login modal
function openLoginModal() {
  document.getElementById("login-modal").style.display = "flex";
}

// Function to close Login modal
function closeLoginModal() {
  document.getElementById("login-modal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  let signupModal = document.getElementById("signup-modal");
  let loginModal = document.getElementById("login-modal");

  if (event.target === signupModal) {
    signupModal.style.display = "none";
  }
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
};

// Social signup function
function socialSignup(platform) {
  alert(`Signing up with ${platform}`);
  closeSignupModal();
}

// Handle form submission for login
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login successful!");
    closeLoginModal();
  });

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper(".swiper", {
  direction: "horizontal", // ✅ Scroll ដេក
  loop: true,
  grabCursor: true,
  spaceBetween: 20, // ✅ ចន្លោះរវាង slide
  slidesPerView: "auto",
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2, // ✅ នៅលើ Tablet មាន 2 slide
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3, // ✅ នៅលើ Desktop មាន 3 slide
      spaceBetween: 40,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up"); // ✅ កែឲ្យត្រឹមត្រូវ
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        `.nav__menu a[href*="${sectionId}"]`
      );

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
});
sr.reveal(".popular__swiper, .footer__container, .footer__copy");
sr.reveal(`.home__coffee`, { delay: 1000, distance: "200px", duration: 1500 });
sr.reveal(`.home__splash`, { delay: 1600, scale: 0, duration: 1500 });
sr.reveal(`.home__bean-1, .home__bean-2`, {
  delay: 2600,
  scale: 0,
  duration: 1500,
  rotate: { z: 180 },
});
sr.reveal(`.home__ice-1, .home__ice-2`, {
  delay: 2600,
  scale: 0,
  duration: 1500,
  rotate: { z: 180 },
});
sr.reveal(`.home__leaf`, {
  delay: 2800,
  scale: 0,
  duration: 1500,
  rotate: { z: 90 },
});
sr.reveal(`.home__title`, {
  delay: 3500,
});
sr.reveal(`.home__data, .home__sticker`, {
  delay: 4000,
});
sr.reveal(".about__data", { origin: "left" });
sr.reveal(".about__images", { origin: "right" });
sr.reveal(".about__coffee", { delay: 1000 });
sr.reveal(".about__leaf-1, .about__leaf-2", { delay: 1400, rotate: { z: 90 } });
sr.reveal(".products__card, .contact__info", { interval: 100 });
sr.reveal(".contact__shape", { delay: 600, scale: 0 });
sr.reveal(".contact__delivery", { delay: 1200 });
