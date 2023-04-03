import React from 'react';
import { ForwardedRef } from 'react';

type FieldRadioProps = {
  id: string;
  name: string;
  label: string;
  register: any;
  errors: any;
};

export const FieldRadio = React.forwardRef(
  (props: FieldRadioProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { id, name, label, register } = props;

    return (
      <label className="label_radio">
        <input
          ref={ref}
          id={id}
          type="radio"
          name={name}
          className="input input_radio"
          {...register(id)}
        />
        {label}
      </label>
    );
  }
);
