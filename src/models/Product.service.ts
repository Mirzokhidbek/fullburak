import ProductModel from "../schema/Product.model";
import { Product, ProductInput } from "../libs/types/product";
import Errors, { HTTPCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  /** SPA & BSSR: Get All Products **/
  public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel.find().exec();
    return result as unknown as Product[];
  }

  /** BSSR: Create New Product **/
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      const result = await this.productModel.create(input);
      return (result as any).toJSON() as Product;
    } catch (err) {
      console.error("Error, createNewProduct:", err);
      throw new Errors(HTTPCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  /** BSSR: Update Product by ID **/
  public async updateChosenProduct(
    id: string,
    input: ProductInput
  ): Promise<Product> {
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findByIdAndUpdate({ _id: id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(HTTPCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return (result as any).toJSON() as Product;
  }
}

export default ProductService;
