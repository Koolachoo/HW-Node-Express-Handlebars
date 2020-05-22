$(document).ready(function () {

    $(".add").on("submit", function (event) {
        event.preventDefault();

        var addBurger = {
            addBurger: $(".add [name = burgerText]").val().trim()
        };


        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger,
        }).then(function () {
          
            location.reload();
        })
    });

    $(".munch").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('id');

        $.ajax(`/api/burgers/` + id, {
            type: "PUT",

        }).then(function () {
            console.log("The burger was munched");
            location.reload();
        });
    });

 


});
