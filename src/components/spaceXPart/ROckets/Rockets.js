import {useEffect, useState} from "react";

import Rocket from "../ROcket/Rocket";

import './Rockets.css'

export default function Rockets () {

    let [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then((items) => items.json())
            .then((item) => {
                setRockets(item.filter(year => year.launch_year !== '2020'))
            });
    }, []);

    return (<div className = 'Rockets'>
            {
                rockets.map(item => <Rocket item={item} key={item.flight_number}/>)
            }
        </div>
    );
};

export {Rockets}