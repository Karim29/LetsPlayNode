//External imports
const express = require('express');
// Variables
const app = express();
//Body parser
app.use(express.json());
//Internal imports
const authRoutes = require('./routes/auth.routes');
const gameRoutes = require('./routes/game.routes');
const usersRoutes = require('./routes/users.routes');
const meRoutes = require('./routes/me.routes');
// Using the routes
app.use('/auth', authRoutes);   
app.use('/game', gameRoutes);
app.use('/users', usersRoutes);
app.use('/me', meRoutes);
// Starting the server
app.listen(3000);