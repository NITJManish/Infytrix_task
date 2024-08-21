import Sale from "../model/sale.js";
import catchAsyncErrors from '../middleware/catchAsyncErrors.js'

import ErrorHandler from '../utils/errorHandler.js'

export const todaySales = catchAsyncErrors(async (req, res, next) => {
   
        const today = new Date();
        today.setHours(0, 0, 0, 0);
    
        const sales = await Sale.find({
          saleDate: { $gte: today },
        });
        if (!sales) {
            return next(new ErrorHandler("sales not found", 404));
          }
        res.status(200).json({sales});
  });

// create new sales =>  api/newsale
  export const newSale = catchAsyncErrors(async (req, res, next) => {
   
    const { productName, category, quantitySold, salesAmount } = req.body;
      const newSale = await Sale.create({
        productName,
        category,
        quantitySold,
        salesAmount,
      });
  
      res.status(200).json({newSale});
});


 