import airbnbLogo from "../assets/airbnb-logo.svg";

const Navbar = () => {
    return (
        <nav className="h-[100px] px-10 flex items-center shadow-[0_4px_10px_rgba(0,0,0,0.04)]">
            <a href="/">
                <img src={airbnbLogo} alt="airbnb logo" />
            </a>
        </nav>
    );
};

export default Navbar;
