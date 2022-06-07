const mongoose = require("mongoose");

const CONNECTION_URL =
  "mongodb+srv://Swayam143:Swayam143@cluster0.vtfx8.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log(`mongodb connected:${mongoose.connection.host}`);
  })
  .catch((e) => {
    console.log(e);
  });
