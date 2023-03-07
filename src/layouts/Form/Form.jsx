import { Facebook } from '../../components/Icons/Icon';
import './Form.scss';

function Form({ children, title }) {
    return (
        <div className="form">
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
                    <a href="" className="wrapper__form--btn-action-account bg-fb">
                        <button>
                            <span className="wrapper__form--btn-action-icon">
                                <Facebook />
                            </span>
                            <span>Đăng nhập với Facebook</span>
                        </button>
                    </a>

                    <a href="" className="wrapper__form--btn-action-account bg-google">
                        <button>
                            <span className="wrapper__form--btn-action-icon">
                                <Facebook />
                            </span>
                            <span>Đăng nhập với Google</span>
                        </button>
                    </a>

                    <a href="" className="wrapper__form--btn-action-account bg-tw">
                        <button>
                            <span className="wrapper__form--btn-action-icon">
                                <Facebook />
                            </span>
                            <span>Đăng nhập với Twitter</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Form;
