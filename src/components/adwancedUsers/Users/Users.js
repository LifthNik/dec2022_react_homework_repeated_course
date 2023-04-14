import {useEffect, useState} from "react";

import User from "../User/User";

import './Users.css'

export default function Users () {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(items => items.json())
            .then(item => {
                setUsers(item);
            });
    }, [])



    return (<div className = 'Users'>

            {users.map(item => <User item={item} key={item.id}/>)}

        </div>
    );
};

export {Users}