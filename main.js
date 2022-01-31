prediction1 = "";

Webcam.set ({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2OMC1DAfd/model.json' , modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function speak(){
    synth = window.speechSynthesis;
    speak_data_1 = "The prediction is" + prediction1;
    utter_this = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utter_this);
}