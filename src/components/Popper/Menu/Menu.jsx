import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import ActionVideo from '../../Video/ActionVideo';
import { SettingIcon } from '../../Icons';
import MenuItems from './MenuItems';
import Header from './Header';
import './Menu.scss';

function Menu({ items = [], hideOnclick = false }) {
    const [settingMotion, setSettingMotion] = useState(false);
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handleSetting = () => {
        setSettingMotion(!settingMotion);
    };

    const handleResetHistory = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const resetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <div className="video__action_btn">
            <Tippy
                trigger="click"
                interactive
                placement="top-end"
                offset={[-6, 10]}
                onHide={resetToFirstPage}
                render={(attrs) => (
                    <div className="video__setting_option" tabIndex="-1" {...attrs}>
                        {history.length > 1 && <Header title={current.title} onBack={handleResetHistory} />}

                        {current.data.map((item, index) => {
                            return (
                                <MenuItems
                                    data={item}
                                    key={index}
                                    onClick={() => {
                                        setHistory((prev) => [...prev, item.children]);
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
            >
                <span>
                    <ActionVideo
                        icon={<SettingIcon />}
                        animate={{ rotate: settingMotion ? 180 : 0 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        onClick={handleSetting}
                    ></ActionVideo>
                </span>
            </Tippy>
        </div>
    );
}

export default Menu;
