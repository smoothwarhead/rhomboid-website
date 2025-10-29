

const InputField = ({ label, type = "text", name, placeholder, required }) => (
  <div className="input-field">
    <label htmlFor={name}>
      {label}
      {required && <span>*</span>}
    </label>
    <input type={type} id={name} name={name} placeholder={placeholder} required={required} />
  </div>
);

export default InputField;
