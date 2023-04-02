import { useState } from 'react';
import { Seacrh } from './search/Search';
import { createClassList } from '../utils';
import { productsData } from '../data';
import { IProduct, ProductProperty } from 'types';
import { CardsList } from './cards/CardsList';

  export const Home = () => {

  const [searchValue, setSearchValue] = useState('');

  const searchData = (searchValue: string): IProduct[] => {
    const productsResult: IProduct[] = [];
    productsData.forEach((product) => {
      let addToResult = false;
      const propertiesOfProduct: ProductProperty[] = Object.keys(product) as ProductProperty[];

      propertiesOfProduct.forEach((property) => {
        if (product[property].toString().toLowerCase().includes(searchValue.toLowerCase())) {
          addToResult = true;
        }
      });

      if (addToResult) productsResult.push(product);
    });

    return productsResult;
  };

  const changeStateBySeacrh = (searchInputValue: string): void => {
    setSearchValue (searchInputValue);
  };

    return (
      <div className="main__container container">
        <Seacrh
          id="search"
          classes={createClassList(['input', 'input_search'])}
          placeholder="What are you looking for?"
          searchValue={searchValue}
          changeStateBySeacrh={changeStateBySeacrh}
        />
        <CardsList productResult={searchData(searchValue)} />
      </div>
    );
}
