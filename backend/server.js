const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { dbConnect } = require('./utiles/db')


app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api', require('./routes/authRoutes'));

app.get('/', function(req, res) {
    res.send('Backend Server');
});
const port = process.env.PORT;
dbConnect();
app.listen(port, () => console.log(`server is running on port ${port}`));