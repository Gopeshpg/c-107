function startClassification(){
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1bhPBh0qG/model.json',modelready);
}
function modelready(){
   classifier.classify(gotResults);
}
function gotResults(error, results) {
   if(error){
      console.error(error);
   }
   else{
      console.log(results);
   }
}
