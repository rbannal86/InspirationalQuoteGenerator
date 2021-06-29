import express from 'express';
import api from './api/api.js';
// require('dotenv').config();

const { PORT } = process.env;

const app = express();
const port = PORT || 3000;

app.use('/', express.static('build'));

app.use('/api', api);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
