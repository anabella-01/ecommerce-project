import { IProduct } from "../../productList/types/IProduct";

export interface ProductInfoProps {
    product: IProduct;
    discountPercentage?: number;
}