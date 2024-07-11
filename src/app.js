import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { timestamp } from './api/index.js';

const __dirname = import.meta.dirname;
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static(__dirname + '/views'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/:date?", timestamp);

app.listen(port, () => console.log(`Your app is listening on localhost:${port}`));

