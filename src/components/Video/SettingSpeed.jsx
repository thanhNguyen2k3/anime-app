import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { motion } from 'framer-motion';
import { SettingIcon } from '../Icons';

function SettingSpeed({ getRef }) {
    const [setting, setSetting] = useState(false);
    const [navSpeed, setNavSpeed] = useState(false);
    const refer = getRef;

    const setPlayBackRate = [
        {
            id: 1,
            speed: '0.5x',
            playback: 0.5,
        },
        {
            id: 2,
            speed: '1x',
            playback: 1,
        },
        {
            id: 3,
            speed: '1.25x',
            playback: 1.25,
        },
        {
            id: 4,
            speed: '1.5x',
            playback: 1.5,
        },
        {
            id: 5,
            speed: '2x',
            playback: 2,
        },
    ];

    const handleSetting = () => {
        setSetting(!setting);
    };

    return (
        <div className="video__action_btn">
            <Tippy
                trigger="click"
                interactive
                placement="top-end"
                offset={[-6, 10]}
                render={(attrs) => (
                    <motion.div
                        animate={{ height: setting ? 'auto' : 0 }}
                        className="video__action_setting"
                        tabIndex="-1"
                        {...attrs}
                    >
                        <ul>
                            {setPlayBackRate.map((rate, i) => (
                                <li
                                    key={rate.id}
                                    onClick={() => {
                                        setNavSpeed(i);
                                        return (refer.current.playbackRate = rate.playback);
                                    }}
                                    className={navSpeed === i ? 'active-playback' : ''}
                                >
                                    {rate.speed}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            >
                <span>
                    <motion.button
                        onClick={handleSetting}
                        animate={{ rotate: setting ? 180 : 0 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        className="video__action_btn"
                    >
                        <SettingIcon />
                    </motion.button>
                </span>
            </Tippy>
        </div>
    );
}

export default SettingSpeed;
