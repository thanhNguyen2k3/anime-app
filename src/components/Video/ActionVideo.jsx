import { motion } from 'framer-motion';

function ActionVideo(props) {
    const { icon, ...inputProps } = props;

    return (
        <motion.button className="video__action_btn" {...inputProps}>
            {icon}
        </motion.button>
    );
}

export default ActionVideo;
