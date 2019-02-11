import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';

// Multi Route ExpressJS HTTP Function
const app = express();

app.get('/cat', (request, response) => {
  response.send('CAT');
});

app.get('/dog', (request, response) => {
  response.send('DOG');
});

export const api = functions.https.onRequest(app);