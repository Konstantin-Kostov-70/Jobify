import { Router } from "express";
import { getApplicationStats, getCurrentUser, updateUser } from "../controllers/userControllers.js";
import { validateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions, checkTestUser } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get('/current-user', getCurrentUser);
router.patch('/update-user', checkTestUser, upload.single('avatar'), validateUserInput, updateUser);
router.get('/admin/app-stats',[
    authorizePermissions('admin'),getApplicationStats
]);

export default router