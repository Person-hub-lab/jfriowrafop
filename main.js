start();{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

modelReady();{
classifier.classify(start(gotResults));
}

classifier.classify('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json' = gotResults);

gotResults(error, results);{
  console.log(results);
}

