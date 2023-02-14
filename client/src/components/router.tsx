import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout';
import Home from './home';
import Misdemeanours from './misdemeanours';
import Confess from './confess';
import Missing from './missing-page';

const Router: React.FC= () => (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/misdemeanours" element={<Misdemeanours/>}/>
            <Route path="/confess" element={<Confess/>}/>
            <Route path="*" element={<Missing/>}/>
        </Route>
    </Routes>
);

export default Router;