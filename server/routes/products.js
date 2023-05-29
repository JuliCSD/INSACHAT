import express from "express";

import {getProduct} from "../controllers/products.js";
import {verifyToken} from "../middlewares/auth.js";

const router = express.Router();

/*READ*/
router.get("/:id", verifyToken, getProduct);

export default router;