const express = require("express");
const {JobModel} = require("../model/Job.model");
const jobRouter = express.Router();


jobRouter.get("/",async(req,res)=>{
    const query = req.query;
    // const {sortBy , filterBy} = req.query;

   

    // const filtered = {};
    // if(filterBy === "role"){
    //    filtered.role =  
    // }


    try {
        
    const jobs = await JobModel.find(query)
    
    res.send(jobs)
    } catch (error) {
        res.send(error)
    }
})

jobRouter.post("/add" , async(req,res)=>{
    const payload = req.body;
    try {
        const job = new JobModel(payload);
        await job.save();
        res.send("new job posting successfull!!")
        
    } catch (error) {
        res.send(error)
    }
})

module.exports={
    jobRouter
}