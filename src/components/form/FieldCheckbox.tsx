import { FieldCheckboxProps } from 'types';
import { createClassList } from '../../utils';

export const FieldCheckbox = (props: FieldCheckboxProps) => {
  const { label, classNames, register } = props;
  return (
    <label className={createClassList(classNames)}>
      <input type="checkbox" name={label} className="checkbox" {...register(label)} />
      {label}
    </label>
  );
};
