import { Router } from "express";
import { getApplicationStats, getCurrentUser, updateUser } from "../controllers/userControllers.js";
import { validateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get('/current-user', getCurrentUser);
router.patch('/update-user', upload.single('avatar'), validateUserInput, updateUser);
router.get('/admin/app-stats',[
    authorizePermissions('admin'),getApplicationStats
]);

export default router