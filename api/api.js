import express from 'express';
import { templates } from '../src/Logic/templates.js';
import { fillTemplate } from '../src/Logic/generator.js';

// Create router for the API and handle requests to specific routes
const api = express.Router();
// Ping route for health checks
api.get('/ping', (req, res) => res.sendStatus(200));
api.get('/quote', handleQuote);
api.get('/vercel', vercelHandler);

/**
 * Sends back and insprirational quote
 */
function handleQuote(req, res) {
  console.log(templates.length);
  const randomNum = Math.floor(Math.random() * templates.length);

  const quote = fillTemplate(null, null, randomNum);
  console.log(quote);
  return res.send(quote);
}

/**
 * Echos back the body and query from the request as JSON.
 */
function vercelHandler(req, res) {
  return res.json({
    body: req.body,
    query: req.query
  });
}

export default api;
