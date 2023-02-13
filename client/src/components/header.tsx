import Navigation from "./navigation-bar";

const Header: React.FC = () => (
    <header className="header">
        <div className="header__logo"></div>
        <div className="header__name">
            <h1 className="header__name__heading">Fakelandia Justice Department</h1>
        </div>
        <Navigation/>
    </header>
);

export default Header;