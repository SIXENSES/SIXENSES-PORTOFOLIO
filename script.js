/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* Close menu after clicking navigation */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".project-card, .team-card, .vm-card, .about-image, .about-content"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/* =========================
   PROJECT CARD DELAY
========================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.1}s`;

});


/* =========================
   TEAM CARD DELAY
========================= */

const teamCards =
    document.querySelectorAll(".team-card");

teamCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.1}s`;

});

/* =========================
   SOCIAL SHARE BUTTONS
========================= */

(function(){
  var copyBtn=document.getElementById('ab-16-copy');
  if(!copyBtn)return;
  copyBtn.addEventListener('click',function(){
    var url=window.location.href;
    if(navigator.clipboard){
      navigator.clipboard.writeText(url).then(showCopied).catch(function(){fallbackCopy(url)});
    }else{fallbackCopy(url)}
  });
  function showCopied(){
    copyBtn.classList.add('is-copied');
    copyBtn.dataset.tooltip='Copied!';
    setTimeout(function(){
      copyBtn.classList.remove('is-copied');
      copyBtn.dataset.tooltip='Copy Link';
    },1500);
  }
  function fallbackCopy(url){
    var t=document.createElement('textarea');
    t.value=url;t.style.position='fixed';t.style.opacity='0';
    document.body.appendChild(t);t.select();
    try{document.execCommand('copy');showCopied();}catch(e){}
    document.body.removeChild(t);
  }
})();