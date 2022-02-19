import airbnbLogo from "../assets/airbnb-logo.svg";

const Navbar = () => {
    return (
        <nav className="h-[100px] px-10 flex items-center">
            <a href="/">
                <img src={airbnbLogo} alt="airbnb logo" />
            </a>
        </nav>
    );
};

export default Navbar;
