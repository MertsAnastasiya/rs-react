export type InputProps = {
  id: string;
  classes: string;
  placeholder: string;
  searchValue: string;
  changeStateBySeacrh: (searchValue: string) => void;
  // searchData: (searchValue: string) => JSX.Element;
  // searchData: (searchValue: string) => IProduct[];
};

export type InputState = {
  searchValue: string;
};

export interface IProduct {
  id: number;
  street: string;
  city: string;
  price: number;
  living: number;
  rooms: number;
  thumbnail: string;
  // images: string[];
}

export type ProductProperty = keyof IProduct;

export type CardProps = {
  street: string;
  city: string;
  living: number;
  rooms: number;
  price: number;
  thumbnail: string;
}

export type FormState = {
  streetText: string;
  cityText: string;
  avalableDate: string;
  price: number;
  file: string;
  parking: boolean;
  balcony: boolean;
  terrace: boolean;
  rooms: string;
};

export type FieldCheckboxProps = {
  label: string;
  classNames: string[];
  onChange: (event: React.ChangeEvent) => void;
};

export type FieldInputProps = {
  type: string;
  label: string;
  id: string;
  classNames: string[];
  onChange: (event: React.ChangeEvent) => void;
};
