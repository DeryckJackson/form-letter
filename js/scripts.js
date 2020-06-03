$(document).ready(function() {
  $("#form").submit(function (event) {
    const personInput = $("input#person").val();

    $(".person").append(personInput);

    $("#hidden").show();

    event.preventDefault();
  })
});