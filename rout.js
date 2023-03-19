const getAllJobs = async(req, res)=>{
    res.send("getAlll the jobs")
}

const getJob = async(req, res)=>{
    res.send("get the job")
}

const createJob = async(req, res)=>{
    res.send("create the jobs")
}

const updateJob = async(req, res)=>{
    res.send("update the jobs")
}

const deleteJob = async(req, res)=>{
    res.send("delete the jobs")
}

module.exports={
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob

}
