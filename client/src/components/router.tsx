import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout';
import Home from './home';
import Misdemeanours from './misdemeanours';
import Confess from './confess';
import Missing from './missing-page';
import { Confession } from '../../types/confess.type';

interface RouterProps {
    updateConfessions: (confessions: Array<Confession>) => void;
}

const Router: React.FC<RouterProps> = ({ updateConfessions }) => (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/misdemeanours" element={<Misdemeanours/>}/>
            <Route path="/confess" element={<Confess updateConfessions={updateConfessions}/>}/>
            <Route path="*" element={<Missing/>}/>
        </Route>
    </Routes>
);

export default Router;