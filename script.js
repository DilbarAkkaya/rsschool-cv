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

console.group('%cScoring criteria', 'color: #696969; background-color:  ##6e9b9b')
console.log('%c+10. Deployed on gh-pages, the link is submitted', 'color: #696969; background-color:  #7fffd4')
console.log('%c+10. The layout pass the validation (https://validator.w3.org/).Document checking completed. No errors or warnings to show.', 'color: #696969; background-color:  #7fffd4')
console.log('%c+20. There are semantic tags in the code (pay attention, they should be logically used, not just for points) header, main, footer, nav, only one h1 for page, several h2', 'color: #696969; background-color:  #7fffd4')
console.log('%c+10. Footer contains link to your github , date (month, year), course logo with the link', 'color: #696969; background-color:  #7fffd4')
console.log('%c+10. Present css styles', 'color: #696969; background-color:  #7fffd4')
console.log('%c+10. Horizontal centered layout (decreasing the browser width - the layout still in the center).', 'color: #696969; background-color:  #7fffd4')
console.log('%c+10. The photo exist, the alt attribute is present', 'color: #696969; background-color:  #7fffd4')
console.log('%c+10. Navigation (contacts and skills) did with ul > li or ul > li > a', 'color: #696969; background-color:  #7fffd4')
console.log('%c+5. Brief information about yourself', 'color: #696969; background-color:  #7fffd4')
console.log('%c+5. Contacts', 'color: #696969; background-color:  #7fffd4')
console.log('%c+5. Skills', 'color: #696969; background-color:  #7fffd4')
console.log('%c+5. Code examples ( using appropriate symbols or tags)', 'color: #696969; background-color:  #7fffd4')
console.log('%c+5. Project examples', 'color: #696969; background-color:  #7fffd4')
console.log('%c+5. Education and English level', 'color: #696969; background-color:  #7fffd4')
console.group('%cTotal score 120 points', 'color: #696969; background-color:  ##6e9b9b')