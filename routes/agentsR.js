import express from "express";
import { getAllAgents } from "../ctrls/agentsC.JS";
import { agentByID } from "../ctrls/agentsC.JS";

const router = express.Router();

router.get("/",getAllAgents );
router.get("/:id",agentByID);
router.put("/:id");

router.delete("/:id")
   

export default router;