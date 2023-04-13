import {useEffect, useState} from "react";

import Post from "../Post/Post";

import './Posts.css'
import FullPost from "../FullPost/FullPost";



export default function Posts ({lift}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(items => items.json())
            .then(item => {
                setPosts(item);
            });

    }, []);




    return (<div className='ListOfPosts' >

            <FullPost lift={lift}/>

            {
                posts.map(item => <Post item={item} key={item.id} lift={lift}/>)
            }


        </div>

    );
};

export {Posts}