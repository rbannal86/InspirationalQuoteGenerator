// import express from 'express';
// import { templates } from '../src/Logic/templates.js';
// import { fillTemplate } from '../src/Logic/generator.js';

// // Create router for the API and handle requests to specific routes
// export const api = express.Router();
// api.get('/quote', handleQuote);

// /**
//  * Sends back and insprirational quote
//  */
// function handleQuote(req, res) {
//   console.log(templates.length);
//   const randomNum = Math.floor(Math.random() * templates.length);

//   const quote = fillTemplate(null, null, randomNum);
//   console.log(quote);
//   return res.send(quote);
// }

/**
 * Echos back the body and query from the request as JSON.
 */
function vercelHandler(req, res) {
  return res.json({
    body: req.body,
    query: req.query
  });
}

export default vercelHandler;
