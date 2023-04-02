import { FieldInputProps } from 'types';
import { createClassList } from '../../utils';

export const FieldInput = (props: FieldInputProps) => {
  const { type, id, label, classNames } = props;
  return (
    <div className="form__item">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input id={id} type={type} name={id} className={createClassList(classNames)} />
    </div>
  );
};
