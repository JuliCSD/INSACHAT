import express from "express";

import {getUser, addRemoveFavorite} from "../controllers/users.js";
import {verifyToken} from "../middlewares/auth.js";

const router = express.Router();

/*READ*/
router.get("/:id", verifyToken, getUser);

/*UPDATE*/
router.patch("/:id/:productId", verifyToken, addRemoveFavorite)

export default router;