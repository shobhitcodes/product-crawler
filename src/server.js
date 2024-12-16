const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const routes = require('./routes');

const app = express();

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// app.use('/api', routes);

// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
