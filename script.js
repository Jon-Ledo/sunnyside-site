const hamburger = document.querySelector('.hamburger');
const navUL = document.querySelector('.navbar__links-container');
const linkColor = document.querySelector('.link--white')

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
  linkColor.classList.remove('link--white');
  linkColor.classList.add('link--yellow');
})