import { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../../../config/firebase-config';

import FormInput from '../../../components/FormInput/FormInput';
import { LockIcon, MailIcon } from '../../../components/Icons/Icon';
import Button from '../../../components/Button/Button';
import ToastMessage from '../../../components/ToastMessage';
import './Login.scss';

function Login(id) {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [valueInput, setValueInput] = useState([]);
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const SESSION = window.localStorage;

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
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
        // e.preventDefault();
        // valueInput.map((account) => {
        //     if (values.username === account.username && values.password === account.password) {
        //         setMessageSuccess(true);
        //         SESSION.setItem('info', JSON.stringify({ ...account }));
        //         setTimeout(() => window.history.back(), 2000);
        //         console.log(account);
        //     } else {
        //         setMessageError(true);
        //     }
        // });
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    // useEffect(() => {
    //     axios.get('http://localhost:3000/accounts').then((data) => setValueInput(data.data));
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            setMessageSuccess(false);
            setMessageError(false);
        }, 4000);
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
