import { Router } from "express";
import { UserAPI } from "../controllers/siccaController";
const router = Router();
const userAPI = new UserAPI()

router.get('/sicca', userAPI.execute)

export { router }