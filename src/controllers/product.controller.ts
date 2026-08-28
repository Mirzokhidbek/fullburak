import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors, { HTTPCode, Message } from "../libs/Errors";
import ProductService from "../models/Product.service";
import { ProductInput } from "../libs/types/product";

const productService = new ProductService();
const productController: T = {};

/** SPA & BSSR: Get All Products **/
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    const data = await productService.getAllProducts();
    res.render("products", { products: data });
  } catch (err) {
    console.log("Error, getAllProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

/** BSSR: Create New Product **/
productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("createNewProduct");
    if (!req.files?.length)
      throw new Errors(HTTPCode.BAD_REQUEST, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = (req.files as Express.Multer.File[]).map((ele) => {
      return ele.path.replace(/\\/g, "/");
    });

    await productService.createNewProduct(data);
    res.send(
      `<script> alert("Successfully created!"); window.location.replace('/admin/product/all'); </script>`
    );
  } catch (err) {
    console.log("Error, createNewProduct:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/product/all'); </script>`
    );
  }
};

/** BSSR: Update Product by ID **/
productController.updateChosenProduct = async (
  req: Request,
  res: Response
) => {
  try {
    console.log("updateChosenProduct");
    const id = String(req.params.id);
    const result = await productService.updateChosenProduct(id, req.body);
    res.json({ data: result });
  } catch (err) {
    console.log("Error, updateChosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
