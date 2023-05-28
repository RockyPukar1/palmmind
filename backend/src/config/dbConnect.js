const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://RockyPukar1:pukar%401332@cluster0.ruzklpn.mongodb.net/?retryWrites=true&w=majority"
const dataBase = ""

const connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(dbUrl, {
      dbName: "palmmind",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(`Error is ${error.message}`);
    process.exit();
  }
};

module.exports = connectToMongo;
