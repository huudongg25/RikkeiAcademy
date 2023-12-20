// transition cho thanh header
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});
//dong mo thanh navbar
const el = document.querySelector(".sub-menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  el.style.removeProperty("display");
  el.classList.toggle("active");
});

close.addEventListener("click", () => {
  el.style.display = "none";
});


