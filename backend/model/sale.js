import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Please enter product name"],
      maxLength: [200, "Product name cannot exceed 200 characters"],
    },
    category: {
      type: String,
      required: [true, "please enter category"],
    },
    quantitySold: {
      type: Number,
      required: [true, "Enter quantity sold today"],
    },
    salesAmount: {
      type: Number,
      required: [true, "Enter sale amount"],
    },
    saleDate: {
      type: Date,
      default:Date.now(),
    },
  },
  { timestamps: true }
);

export default mongoose.model("Sale", saleSchema);

