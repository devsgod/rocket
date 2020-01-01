var layer2 = document.getElementById('head');
var head = layer2.getContext('2d');
head.scale(0.6, 0.6);

var headpic_item;
var headsel_status;

function make_head(X, Y) {
    head_image = new Image();
    if (headpic_item != undefined) {
        head_image.src = headpic_item;
        head_image.onload = function() {
            head.drawImage(head_image, X, Y);
        }
        headsel_status = 1;
    }
}

$(document).ready(function() {
    $('#head_card').on('click', 'img', function() {
        headpic_item = this.src;
        console.log("head_card");
        head.clearRect(0, 0, layer2.width / 0.6, layer2.height / 0.6);
        make_head(975, 180);
    });

    $("#head_next").click(function() {
        if (headsel_status == 1) {
            $("#head_card").css("display", "none");
            $("#face_card").css("display", "block");
        }
    });
});