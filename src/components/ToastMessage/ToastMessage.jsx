import { CheckIcon } from '../Icons';
import './ToastMessage.scss';

function ToastMessage({ type = '' }) {
    return (
        <div className={`toast toast-${type}`}>
            <div className="toast__message">
                <div className="toast__message_body">Bạn đã đăng nhập thành công</div>
                <div className="toast__message_icon">
                    <CheckIcon />
                </div>
            </div>
        </div>
    );
}

export default ToastMessage;
