import mongoose from "mongoose";
import products from "./data.js";

import sale from "../model/sale.js";


const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/Infytrix_database");

    await sale.deleteMany();
    console.log("Products are deleted");

    await sale.insertMany(products);

    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
