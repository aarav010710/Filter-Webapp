function preload()
{

}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', got_poses);
}

function modelLoaded()
{
    console.log("PoseNet model is loaded!!");
}

function got_poses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x - 15;
noseY = results[0].pose.nose.y - 15;
}
}

function draw()
{

}
function take_snapshot()
{
    save('my_filtered_img.png');
}