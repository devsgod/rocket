var layer1 = document.getElementById('body');
var body = layer1.getContext('2d');
body.scale(0.6, 0.6);

var bodypic_item;
var bodysel_status = 0;

function make_body(X, Y) {
    body_image = new Image();
    if (bodypic_item != undefined) {
        body_image.src = bodypic_item;
        body_image.onload = function() {
            body.drawImage(body_image, X, Y);
        }
        bodysel_status = 1;
    }
}

$(document).ready(function() {
    $('#body_card').on('click', 'img', function() {
        bodypic_item = this.src;
        console.log("body_card");
        body.clearRect(0, 0, layer1.width / 0.6, layer1.height / 0.6);
        make_body(1000, 450);
    });

    $("#body_next").click(function() {
        if (bodysel_status == 1) {
            $("#body_card").css("display", "none");
            $("#head_card").css("display", "block");
        }
    });
});