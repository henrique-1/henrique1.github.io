$(document).ready(function () {
  $("#contact").on("submit", function (event) {
    event.preventDefault();
    document.location.href = `mailto:contato.henrique.bissoli@gmail.com?subject=Quero cotar um projeto!&body=Olá, me chamo ${$("#fullname").val()} - ${$(
      "#email"
    ).val()}  e gostaria de cotar um projeto com você. ${$("#description").val()}`;
  });
});
