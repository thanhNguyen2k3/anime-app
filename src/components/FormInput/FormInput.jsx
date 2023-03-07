import { useRef, useState } from 'react';
import './FormInput.scss';

function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const inputRef = useRef();

    const { id, onChange, errorMessage, icon, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="form__login--label">
            <input
                ref={inputRef}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
            />
            <span className="form__login--label-icon">{icon}</span>
            <p className="form__login--label-error-message">{errorMessage}</p>
        </div>
    );
}

export default FormInput;
