import {useEffect, useState} from "react";

import Post from "../Post/Post";

import './Posts.css'

export default function Posts () {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(items => items.json())
            .then(item => {
                setPosts(item);
            });

    }, []);


    return (<div className='ListOfPosts' >

            {
                posts.map(item => <Post item={item} key={item.id}/>)
            }


        </div>

    );
};

export {Posts}