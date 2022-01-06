import { IProductCategory } from 'app/shared/model/product-category.model';
import { Beden } from 'app/shared/model/enumerations/beden.model';

export interface IProduct {
  id?: number;
  name?: string;
  description?: string | null;
  price?: number;
  beden?: Beden;
  imageContentType?: string | null;
  image?: string | null;
  productCategory?: IProductCategory | null;
}

export const defaultValue: Readonly<IProduct> = {};
