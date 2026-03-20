const Button = (props: any) => {
  return (
    <div>
      <button name={props.name} {...props}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
