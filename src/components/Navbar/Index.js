import "./Navbar.scss"

const Navbar = (props) => {
    const { active } = props;
    return (
        <div className="nav">
            <button className={"nav__button" }>H</button>
            <button className={"nav__button" }>H</button>
            <button className={"nav__button" }>H</button>
            <button className={"nav__button" }>H</button>
            <button className={"nav__button" }>H</button>

            {/* <button className={"nav__button" +  ( active==="about" ? 'active' : 'inactive')}>A</button> */}
            {/* <button className={"nav__button" +  ( active==="exp" ? 'active' : 'inactive')}>E</button> */}
            {/* <button className={"nav__button" +  ( active==="rec" ? 'active' : 'inactive')}>R</button> */}
            {/* <button className={"nav__button" +  ( active==="project" ? 'active' : 'inactive')}>P</button> */}
        </div>
    );
}

export default Navbar;