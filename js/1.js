window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  menuToggle.classList.toggle("active");
}

//navbar

class MobileNavbar {
  constructor(mobileMenu, navigation, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navigation = document.querySelector(navigation);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navigation.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".navigation",
  ".navigation li"
);
mobileNavbar.init();

//form

function submitForm() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const adminEmail = "juremitok@gmail.com";
  const subject = "New Contact Form Submission";
  const body = `Name: ${name}\nMessage: ${message}`;
  const mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
