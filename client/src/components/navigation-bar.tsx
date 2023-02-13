import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => (
    <div className="navigation-container">
        <nav>
            <ul className="navigation-list">
                <li className="navigation-list__link"><NavLink to='/'>Home</NavLink></li>
                <li className="navigation-list__link"><NavLink to='/misdemeanours'>Misdemeanours</NavLink></li>
                <li className="navigation-list__link"><NavLink to='/confess'>Confess To Us</NavLink></li>
            </ul>
        </nav>
    </div>
);

export default Navigation;