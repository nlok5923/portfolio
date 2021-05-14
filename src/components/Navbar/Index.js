import "./Navbar.scss"

const Navbar = (props) => {
    return (
        <div className="nav">
            <button className={"nav__button" }>1</button>
            <button className={"nav__button" }>2</button>
            <button className={"nav__button" }>3</button>
            <button className={"nav__button" }>4</button>
            <button className={"nav__button" }>5</button>
        </div>
    );
}

export default Navbar;