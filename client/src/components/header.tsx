import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation-bar";

const Header: React.FC = () => (
    <BrowserRouter>
    <header className="header">
        <div className="header__name">
            <div className="header__logo"></div>
            <h1 className="header__name__heading">Fakelandia Justice Department</h1>
        </div>
        <Navigation/>
    </header>
    </BrowserRouter>
    // BROWSER ROUTER ONLY HERE TO PASS TESTS. SORT OUT IN FUTURE!
);

export default Header;