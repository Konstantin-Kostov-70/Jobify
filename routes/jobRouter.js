import {Router} from 'express';
const router = Router();

import {
    getAllJobs, 
    createJob, 
    getJob, 
    editJob, 
    deleteJob
} from '../controllers/jobControllers.js';

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJob).patch(editJob).delete(deleteJob);

export default router;