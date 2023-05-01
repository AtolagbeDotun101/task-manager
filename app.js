const express = require('express');
const app = express();
const task = require('./routes/taskRoutes')
require('dotenv').config()
const connectDB = require('./db/connectDB.JS')

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/v1/tasks', task)
// connectDB()



const port = process.env.PORT || 4000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();



// app.listen(port, console.log('server running ....'))