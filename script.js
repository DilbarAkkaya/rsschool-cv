const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-item');
const navBar = document.querySelector('.navbar');
const anchors = document.querySelectorAll('a[href*="#"]');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navList.classList.toggle("change");
  navBar.classList.toggle('active');
});
for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    navBar.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    navList.classList.remove('change');
  })
}