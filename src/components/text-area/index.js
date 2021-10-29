import "./text-area.scss";

const TextArea = ({ placeholder, field, onChange,...rest }) => {
  return (
    <div className='text-area'>
      <textarea
        {...rest}
        placeholder={placeholder}
        onChange={e => {
          onChange(field, e.target.value);
        }}
      />
    </div>
  );
};

export default TextArea;
