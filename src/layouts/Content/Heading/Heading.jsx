function Heading({ title, font }) {
    return (
        <div className="content__heading-trend">
            <span className="separate"></span>
            <h4 style={{ fontSize: font }}>{title}</h4>
        </div>
    );
}

export default Heading;
