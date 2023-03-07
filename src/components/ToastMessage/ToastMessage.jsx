import { CheckIcon } from '../Icons';
import './ToastMessage.scss';
import { motion } from 'framer-motion';

function ToastMessage({ type = '' }) {
    return (
        <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} className={`toast toast-${type}`}>
            <div className="toast__message">
                <div className="toast__message_body">Bạn đã đăng nhập thành công</div>
                <div className="toast__message_icon">
                    <CheckIcon />
                </div>
            </div>
        </motion.div>
    );
}

export default ToastMessage;
