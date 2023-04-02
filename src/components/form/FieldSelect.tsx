import React from 'react';
import { Fragment } from 'react';

type FieldSelectProps = {
  label: string;
  name: string;
  data: string[];
  register: any;
};

export const FieldSelect = (props: FieldSelectProps) => {
  const { name, label, data, register } = props;

  const getCities = (cities: string[]): JSX.Element[] => {
    return cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ));
  };

  return (
    <Fragment>
      <label htmlFor={name} className="label">
        {label}:
      </label>
      <select
        id={name}
        className="input input_select"
        defaultValue={'select'}
        {...register(name, {
          required: true,
        })}
      >
        <option value="select" disabled>
          -- {label} --
        </option>
        {getCities(data)}
      </select>
    </Fragment>
  );
};
