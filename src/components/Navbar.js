import './Navbar.css'

const Navbar = () => {
    return(
    <div className="navbar">
        <div className="center">
        <div className="logo">
            <div className='colored'>Flash</div>
            <div>Reader</div>
        </div>
        <div className="menu">
            <div className="but">read</div>
            <div className="but">login</div>
            <div className="but">registration</div>
        </div>
        </div>
        <div className="line"></div>
    </div>
    )
}

export default Navbar;