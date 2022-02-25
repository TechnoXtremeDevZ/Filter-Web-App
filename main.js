var nose_x;
var nose_y;
var moustache;

function preload() {
    moustache = "m.png";
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();

    var poseModel = ml5.poseNet(video, modelLoaded);
    poseModel.on("pose", gotPose);
}

function draw() {
    image(video, 0, 0, 500, 400);
    image(moustache, nose_x - 15, nose_y - 15, 30, 30)

    fill("red");
    stroke("red");
}

function takeSnapshot() {
    save("selfie.png");
}

function modelLoaded() {
    console.log("Model is Loaded.");
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}
