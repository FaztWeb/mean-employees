const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
app.use('/api/employees', require('./routes/employee.routes'));

module.exports = app;