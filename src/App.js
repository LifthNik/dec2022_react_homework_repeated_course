import {useState} from "react";

import Posts from "./components/postPart/Posts/Posts";

import './App.css';
import Rockets from "./components/spaceXPart/ROckets/Rockets";


function App() {

    let [takenPost, setTakenPost] = useState(null);

    const lift = (obj) => {
        setTakenPost({...obj})
    }

    return (
        <div className="App">

            <div className='PostPart'>
                <Posts lift={lift} value={takenPost}/>
            </div>

            <div className='RocketsPart'>
                <Rockets/>
            </div>



        </div>
    );
}

export default App;
