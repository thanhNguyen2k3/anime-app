// Library
import { useState, useEffect } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase-config';

// Components
import { Facebook, Google, Twitter } from '../../components/Icons/Icon';
import './Form.scss';
import UserLogged from './UserLogged';

function Form({ children, title }) {
    const [userLogin, setUserLogin] = useState(false);

    const LOCAL_STORAGE = window.localStorage;
    const LOCAL = window.localStorage.getItem('info');
    const LOCAL_STORAGE_OBJECT = JSON.parse(LOCAL);

    const handleLoginGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            LOCAL_STORAGE.setItem('info', JSON.stringify(auth?.currentUser?.providerData[0]));
            setTimeout(() => window.history.back(), 2000);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (!LOCAL) {
            setUserLogin(true);
        } else {
            setUserLogin(false);
        }
    });

    return (
        <div className="form">
            {userLogin ? (
                <>
                    <div className="banner">
                        <div className="banner__inner">
                            <h1>{title}</h1>
                            <h3>Chào mừng đến với blog Anime chính thức.</h3>
                        </div>
                    </div>

                    <div className="wrapper__form">
                        {children}
                        <div className="wrapper__form--btn-action">
                            <p>Hoặc</p>
                            <a className="wrapper__form--btn-action-account bg-fb">
                                <button>
                                    <span className="wrapper__form--btn-action-icon">
                                        <Facebook />
                                    </span>
                                    <span>Đăng nhập với Facebook</span>
                                </button>
                            </a>

                            <a className="wrapper__form--btn-action-account bg-google">
                                <button onClick={handleLoginGoogle}>
                                    <span className="wrapper__form--btn-action-icon">
                                        <Google />
                                    </span>
                                    <span>Đăng nhập với Google</span>
                                </button>
                            </a>

                            <a className="wrapper__form--btn-action-account bg-tw">
                                <button>
                                    <span className="wrapper__form--btn-action-icon">
                                        <Twitter />
                                    </span>
                                    <span>Đăng nhập với Twitter</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </>
            ) : (
                <UserLogged data={LOCAL_STORAGE_OBJECT} />
            )}
        </div>
    );
}

export default Form;
