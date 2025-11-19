import axios from "axios";
import { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get<Product[]>("https://fakestoreapi.com/products");
  return res.data;
};
