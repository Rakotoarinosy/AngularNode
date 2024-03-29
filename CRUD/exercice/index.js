const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Middleware CORS configuré avec les options appropriées
app.use(cors({
    origin: 'http://localhost:4200' // Autoriser les requêtes uniquement depuis cette origine
}));

const studentRouter = require('./routes/student');


app.get('/', async (req, res, next) => {
    res.send({ message: 'Awesome it works 🐻' });
});

app.use('/student', studentRouter);

app.use((req, res, next) => {
    next(createError.NotFound());
});
  

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      status: err.status || 500,
      message: err.message,
    });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));