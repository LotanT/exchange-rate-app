const express = require('express');
const cors = require('cors');
const path = require('path');

const dbService = require('./services/db.service');

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  const corsOptions = {
    origin: [
      'http://127.0.0.1:8080',
      'http://localhost:8080',
      'http://127.0.0.1:3000',
      'http://localhost:3000',
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

app.get('/api/:currency/:date', async (req, res) => {
  try {
    const date = req.params.date;
    const currency = req.params.currency;
    const collection = await dbService.getCollection(currency);
    const ratesData = await collection.findOne({ date: date });
    res.send(ratesData);
  } catch (err) {
    res.status(500).send({ err: 'Failed to get date sdf' });
  }
});

app.post('/api/:currency', async (req, res) => {
  try {
    const currency = req.params.currency;
    let ratesData = req.body;
    const collection = await dbService.getCollection(currency);
    await collection.insertOne(ratesData);
    res.send(ratesData);
  } catch (err) {
    res.status(500).send({ err: 'Failed to add date' });
  }
});

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
