//smooth scroll
$(document).ready(function () {
  $("a[href*='#']:not([href='#])").click(function () {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
    event.preventDefault();
  });
});

// nav //
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  //toggle nab
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //animate link
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });
    //burger animation
    burger.classList.toggle('toggle');
  });
}
navSlide();

$(window).scroll(function () {
  $(".landing-text, .services-text, .portfolio-text").css("opacity", 1.5 - $(window).scrollTop() / 250);
});

$(function() {
  var $nav = $('nav'),
    $window = $(window),
    bgArray = ["black"],
    navHeight = 50,
    sectionHeight = 150;

  $window.scroll(function() {
    $nav.css('background', bgArray[Math.floor(($nav.offset().top + navHeight)
        / sectionHeight)]);
  });
});



