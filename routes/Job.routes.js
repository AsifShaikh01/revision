const express = require("express");
const {JobModel} = require("../model/Job.model");
const jobRouter = express.Router();


jobRouter.get("/",async(req,res)=>{
    const query = req.query;
    const {sortBy , filterBy} = req.query;

   

    // const filtered = {};
    // if(filterBy === "role"){
    //    filtered.role =  
    // }


    try {
        const sorted = {};
        if(sortBy === "postedAt"){
            sorted.postedAt = -1
        }
        
    const page = parseInt(req.query.page) || 1;
    const perPage = 1;
    const skipCount = (page -1) * perPage;
    const jobs = await JobModel.find(query)
    .skip(skipCount)
    .limit(perPage)
    .sort({postedAt : -1});
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