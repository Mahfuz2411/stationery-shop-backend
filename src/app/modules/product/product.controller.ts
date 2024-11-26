import { Request, Response } from 'express';
import * as productService from './product.service';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res
      .status(201)
      .json({ message: 'Product created successfully', data: product });
  } catch (error: unknown) {
    const stack = (error instanceof Error && error.stack ? error.stack  : {});
    res
      .status(400)
      .json({ message: 'Failed to create product', error, stack });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts(
      req.query.searchTerm as string,
    );
    res
      .status(200)
      .json({ message: 'Products retrieved successfully', data: products });
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to retrieve products', error });
  }
};

// getProductById,
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(req.params.productId);
    res
      .status(200)
      .json({ message: 'Products retrieved successfully', data: product });
  } catch (error: unknown) {
    res.status(500).json({ message: 'Failed to retrieve products', error });
  }
};

// updateProduct

// deleteProduct
