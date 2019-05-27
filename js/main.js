let mobilenet;
let dog;

function modelReady() {
  console.log("model ready");
}

function imageReady() {
  image(dog, 0, 0, width, height);
  mobilenet.predict(dog, gotResults);
}

function gotResults(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
    let label = data[0].className;
    let prob = data[0].probability;
    fill(255);
    textSize(64);
    text(label, 10, height - 100);
    textSize(32);
    text(prob, 10, height - 50);
  }
}
function setup() {
  createCanvas(640, 480);
  dog = createImg("../images/river.jpg", imageReady);
  dog.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
