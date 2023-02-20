import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout';
import Home from './home';
import Misdemeanours from './misdemeanours';
import Confess from './confess';
import Missing from './missing-page';
import { Confession } from '../../types/confess.type';
import { Misdemeanour } from '../../types/misdemeanours.type';

export interface RouterProps {
    updateConfessions: (confessions: Array<Confession>) => void;
    updateMisdemeanours: (misdemeanours: Array<Misdemeanour>) => void;
}

const Router: React.FC<RouterProps> = ({ updateConfessions, updateMisdemeanours }) => (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/misdemeanours" element={<Misdemeanours/>}/>
            <Route path="/confess" 
                element={<Confess 
                    updateConfessions={updateConfessions} 
                    updateMisdemeanours={updateMisdemeanours}
                />}
            />
            <Route path="*" element={<Missing/>}/>
        </Route>
    </Routes>
);

export default Router;