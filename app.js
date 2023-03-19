const express = require('express');
const router = express.Router()


const {getAllJobs, getJob, createJob, updateJob, deleteJob} = require('./rout.js')


router.route('/').post(createJob).get(getAllJobs)
router.route('/').patch(updateJob).get(getJob).delete(deleteJob)


module.exports = router