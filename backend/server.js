const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const app = express();

// ------------------- [ Middleware ] -------------------- // 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", require("./routes/userRoute"));
app.use("/api/strategies", require("./routes/strategyRoute"));
app.use("/api/auth", require("./routes/authRoute"));



app.use(errorHandler);


connectDb();

app.listen(port, () => {

    console.log(`ValoTact Server Running on Port: ${port}`)
});
