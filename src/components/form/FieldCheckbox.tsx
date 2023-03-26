import React from 'react';
import { ForwardedRef } from 'react';
import { FieldCheckboxProps } from 'types';
import { createClassList } from '../../utils';

export const FieldCheckbox = React.forwardRef(
  (props: FieldCheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { label, classNames, onChange } = props;
    return (
      <label className={createClassList(classNames)}>
        <input ref={ref} type="checkbox" name={label} onChange={onChange} className="checkbox" />
        {label}
      </label>
    );
  }
);
