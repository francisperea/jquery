$(document).ready(function () {
  var cajaoculta = $("#oculta");
  $("#encendedor").on("click", function (event) {
    cajaoculta.show(1000, "swing");
  });
  $("#ocultador").on("click", function (event) {
    cajaoculta.hide(1000, "swing");
  });
});
