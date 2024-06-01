import express from "express";
import { Register, Login, Signout } from '../controller/auth.js';

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get('/signout', Signout);

export default router;