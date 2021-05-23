Webcam.set({
width:300,height:300,image_format:'png',png_quality:90,
constraints:{facingMode:'environment'}
});

camera=document.getElementById("camera");
Webcam.attach("camera");

function takesnapshot() {
    Webcam.snap(function(data_url){
document.getElementById("result").innerHTML="<img id='capturedimage' src='"+data_url+"'>";
    });
}

console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelloaded);

function modelloaded() {
    console.log("modelloaded");
}

function identifyimage() {
    img=document.getElementById("capturedimage");
    classifier.classify(img,getresult);
}

function getresult(error,results){
    if(error){
        console.log(error);
    } 
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;

    }
}