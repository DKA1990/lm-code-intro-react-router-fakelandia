import Router from "./router";
import Navigation from "./navigation-bar";

const MainLayout: React.FC = () => {


    return (
        <>  
            <Navigation/>
            <section>
                <Router />
            </section>
        </>
    )
}

export default MainLayout;