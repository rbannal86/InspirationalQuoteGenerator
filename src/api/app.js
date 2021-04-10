import express from 'express';
import { templates } from '../Logic/templates.js';
import { fillTemplate } from '../Logic/generator.js';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send("We're live!");
});

app.get('/api/quote', (req, res) => {
  console.log(templates.length);
  const randomNum = Math.floor(Math.random() * templates.length);

  const quote = fillTemplate(null, null, randomNum);
  console.log(quote);
  res.send(quote);
});

app.listen(port, () => {
  console.log('Server is listening');
});
