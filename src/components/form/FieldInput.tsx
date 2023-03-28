import { ForwardedRef, forwardRef } from 'react';
import { FieldInputProps } from 'types';
import { createClassList } from '../../utils';

export const FieldInput = forwardRef(
  (props: FieldInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type, id, label, classNames, onChange } = props;
    return (
      <div className="form__item">
        <label htmlFor={id} className="label">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          type={type}
          name={id}
          className={createClassList(classNames)}
          onChange={onChange}
        />
      </div>
    );
  }
);
