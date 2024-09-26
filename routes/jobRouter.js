import { Router } from "express";
import { checkTestUser } from "../middleware/authMiddleware.js";
const router = Router();

import {
  getAllJobs,
  createJob,
  getJob,
  editJob,
  deleteJob,
  showStats
} from "../controllers/jobControllers.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
router
  .route("/")
  .get(getAllJobs)
  .post(checkTestUser, validateJobInput, createJob);

router.route('/stats').get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkTestUser, validateJobInput, validateIdParam, editJob)
  .delete(checkTestUser, validateIdParam, deleteJob);

export default router;
