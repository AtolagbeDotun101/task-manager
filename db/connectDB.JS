// const mongoose = require('mongoose')

// const  connectDB = async () => {
//   try {
//      const conn = await mongoose.connect(process.env.MONGO_URL)
//     console.log(`MongoDB Connected : ${conn.connection.host}`);
// } catch (error){
//     console.log(error)
   
// }
// }

// module.exports = connectDB

const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
     useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
     useUnifiedTopology: true,
  })
}

module.exports = connectDB