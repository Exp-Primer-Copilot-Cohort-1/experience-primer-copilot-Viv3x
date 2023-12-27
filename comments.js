// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create web server
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create database connection
const mysql = require('mysql');
