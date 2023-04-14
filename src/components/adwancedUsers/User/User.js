import {useEffect, useState} from "react";

import './User.css'

export default function User ({item}) {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${item.id}/posts`)
            .then(items => items.json())
            .then(item => {
                setPosts(item)
                console.log(item)
            });

    }, []);

    return (
        <div className='User'>

            {item.name}

        </div>
    );
};