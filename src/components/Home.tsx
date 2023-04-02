import { Component } from 'react';
import { Seacrh } from './search/Search';
import { createClassList } from '../utils';
import { productsData } from '../data';
import { IProduct, ProductProperty } from 'types';
import { CardsList } from './cards/CardsList';

export class Home extends Component<Record<string, never>, { searchValue: string }> {
  public state = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  private searchData = (searchValue: string): IProduct[] => {
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

  private changeStateBySeacrh = (searchInputValue: string): void => {
    this.setState({ searchValue: searchInputValue });
  };

  public render() {
    return (
      <div className="main__container container">
        <Seacrh
          id="search"
          classes={createClassList(['input', 'input_search'])}
          placeholder="What are you looking for?"
          searchValue={this.state.searchValue}
          changeStateBySeacrh={this.changeStateBySeacrh}
        />
        <CardsList productResult={this.searchData(this.state.searchValue)} />
      </div>
    );
  }
}
