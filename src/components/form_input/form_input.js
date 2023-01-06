import './form_input.css';

export default function FormInput({ inputProps, className }) {
    return (
        <input className={`form-input ${className || ''}`} {...inputProps} />
    );
}

export function FormRadio({ checked, name, value, label, onChange, className }) {
    return (
        <div className='form-radio-items'>
            <input className={`form-radio ${className || ''}`} onChange={onChange} type="radio" name={name} value={value} id={value} checked={checked} />
            <label htmlFor={value}>{label}</label>
        </div>
    );
}