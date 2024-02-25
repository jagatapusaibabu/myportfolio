function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToElement(className) {
  var element = document.querySelector("." + className);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}