import Product from "../models/productModels.js";

// this function add products
export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create({
      ...req.body,
      photo: req.file.filename,
    });
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};
