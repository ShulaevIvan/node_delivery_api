const env = require('dotenv').config();
const PORT = env.parsed.PORT ? env.parsed.PORT : 3000;
const HOST = env.parsed.HOST ? env.parsed.HOST : 'localhost';
const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const database = require('./database/database');
const apiRouter = require('./routes/mainApi');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(apiRouter);

database.connect();
app.listen(PORT);
console.log(`server started at: \n http://${HOST}:${PORT}`);