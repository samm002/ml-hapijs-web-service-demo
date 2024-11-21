const dataService = require('../services/dataService');
const predictionService = require('../services/predictionService');

const index = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'view index',
      data: "you're viewing predict index",
    });
  } catch (error) {
    next(error);
  }
};

const predict = async (req, res, next) => {
  try {
    const image = req.file;
    const model = req.app.locals.model;

    if (!model) {
      throw new Error('Model failed to load!');
    }

    if (!image) {
      throw new Error('Please insert image!');
    }

    const { result, confidenceScore, explanation, suggestion } =
      await predictionService.predict(model, image.buffer);

    const { id, createdAt } = await dataService.createPrediction(
      result,
      confidenceScore,
      explanation,
      suggestion
    );

    return res.status(201).json({
      status: 'success',
      message:
        confidenceScore > 99
          ? 'Model is predicted successfully.'
          : 'Model is predicted successfully but under threshold. Please use the correct picture',
      data: {
        id,
        result,
        confidenceScore,
        explanation,
        suggestion,
        createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { index, predict };
