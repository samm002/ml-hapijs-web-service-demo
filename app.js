require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./src/routes');
const errorHandler = require('./src/middlewares/errorHandler');
const initializeModel = require('./src/configs/initializeModel');
const corsOptions = require('./src/configs/corsOptions');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Skin cancer classification API is running!</h1>');
});

app.use(cors(corsOptions));

// use this to enable any cors endpoint
//app.use(cors());

app.use(express.json());
app.use(router);

app.use(errorHandler);

initializeModel(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
