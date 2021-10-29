import "./button.scss";

const Button = ({ label, callBack , ...rest}) => {
  return (
    <button {...rest} className='button' onClick={callBack}>
      {label}
    </button>
  );
};

export default Button;
