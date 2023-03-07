import './Button.scss';

function Button({ children, leftIcon, rightIcon, to, href, onClick, ...passProps }) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to.toString();
        Comp = Comp;
    } else {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className="wrapper__button" {...props}>
            {leftIcon && <span className="wrapper__button--icon wrapper__button--left-icon">{leftIcon}</span>}
            <span className="wrapper__button--title">{children}</span>
            {rightIcon && <span className="wrapper__button--title">{children}</span>}
        </Comp>
    );
}

export default Button;
