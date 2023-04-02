import { useState, useEffect } from 'react';
import { InputProps } from 'types';
import './Search.scss';

export const Seacrh = (props: InputProps) => {
  const [searchValue, setSearchValue] = useState(props.searchValue);

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  });

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      props.changeStateBySeacrh(target.value);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    setSearchValue(target.value);
    props.changeStateBySeacrh(target.value);
  };
  const { id, classes, placeholder } = props;

  return (
    <input
      type="text"
      value={searchValue}
      name={id}
      className={classes}
      placeholder={placeholder}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
    />
  );
};
