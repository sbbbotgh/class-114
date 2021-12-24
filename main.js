function preload(){

}

function setup(){
canvas = createCanvas(600,600);
canvas.position(110,250);
vid = createCapture(VIDEO);
vid.hide();
tint_c;
}

function draw(){
image(vid, 0, 0, 600, 600);
tint(tint_c);
}

function take_snapshot(){
save('cam.py.png');
}

function filter_tint(){
tint_c = document.getElementById("color_name").value;
}
