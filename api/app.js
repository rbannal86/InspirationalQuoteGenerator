// import express from 'express';
// import { templates } from '../Logic/templates.js';
// import { fillTemplate } from '../Logic/generator.js';
// import { PORT, NODE_ENV } from './config.js';
// require('dotenv').config();

module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
  });
};

// const app = express();
// const server = express();
// let url;
// if (NODE_ENV === 'development') url = 'http://localhost/api';
// else url = 'http://www.inspiratiobot.com/api';
// server.use(url, app);
// const port = PORT;

// app.get('/', (req, res) => {
//   res.send("We're live!");
// });

// app.get('/quote', (req, res) => {
//   console.log(templates.length);
//   const randomNum = Math.floor(Math.random() * templates.length);

//   const quote = fillTemplate(null, null, randomNum);
//   console.log(quote);
//   res.send(quote);
// });

// server.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
