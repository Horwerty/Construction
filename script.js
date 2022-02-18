const menu = document.querySelector(".menu");
const navCover = document.querySelector(".mobileNav");
const menuIcon = document.querySelector(".menuIcon");

const main = document.getElementById("hero");
const logo = document.getElementById("logo");

main.style.backgroundImage =
  "url('https://media.gettyimages.com/photos/housing-development-under-construction-picture-id157284152?k=20&m=157284152&s=612x612&w=0&h=alOupcvMGyPlt3LjDazL6FA9BXvGstREbRGNjJG_aD0=')";

const dash1 = document.getElementById("dash1");
const dash2 = document.getElementById("dash2");
const dash3 = document.getElementById("dash3");

dash1.addEventListener("click", function () {
  hero.style.backgroundImage =
    "url('https://media.gettyimages.com/photos/construction-site-and-development-in-the-city-picture-id1139864421?k=20&m=1139864421&s=612x612&w=0&h=FKl_mBnKvK5mXoVj7SBNwDiWdvSS3Cj-bVpUGOO2DCI=')";
});

dash2.addEventListener("click", function () {
  hero.style.backgroundImage =
    "url('https://media.gettyimages.com/photos/concrete-highrise-construction-site-picture-id170616024?k=20&m=170616024&s=612x612&w=0&h=ivrlQXhgVgNfRDAL36VLFH_iqbdZATpFvcti9jj9kG0=')";
});

dash3.addEventListener("click", function () {
  hero.style.backgroundImage =
    "url('https://media.gettyimages.com/photos/project-managers-and-construction-workers-picture-id85871434?k=20&m=85871434&s=612x612&w=0&h=MMXK-pGydkevF6M_AwukxLNI67-Dsjtbdu16xviyLHc=')";
});

menu.addEventListener("click", () => {
  navCover.classList.toggle("openMobileNav");
  menuIcon.classList.toggle("bx-x");
});

navCover.addEventListener("click", () => {
  navCover.classList.remove("openMobileNav");
  menuIcon.classList.remove("bx-x");
});

logo.addEventListener("click", () => {
  navCover.classList.remove("openMobileNav");
  menuIcon.classList.remove("bx-x");
});