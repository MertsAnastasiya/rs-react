import React, { ForwardedRef } from 'react';
import { FieldInputProps } from 'types';
import { createClassList } from '../../utils';

export const FieldInput = React.forwardRef(
  (props: FieldInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type, id, label, classNames, register, errors } = props;
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
          {...register(id, {
            required: true,
            minLength: 4,
          })}
        />
        {errors[id] && errors[id].type === 'required' && (
          <p className="error-message">{id} is required.</p>
        )}
        {errors[id] && errors[id].type === 'minLength' && (
          <p className="error-message">{id} should be at least 4 characters.</p>
        )}
      </div>
    );
  }
);
