import express from "express";
import { newSale, todaySales } from "../controllers/saleController.js";
const router = express.Router();


//for new sale
router.route("/newsale").post(newSale);

//get data for today sales
router.route("/today").get(todaySales);


export default router;
