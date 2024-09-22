import { Router } from "express";
import { register, login } from "../controllers/authControllers.js"
import { validateRegisterInput } from "../middleware/validationMiddleware.js";
const router = Router();

router.post('/register',validateRegisterInput, register);
router.post('/login', login);

export default router