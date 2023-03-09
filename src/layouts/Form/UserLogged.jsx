import { auth } from '../../config/firebase-config';

import FormInput from '../../components/FormInput';
import { MailIcon, UserIcon, PersonIcon, Google } from '../../components/Icons';
import './Form.scss';

function UserLogged({ data }) {
    // console.log(LOCAL_STORAGE_OBJECT);

    const loggedValue = [
        {
            id: 1,
            name: 'ID',
            icon: <PersonIcon />,
            value: data?.uid,
            className: 'disable',
            disabled: true,
            type: 'number',
            placeholder: 'UID',
            label: 'UID',
        },
        {
            id: 2,
            name: 'email',
            icon: <MailIcon />,
            value: data?.email,
            className: 'disable',
            disabled: true,
            type: 'email',
            placeholder: 'Email',
            label: 'Email',
        },
        {
            id: 3,
            name: 'Tên đăng nhập',
            icon: <UserIcon />,
            value: data?.displayName,
            className: 'disable',
            disabled: true,
            type: 'text',
            placeholder: 'Tên đăng nhập',
            label: 'Tên đăng nhập',
        },
        {
            id: 4,
            name: 'Nhà cung cấp',
            icon: <Google />,
            value: data?.providerId,
            className: 'disable',
            disabled: true,
            type: 'text',
            placeholder: 'Nhà cung cấp',
            label: 'Nhà cung cấp',
        },
    ];

    return (
        <div className="logged">
            <div className="banner">
                <div className="banner__inner">
                    <h1>XIN CHÀO : {data?.displayName}</h1>
                    <h3>Chào mừng đến với blog Anime chính thức.</h3>
                </div>
            </div>

            <div className="logged__block wrapper__form">
                <div className="logged__block_col--left">
                    <img src={data?.photoURL} alt="" />
                    <h2>{data?.displayName}</h2>
                </div>

                <div className="logged__block_col--right">
                    <h1>Thông tin tài khoản</h1>

                    {loggedValue.map((input) => (
                        <FormInput key={input.id} {...input} value={input.value} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserLogged;
