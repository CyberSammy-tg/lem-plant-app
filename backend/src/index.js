
const dotenv = require('dotenv');
dotenv.config({ path: './backend/.env' });
const express = require('express');
const sequelize = require('./config/database');
const models = require('./models');
const authRoutes = require('./routes/auth.routes');
const rabbitRoutes = require('./routes/rabbit.routes');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/rabbits', rabbitRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
