const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const router = require('./routes/posts');

const app = express();
app.use( express.json({limit: '10mb'}) );
app.use( cors() );
dotenv.config()

const PORT = process.env.PORT || 9000;

db()
app.use('/api/posts', router);
app.listen(PORT, () => console.log('server runs on ' + PORT));