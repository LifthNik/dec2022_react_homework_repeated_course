import Posts from "./components/postPart/Posts/Posts";

import './App.css';


function App() {

    const lift = (obj) => {
        console.log(obj)
    }

    return (
        <div className="App">


            <Posts lift={lift}/>


        </div>
    );
}

export default App;
