

const InputField = (props) => {

    const { label, inputType, name, value, placeholder, required, onChange } = props;

    return (
    <div className="input-field">
      <label htmlFor={name}>
        {label}{required && <span>*</span>}
      </label>

      <input 
        type={inputType} 
        id={name} 
        name={name} 
        placeholder={placeholder} 
        required={required} 
        value={value}
        onChange={onChange}
      />

    </div>
    )
  };

export default InputField;
