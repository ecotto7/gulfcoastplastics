(function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = year;
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".sub-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.parentElement;
      var open = item.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  var track = document.querySelector("[data-carousel]");
  if (track) {
    var slides = track.children;
    var index = 0;
    var timer = null;
    var dots = document.querySelectorAll(".dots button");

    function show(next) {
      index = (next + slides.length) % slides.length;
      var width = track.parentElement.clientWidth;
      track.style.transform = "translateX(" + (-index * width) + "px)";
      dots.forEach(function (dot, dotIndex) {
        if (dotIndex === index) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    }

    function start() {
      stop();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = window.setInterval(function () { show(index + 1); }, 5000);
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    var prev = document.querySelector(".hero-nav.prev");
    var next = document.querySelector(".hero-nav.next");
    if (prev) prev.addEventListener("click", function () { show(index - 1); start(); });
    if (next) next.addEventListener("click", function () { show(index + 1); start(); });
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(Number(dot.getAttribute("data-slide")));
        start();
      });
    });

    var hero = track.closest(".hero");
    if (hero) {
      hero.addEventListener("mouseenter", stop);
      hero.addEventListener("mouseleave", start);
      hero.addEventListener("focusin", stop);
      hero.addEventListener("focusout", start);
    }
    show(0);
    start();
    window.addEventListener("resize", function () { show(index); });
  }

  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lightboxImage = lightbox.querySelector("img");
    var closeButton = lightbox.querySelector(".lightbox-close");

    function closeLightbox() {
      lightbox.classList.remove("open");
      lightboxImage.removeAttribute("src");
    }

    document.querySelectorAll("[data-full]").forEach(function (button) {
      button.addEventListener("click", function () {
        lightboxImage.src = button.getAttribute("data-full");
        lightboxImage.alt = button.getAttribute("data-alt") || "";
        lightbox.classList.add("open");
        closeButton.focus();
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeLightbox();
    });
  }
})();
