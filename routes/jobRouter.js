import {Router} from 'express';
const router = Router();

import {
    getAllJobs, 
    createJob, 
    getSingleJob, 
    editJob, 
    deleteJob
} from '../controllers/jobControllers.js';

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getSingleJob).patch(editJob).delete(deleteJob);

export default router;