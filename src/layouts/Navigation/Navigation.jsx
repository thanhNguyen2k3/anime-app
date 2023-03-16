import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import './Navigation.scss';
import { UserIcon, SearchIcon, DownIcon, LogoutIcon } from '../../components/Icons';
import Search from '../Search';
function Navigation() {
    const [search, setSearch] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [userAccess, setUserAccess] = useState(false);

    const LOCAL_STORAGE_USER = window.localStorage;
    const GET_STORAGE = LOCAL_STORAGE_USER.getItem('info');
    const CONVERT_STORAGE = JSON.parse(GET_STORAGE);

    const handleShowSearch = () => {
        setSearch(!search);
    };

    const handleShowAccount = () => {
        setShowAccount(!showAccount);
    };

    const handleLogout = () => {
        LOCAL_STORAGE_USER.clear();
    };

    useEffect(() => {
        if (LOCAL_STORAGE_USER.getItem('info')) {
            setUserAccess(true);
        } else {
            setUserAccess(false);
        }
    }, []);

    return (
        <header>
            <div className="header__wrapper">
                <a href="/" className="logo">
                    <img src="logo.png" alt="Logo" />
                </a>
                <div className="header">
                    <ul className="header__nav">
                        <li>
                            <a href="/">Trang Chủ</a>
                        </li>
                        <li>
                            <a>
                                <span>Thể Loại</span>
                                <span className="header__icon">
                                    <DownIcon />
                                </span>
                            </a>

                            <ul className="header__sub--nav">
                                <li>
                                    <a href="">Action</a>
                                </li>
                                <li>
                                    <a href="">Adventure</a>
                                </li>
                                <li>
                                    <a href="">Cartoon</a>
                                </li>
                                <li>
                                    <a href="">Comedy</a>
                                </li>
                                <li>
                                    <a href="">Drama</a>
                                </li>
                                <li>
                                    <a href="">Harem</a>
                                </li>
                                <li>
                                    <a href="">School</a>
                                </li>
                                <li>
                                    <a href="">Shounen</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/blog">Các Bài Đăng</a>
                        </li>
                        <li>
                            <a href="/contact">Liên Hệ</a>
                        </li>
                    </ul>
                </div>

                <div className="header__action">
                    <button className="header__action--btn" onClick={handleShowSearch}>
                        {<SearchIcon />}
                    </button>

                    {userAccess ? (
                        <div className="_flex">
                            <Tippy
                                interactive
                                onClickOutside={handleShowAccount}
                                offset={[3, 10]}
                                placement="top-end"
                                trigger="click"
                                render={(attrs) => (
                                    <div className="account__show" tabIndex="-1" {...attrs}>
                                        <ul>
                                            <li>
                                                <a href="/login">
                                                    <span>
                                                        <UserIcon />
                                                    </span>
                                                    Thông tin tài khoản
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" onClick={handleLogout}>
                                                    <span>
                                                        <LogoutIcon />
                                                    </span>
                                                    Đăng xuất
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            >
                                <div className="account__access">
                                    <img src={CONVERT_STORAGE.photoURL} alt="" />
                                </div>
                            </Tippy>
                        </div>
                    ) : (
                        <a href="/login" className="header__action--btn">
                            {<UserIcon />}
                        </a>
                    )}

                    {/* Search */}
                    {search && <Search />}
                </div>
            </div>
        </header>
    );
}

export default Navigation;
