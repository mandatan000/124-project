function preload(){

}

function draw(){

}

function setup(){
    var video=createCapture(VIDEO);
    video.size(550, 500);

    var canvas=createCanvas(550, 500);
    canvas.position(560, 110);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function modelLoaded(){
    console.log("Apple");
}