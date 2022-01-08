var point = 0;
var pic = 0;

$(document).keyup(function(event) {
    pop();
});

function pop() {
    document.getElementById("music").play();
    point = point + 1;
    changePic();
    document.getElementById("point").innerHTML = point
}

function changePic() {
    if (pic == 0) {
        pic = 1;
        document.getElementById("pic").style.backgroundImage = "url('47712.jpg')";
        time();
    } else {
        pic = 0;
        document.getElementById("pic").style.backgroundImage = "url('47710.jpg')";
    }
}

function time() {
    var check = true;
    let start = Date.now();

    setInterval(function() {
        if (check) {
            let diff = Math.floor((Date.now() - start) / 10);
            console.log(diff);

            if (diff == 10) {
                check = false;
                changePic();
            }
        }
    }, 10);
}