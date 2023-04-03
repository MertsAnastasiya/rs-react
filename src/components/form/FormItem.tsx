export const FormItem = (props: { title: string; children: JSX.Element }) => {
  return (
    <div className="form__item">
      <p>{props.title}:</p>
      {props.children}
    </div>
  );
};
