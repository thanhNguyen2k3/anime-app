import { useRef, useState } from 'react';

import Tippy from '@tippyjs/react/headless';
import './Search.scss';
import { ClearIcon } from '../../components/Icons';
import AnimeProducts from '../../components/AnimeProducts/AnimeProducts';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <div>
            <Tippy
                interactive
                visible={showResult && searchValue.length > 0}
                render={(attrs) => (
                    <div className="search__result" tabIndex="-1" {...attrs}>
                        <AnimeProducts />
                        <AnimeProducts />
                        <AnimeProducts />
                        <AnimeProducts />
                    </div>
                )}
            >
                <div className="header__search search">
                    <input
                        ref={inputRef}
                        type="text"
                        onChange={handleSearch}
                        value={searchValue}
                        placeholder="Tìm kiếm..."
                        spellCheck={false}
                    />
                    <span onClick={handleClear}>{<ClearIcon />}</span>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
