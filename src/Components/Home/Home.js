import React, { createContext, useEffect, useState } from 'react';
import fake from './MOCK_DATA.json';
import './bg.css'
import './Home.css';
import { Link } from 'react-router-dom';
export const Vehicle = createContext();
const Home = (props) => {
    const list = fake.slice(0, 4)
    const [vehicle, setVehicle] = useState(list)
    return (
        <Vehicle.Provider value={[vehicle, setVehicle]}>
            <div className="bg div">
                <div className="container">
        <div className="con div">
            {
                vehicle.map(vehicle => <div className="vehicle"><Link to={`/destination/${vehicle.id}`}><div id="vehicle"><h3>{vehicle.name}</h3> <img src={vehicle.img} alt=""/></div></Link></div> )
            }
        </div></div>
        </div>
        </Vehicle.Provider>
    );
};

export default Home;