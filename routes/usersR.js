import express from "express";
import { createUser, deleteUser, getAllUsers, updateUser } from "../ctrls/userC.js";
import { validateUser } from "../middlewares/auth.js";

const router = express.Router();


router.get("/",validateUser,getAllUsers);
router.post("/",validateUser, createUser);
router.put("/:id",validateUser, updateUser);
router.delete("/:id",validateUser, deleteUser);

export default router;