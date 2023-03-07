import { useEffect, useState } from 'react';

import FormInput from '../../../components/FormInput/FormInput';
import { LockIcon, MailIcon } from '../../../components/Icons/Icon';
import Button from '../../../components/Button/Button';
import './Login.scss';
import ToastMessage from '../../../components/ToastMessage';
function Login() {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });
    const [valueInput, setValueInput] = useState([]);
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            icon: <MailIcon />,
            errorMessage: 'Không được bỏ trống',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            icon: <LockIcon />,
            errorMessage: 'Không được bỏ trống',
            required: true,
        },
    ];

    const handleLogin = (e) => {
        e.preventDefault();

        valueInput.map((account) => {
            if (values.username === account.username && values.password === account.password) {
                setMessageSuccess(true);
                console.log(account);
            } else {
                setMessageError(true);
            }
        });
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        fetch(`http://localhost:3000/accounts`)
            .then((res) => res.json())
            .then((accounts) => setValueInput(accounts));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setMessageSuccess(false);
            setMessageError(false);
        }, 3000);
    }, [messageError, messageSuccess]);

    return (
        <div className="form__element">
            {(messageSuccess && <ToastMessage type="success" />) || (messageError && <ToastMessage type="error" />)}

            <div className="form__login">
                <h1>Login</h1>
                <form id="form-login" onSubmit={handleLogin}>
                    {inputs.map((input) => (
                        <FormInput key={input.id} {...input} onChange={onChange} value={values[input.name]} />
                    ))}

                    <div className="form__login--action">
                        <Button to>Đăng nhập ngay</Button>

                        <a href="">Quên Mật Khẩu ?</a>
                    </div>
                </form>
            </div>
            <div className="no__account">
                <h1>Bạn chưa có tài khoản ?</h1>

                <Button href={'/register'}>Đăng ký ngay</Button>
            </div>
        </div>
    );
}

export default Login;
