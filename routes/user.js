import express from "express";

import {
  addUser,
  allUsers,
  deleteUser,
  getUserById,
  getUserBySic,
  updateUser,
} from "./../controllers/user.js";

import logger from "../middleware/logger.js";

let router = express.Router();

router.post("/", logger, addUser);
router.get("/", logger, allUsers);
router.get("/:id", logger, getUserById);
router.get("/sic/:sic", logger, getUserBySic);
router.put("/:id", logger, updateUser);
router.delete("/:id", logger, deleteUser);

export default router;
