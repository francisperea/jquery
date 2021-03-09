$(document).ready(function () {
  $("button.siguiente").on("click", function (event) {
    $("h1").addClass("cabecera");
  });
  $("ul#lista li").mouseenter(function () {
    $(this).toggleClass("seleccionado");
  });
  $("ul#lista li").mouseleave(function () {
    $(this).toggleClass("seleccionado");
  });
});