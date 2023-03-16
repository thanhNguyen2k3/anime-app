function MenuItems({ data, onClick }) {
    return (
        <div className="video__setting_option--select" onClick={onClick}>
            <p className="video__setting_option--select--title">{data.title}</p>
            <p className="video__setting_option--select--title">{data.prop}</p>
            {/* <div className="video__setting_option--select-speed">
                <span>Normal</span>
                <span className="video__setting_option--select-speed-icon">
                    <PauseIcon />
                </span>
            </div> */}
        </div>
    );
}

export default MenuItems;
