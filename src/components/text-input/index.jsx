import "./textinput.scss";

const TextInput = ({ placeholder, type ,field, onChange, ...rest }) => {
  return (
    <div className='textInput'>
      <input {...rest} placeholder={placeholder} type={type} onChange={(e) => {onChange && onChange(field,e.target.value)}}/>
    </div>
  );
};

export default TextInput;
