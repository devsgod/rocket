var neckpic_item;

$(document).ready(function() {
    $('#fireworks_card').on('click', 'img', function() {
        console.log("fireworks_card");
        neckpic_item = this.src;
        console.log(this.name);
        localStorage.setItem("shell-type", this.name);
    });

    $("#fireworks_next").click(function() {
        if (necksel_status == 1) {
            $("#fireworks_card").css("display", "none");
            $("#neck").css("display", "none");
            $("#face").css("display", "none");
            $("#body").css("display", "none");
            $("#head").css("display", "none");
            $("#head").css("display", "none");
            $("#fireworks").css("display", "block");
            window.location = "./fireworks.html";
        }
    });
});