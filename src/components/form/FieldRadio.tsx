import React from 'react';
import { ForwardedRef } from 'react';

type FieldRadioProps = {
    id: string;
    name: string;
    label: string;
    onChange: (event: React.ChangeEvent) => void
}

export const FieldRadio = React.forwardRef((props: FieldRadioProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { id, name, label, onChange } = props;

  return (
    <label className="label_radio">
      <input ref={ref} id={id} type="radio" name={name} onChange={onChange} className="input input_radio" />
      {label}
    </label>
  );
});
