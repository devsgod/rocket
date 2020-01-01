var layer3 = document.getElementById('face');
var face = layer3.getContext('2d');
face.scale(0.6, 0.6);

var facepic_item;
var facesel_status = 0;

function make_face(X, Y) {
    face_image = new Image();
    if (facepic_item != undefined) {
        face_image.src = facepic_item;
        face_image.onload = function() {
            face.drawImage(face_image, X, Y);
        }
        facesel_status = 1;
    }
}

$(document).ready(function() {
    $('#face_card').on('click', 'img', function() {
        console.log("face_card");
        facepic_item = this.src;
        face.clearRect(0, 0, layer3.width / 0.6, layer3.height / 0.6);
        make_face(935, 500);
    });

    $("#face_next").click(function() {
        if (facesel_status == 1) {
            $("#face_card").css("display", "none");
            $("#neck_card").css("display", "block");
        }
    });
});