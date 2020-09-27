export interface Product {
  id?: number;
  name: string;
  qty: number;
  price: number;
  productDetails: ProductDetails;
}

export interface ProductDetails {
  id?: number;
  dimension?: string;
  partNumber: string;
  weight?: number;
  manufacturer?: string;
  origin?: string;
}
