import './Rocket.css'


export default function Rocket({item}) {
    return (
        <div className="Rocket">
            <div className="Rocket-details">
                <h3>{item.mission_name}</h3>
                <p>Year: {item.launch_year}</p>
            </div>
            <img src={item.links?.mission_patch_small} alt={item.mission_name} />
        </div>
    );
};