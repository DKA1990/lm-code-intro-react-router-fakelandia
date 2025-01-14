import { useEffect, useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router';
import './App.css';
import { Misdemeanour } from '../types/misdemeanours.type'
import { Confession } from '../types/confess.type'
import Loading from './components/loading';

export const MisdemeanourContext = createContext<Misdemeanour[]>([]);
export const ConfessionContext = createContext<Confession[]>([]);

const App : React.FC = () => {
    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
    const [confessions, setConfessions] = useState<Array<Confession>>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getMisdemeanours = async (amount: number) => {
        setIsLoading(true);
        const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${amount}`);
        const json = await apiResponse.json() as { misdemeanours: Array<Misdemeanour> };
        // Save different random punishment image for each misdemeanour (picsum caches each image url?)
        json.misdemeanours.forEach((misdemeanour, index) => misdemeanour.punishment = `https://picsum.photos/200/200?${index}`);
        setMisdemeanours(json.misdemeanours);
        setIsLoading(false);
    }

    useEffect(() => {
        getMisdemeanours(20);
    }, []);

    return (
        <MisdemeanourContext.Provider value={misdemeanours}>
            <ConfessionContext.Provider value={confessions}>
                <div className="App">
                    {isLoading && <Loading/>}
                    {misdemeanours.length > 0 &&
                        <BrowserRouter>
                            <Router updateConfessions={setConfessions} updateMisdemeanours={setMisdemeanours}/>
                        </BrowserRouter>
                    }
                </div>
            </ConfessionContext.Provider>
        </MisdemeanourContext.Provider>
    )
}

export default App
