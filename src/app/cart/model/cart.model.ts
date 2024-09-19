import {Product} from "../../product/model/product.model";

export interface Cart {
  product: Product;
  quantity: number;
}
