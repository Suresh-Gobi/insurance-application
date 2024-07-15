const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Config Files
const sequelize = require('./Config/database');

//Models
const { User } = require('./Models');

//Routes
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//Defines Routes
app.use('/api', routes);

//Server Port Number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.authenticate().then(() => {
    console.log('Connected to the database!');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
});
