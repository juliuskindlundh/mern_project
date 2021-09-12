const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors")
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://admin:admin@cluster0.osfai.mongodb.net/mern_project_db?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
    () => console.log("Connected to database")
);

const router = require("./routes/api");
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});