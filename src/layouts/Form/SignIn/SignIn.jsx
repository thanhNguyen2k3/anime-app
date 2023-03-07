import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.scss';
import { MailIcon, LockIcon, UserIcon, CheckIcon } from '../../../components/Icons';
import FormInput from '../../../components/FormInput/FormInput';

function SignIn() {
    const [success, setSuccess] = useState(false);
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            icon: <UserIcon />,
            errorMessage: 'Tên của bạn dài tối thiểu 6 kí tự không chứa ký tự đặc biệt',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
        },

        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            icon: <MailIcon />,
            errorMessage: 'Email của bạn không đúng',
            required: true,
        },

        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            icon: <LockIcon />,
            errorMessage: 'Mật khẩu của bạn dài tối thiểu 8-20 kí tự, có 1 chữ in hoa , 1 số',
            pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
            required: true,
        },

        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            icon: <LockIcon />,
            errorMessage: 'Mật khẩu của bạn phải trùng với mật khẩu',
            pattern: values.password,
            required: true,
        },
    ];

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onChange(e);
        setSuccess(true);
        console.log(values);

        axios.post('http://localhost:3000/accounts', {
            ...values,
        });

        setTimeout(() => {
            history('/login');
        }, 2000);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="form__login">
            <h1>Đăng ký</h1>
            {success && (
                <p className="sign-in-success">
                    Bạn đã đăng ký thành công <CheckIcon />
                </p>
            )}
            <form id="form-login" onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}

                <div className="form__login--action">
                    <button className="button__form">Đăng Ký ngay</button>
                </div>
                <figcaption>
                    Bạn đã có tài khoản? <a href="/login">Đăng nhập !</a>
                </figcaption>
            </form>
        </div>
    );
}

export default SignIn;
