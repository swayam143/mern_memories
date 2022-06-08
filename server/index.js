import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

//Routes Started
//
import router from "./routes/posts.js";

app.use("/posts", router);
//
//Routes End

//To upload large image in database

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//

//MONGOOSE CONNECTION STARTED
//
const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
  "mongodb+srv://Swayam143:Swayam143@cluster0.vtfx8.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Server is running on port:${5000}, mongo:${mongoose.connection.host}`
      )
    )
  )
  .catch((e) => {
    console.log(e);
  });
//
//MONGOOSE CONNECTION END

//Mongodb cloud

//username in mongo cloud=== Swayam143
//Password in mongo cloud=== Swayam143
