const Input = ({name, value, label, onChange}) => {
  return ( 
      <>
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input onChange={onChange} type="text" className="form-control" id={name} value={value} name={name}/>
          </div>
      </>
   );
}

export default Input;