function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("done");
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("x = " + noseX + ", y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('beluga.png');
}