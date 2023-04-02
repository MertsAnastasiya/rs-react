import { Fragment } from 'react';

type FieldFileProps = {
  refLabel: React.RefObject<HTMLLabelElement>;
  refFile: React.RefObject<HTMLInputElement>;
  onClick: () => void;
  onChange: (event: React.ChangeEvent) => void;
};

export const FieldFile = (props: FieldFileProps) => {
  return (
    <Fragment>
      <label
        ref={props.refLabel}
        htmlFor="file"
        className="label label_file"
        onClick={props.onClick}
      >
        Load photos...
      </label>
      <input
        id="file"
        ref={props.refFile}
        type="file"
        className="input input_file"
        onChange={props.onChange}
      />
    </Fragment>
  );
};
