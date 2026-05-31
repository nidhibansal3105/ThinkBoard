import express from "express";
const authRouter = express.Router();
import { register,login,getCurrentUser } from "../controllers/userAuth.js";
import { authenticateUser } from "../middleware/authMiddleware.js";


authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", authenticateUser, getCurrentUser); 


export default authRouter;
