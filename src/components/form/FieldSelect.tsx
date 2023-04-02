import React, { ForwardedRef } from 'react';
import { Fragment } from 'react';

type FieldSelectProps = {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent) => void;
  data: string[];
};

export const FieldSelect = React.forwardRef(
  (props: FieldSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const getCities = (cities: string[]): JSX.Element[] => {
    return cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ));
  };

  return (
    <Fragment>
      <label htmlFor="city" className="label">
        {props.label}:
      </label>
      <select
        id="city"
        ref={ref}
        className="input input_select"
        name="selectedCity"
        defaultValue={'select'}
        onChange={props.onChange}
      >
        <option value="select" disabled>
          -- Select the city --
        </option>
        {getCities(props.data)}
      </select>
    </Fragment>
  );
});
