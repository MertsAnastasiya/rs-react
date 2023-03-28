import { IProduct } from './types';
import dataBaseProduct from './products.json';
import dataBaseCities from './cities.json';

export const productsData: IProduct[] = dataBaseProduct.products;
export const cities: string[] = dataBaseCities.cities;
