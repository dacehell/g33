$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();

  $("#enviar").click(function () {
    alert("El correo fue enviado!!!");
  });

  $("body").on("dblclick", "h3", function () {
    $(this).css("color", "red");
  });

  $(".title").click(function () {
    $(".parrafo").toggle();
  });
});
