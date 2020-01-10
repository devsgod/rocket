var layer4 = document.getElementById('neck');
var neck = layer4.getContext('2d');
neck.scale(0.6, 0.6);

var neckpic_item;
var necksel_status = 0;

function make_neck(X, Y) {
    neck_image = new Image();
    if (neckpic_item != undefined) {
        neck_image.src = neckpic_item;
        neck_image.onload = function() {
            neck.drawImage(neck_image, X, Y);
        }
        necksel_status = 1;
    }
}

$(document).ready(function() {
    $('#neck_card').on('click', 'img', function() {
        console.log("neck_card");
        neckpic_item = this.src;
        console.log(this.name);
        neck.clearRect(0, 0, layer4.width / 0.6, layer4.height / 0.6);
        make_neck(1020, 930);
    });

    $("#neck_next").click(function() {
        if (necksel_status == 1) {
            $("#neck_card").css("display", "none");
            $("#fireworks_card").css("display", "block");
        }
    });
});