import { BackIcon } from '../../Icons';

function Header({ title, onBack }) {
    return (
        <header>
            <button onClick={onBack} className="header--option">
                <BackIcon />

                <h4>{title}</h4>
            </button>
        </header>
    );
}

export default Header;
