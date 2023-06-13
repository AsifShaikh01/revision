const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const {connection} = require("./config/db");
const {jobRouter} = require("./routes/Job.routes");
const cors = require('cors');

const  app = express();

app.use(cors());
app.use(express.json());

app.use("/jobs" , jobRouter);

app.listen(process.env.PORT , async()=>{
    try {
        await connection;

        console.log("connected to the db.")
    } catch (error) {
        console.log("cannot connect to the db.")
    }
    console.log(`server is running at port ${process.env.PORT}`)
})