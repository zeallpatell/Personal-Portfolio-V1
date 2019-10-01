/* -----LOGO-ANIMATION----- */
const topHf = document.querySelector(".top-half-circle");
const topLt = document.querySelector(".top-left-triangle");
const bottomRt = document.querySelector(".bottom-right-triangle");
const bottomHf = document.querySelector(".bottom-half-circle");
const hero = document.querySelector(".hero-text-box");
const nav = document.querySelector(".main-nav");

const tl = new TimelineMax();

tl.fromTo(topHf, 0.7, { y: "120px" }, { y: "0px", ease: Power2.easeInOut })
  .fromTo(topLt, 0.5, { x: "41px" }, { x: "0px", ease: Power2.easeInOut })
  .fromTo(bottomRt, 0.5, { x: "-125px", y: "50px" }, { x: "-85px", y: "50px", ease: Power2.easeInOut }, "-=0.5")
  .fromTo(bottomHf, 0.7, { y: "-45px" }, { y: "98px", ease: Power2.easeInOut }, "-=1.2")
  .fromTo(hero, 0.7, { x: "-200%" }, { x: "0%", ease: Power2.easeInOut })
  .fromTo(nav, 0.7, { x: "150%" }, { x: "0%", ease: Power2.easeInOut }, "-=0.7");

/* -----HEADER-PARALLAX----- */
const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

/* -----NAVIGATION-SCROLL----- */
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
