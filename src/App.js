import {useState} from "react";

import Posts from "./components/postPart/Posts/Posts";

import './App.css';


function App() {

    let [takenPost, setTakenPost] = useState(null);

    const lift = (obj) => {
        setTakenPost({...obj})
    }

    return (
        <div className="App">

            <div className='PostPart'>
                <Posts lift={lift} value = {takenPost}/>
            </div>

        </div>
    );
}

export default App;
