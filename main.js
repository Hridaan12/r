noseY = 0; 
difference = 0;
rightwristX = 0;
leftwristX = 0;
function setup() {
    video = createCapture(VIDEO);
     video.size(560, 550);
     canvas = createCanvas(300, 300);
      canvas.position(560, 150);
      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log('posenet Is Initalised');
}
function draw(){
    background('#f20c18');
    stroke('#0e64ed');
    fill('#09ff00');
    square(noseX, noseY, difference);
}
function gotPoses(results){
    if(results.length >  0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX = "+noseX+"NoseY = "+noseY);
        leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX - rightwristX);


    }
}
