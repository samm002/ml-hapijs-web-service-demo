const tf = require('@tensorflow/tfjs-node');

const predictionDetails = require('../utils/predictionDetails');

const predict = async (model, image) => {
  const tensor = tf.node
    .decodeJpeg(image)
    .resizeNearestNeighbor([224, 224])
    .expandDims()
    .toFloat();

  const prediction = await model.predict(tensor);
  const score = await prediction.data();
  const confidenceScore = Math.max(...score) * 100;

  const classes = [
    'Melanocytic nevus',
    'Squamous cell carcinoma',
    'Vascular lesion',
  ];

  const classResult = tf.argMax(prediction, 1).dataSync()[0];
  const label = classes[classResult];

  let explanation, suggestion;

  switch (label) {
    case classes[0]:
      explanation = predictionDetails[classes[0]].explanation;
      suggestion = predictionDetails[classes[0]].suggestion;
      break;

    case classes[1]:
      explanation = predictionDetails[classes[1]].explanation;
      suggestion = predictionDetails[classes[1]].suggestion;
      break;

    case classes[2]:
      explanation = predictionDetails[classes[2]].explanation;
      suggestion = predictionDetails[classes[2]].suggestion;
      break;

    default:
      explanation = 'Unknown class';
      suggestion = 'No suggestion available';
      break;
  }

  return { result: label, confidenceScore, explanation, suggestion };
};

module.exports = { predict };
