import {Router} from 'express';
const router = Router();

import {
    getAllJobs, 
    createJob, 
    getJob, 
    editJob, 
    deleteJob
} from '../controllers/jobControllers.js';
import { validateJobInput } from '../middleware/validationMiddleware.js';

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router.route('/:id').get(getJob).patch(validateJobInput, editJob).delete(deleteJob);

export default router;