gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(CSSRulePlugin);

// Homepage Animations
// gsap.from("#title", {duration: 2, opacity: 0});
// gsap.from("#myTopnav.firstpage", {duration: 2, opacity: 0});

// // Projects Page Animations
// gsap.from(".row", {duration: 2, opacity: 0, y: +20, stagger: 1.25,});

// // Contact Page Animations
// gsap.from("#socialLinks", {duration: 2, opacity: 0, x: +10, stagger: 0.25,});

// gsap.from(".project-cards card", {duration: 2, opacity: 0, y: +30, stagger: 0.5,});
// DOM Elements

const darkButton = document.getElementById('colorModeButton');
const darkIcon = document.getElementById('colorModeIcon');
const body = document.body;

// Apply the cached theme on reload
const theme = localStorage.getItem('theme');

if (theme == 'light') {
    body.classList.replace('dark', 'light');
}



// Button Event Handlers


darkButton.onclick = () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');

  } else {
    body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
  }
};
// 