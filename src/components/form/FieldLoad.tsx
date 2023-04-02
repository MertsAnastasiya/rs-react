import React, { Fragment } from 'react';
import { ForwardedRef } from 'react';

type FieldLoadProps = {
  label: string;
  onClick: () => void;
  onChange: (event: React.ChangeEvent) => void;
};

export const FieldLoad = React.forwardRef(
  (props: FieldLoadProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { label, onClick, onChange } = props;

    return (
      <Fragment>
        <label ref={ref} className="label label_file" onClick={onClick}>
          {label}
        </label>
        <input type="file" className="input input_file" onChange={onChange} />
      </Fragment>
    );
  }
);
