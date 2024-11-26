import Product from './product.model';
import { IProduct } from './product.interface';

export const createProduct = async (productData: IProduct) => {
  return await Product.create(productData);
};

export const getAllProducts = async (searchTerm?: string) => {
  const query = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};
  return await Product.find(query);
};

export const getProductById = async (id: string) => {
  return await Product.findById(id);
};

export const updateProduct = async (id: string, updates: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};
