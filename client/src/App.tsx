import { useEffect, useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router';
import './App.css';
import { Misdemeanour } from '../types/misdemeanours.type'
import { Confession } from '../types/confess.type'

export const MisdemeanourContext = createContext<Misdemeanour[]>([]);
export const ConfessionContext = createContext<Confession[]>([]);

const App : React.FC = () => {
    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
    const [confessions, setConfessions] = useState<Array<Confession>>([]);

    const getMisdemeanours = async (amount: number) => {
        const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${amount}`);
        const json = await apiResponse.json() as { misdemeanours: Array<Misdemeanour> };
        // Save punishment image for each misdemeanour
        json.misdemeanours.forEach((misdemeanour, index) => misdemeanour.punishment = `https://picsum.photos/100/100?${index}`);
        setMisdemeanours(json.misdemeanours);
    }

    useEffect(() => {
        getMisdemeanours(20);
    }, []);

    return (
        <MisdemeanourContext.Provider value={misdemeanours}>
            <ConfessionContext.Provider value={confessions}>
                <div className="App">
                    <>
                        <BrowserRouter>
                            <Router updateConfessions={setConfessions}/>
                        </BrowserRouter>
                    </>
                </div>
            </ConfessionContext.Provider>
        </MisdemeanourContext.Provider>
    )
}

export default App
