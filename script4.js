$(document).ready(function () {
  var cajaoculta = $("#oculta");
  $("#encendedor").on("click", function (event) {
    cajaoculta.show(2000, "swing");
  });
  $("#ocultador").on("click", function (event) {
    cajaoculta.hide(2000, "swing");
  });
});
