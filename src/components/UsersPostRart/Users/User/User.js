import './user.css'

export default function User ({user}) {

    return (<div className = 'User'>
            {user.name}
        </div>
    );
};

export {User}