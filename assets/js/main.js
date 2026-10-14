// Bring Hope for Children Tanzania — site interactions
(function () {
  var WHATSAPP_NUMBER = "255686119728";

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Header shadow on scroll
  var header = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  // Active nav link
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = menu.querySelectorAll("a[href^='#']:not(.btn)");
  if ("IntersectionObserver" in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navIo.observe(s); });
  }

  // Buttons that preselect the contact subject
  var subject = document.getElementById("subject");
  document.querySelectorAll("[data-subject]").forEach(function (btn) {
    btn.addEventListener("click", function () { subject.value = btn.dataset.subject; });
  });

  // Contact form -> opens WhatsApp with a pre-filled message
  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var fields = ["name", "email", "message"];
    var firstBad = null;
    fields.forEach(function (id) {
      var el = document.getElementById(id);
      var ok = el.checkValidity() && el.value.trim() !== "";
      el.classList.toggle("invalid", !ok);
      if (!ok && !firstBad) firstBad = el;
    });
    if (firstBad) {
      note.textContent = "Please fill in your name, a valid email and a message.";
      firstBad.focus();
      return;
    }
    note.textContent = "";
    var text =
      "Hello Bring Hope for Children Tanzania!\n\n" +
      "Name: " + document.getElementById("name").value.trim() + "\n" +
      "Email: " + document.getElementById("email").value.trim() + "\n" +
      "Topic: " + subject.value + "\n\n" +
      document.getElementById("message").value.trim();
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
