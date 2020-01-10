var neckpic_item;
var i = 0;
localStorage.setItem("shell-type1", "");
localStorage.setItem("shell-type2", "");
localStorage.setItem("shell-type3", "");
localStorage.setItem("shell-type4", "");
localStorage.setItem("shell-type5", "");

$(document).ready(function() {
    $('#fireworks_card').on('click', 'img', function() {
        console.log("fireworks_card");
        neckpic_item = this.src;
        console.log(this.name);
        i++;
        if (i == 1) {
            localStorage.setItem("shell-type1", this.name);
        } else if (i == 2) {
            localStorage.setItem("shell-type2", this.name);
        } else if (i == 3) {
            localStorage.setItem("shell-type3", this.name);
        } else if (i == 4) {
            localStorage.setItem("shell-type4", this.name);
        } else if (i == 5) {
            localStorage.setItem("shell-type5", this.name);
        }
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