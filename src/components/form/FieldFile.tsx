import { Fragment } from 'react';

type FieldFileProps = {
  register: any;
  errors: any;
  onClick: () => void;
};

export const FieldFile = (props: FieldFileProps) => {
  const { register, errors, onClick } = props;
  return (
    <Fragment>
      <label htmlFor="file" className="label label_file" onClick={onClick}>
        Load photos...
      </label>
      <input id="file" type="file" className="input input_file" {...register('file')} />
    </Fragment>
  );
};
