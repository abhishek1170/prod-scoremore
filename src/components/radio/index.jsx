import "./radio.scss";

const CheckboxInput = ({ isSelected, children, field, onClick }) => {
  return (
    <div
      className='radio'
      onClick={e => {
        onClick(field, e.target.value);
      }}
    >
      {isSelected ? (
        <div className='checkbox checkbox--selected'>&#10003;</div>
      ) : (
        <div className='checkbox checkbox--unselected' />
      )}
      <div className={`children ${isSelected && "children--selected"}`}>{children}</div>
    </div>
  );
};

export default CheckboxInput;
