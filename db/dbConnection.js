const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to database successful");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToDatabase };
