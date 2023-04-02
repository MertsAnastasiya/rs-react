export type InputProps = {
  id: string;
  classes: string;
  placeholder: string;
  searchValue: string;
  changeStateBySeacrh: (searchValue: string) => void;
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
}

export type ProductProperty = keyof IProduct;

export type CardProps = {
  classes: string[];
  street: string;
  city: string;
  living: number;
  rooms: number;
  price: number;
  thumbnail: string;
};

export type FormState = {
  streetText: string;
  cityText: string;
  avalableDate: string;
  price: number;
  file: string;
  parking: boolean;
  balcony: boolean;
  terrace: boolean;
  rooms: number;
  card: JSX.Element;
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
};
