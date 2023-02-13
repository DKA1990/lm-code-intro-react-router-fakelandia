import { Outlet } from "react-router-dom";
import Header from "./header";

const MainLayout: React.FC = () => {


    return (
        <>  
            <Header />
            <section className="main-container">
                <Outlet />    
            </section>
        </>
    )
}

export default MainLayout;