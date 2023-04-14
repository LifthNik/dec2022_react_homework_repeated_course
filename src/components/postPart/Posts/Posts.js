import {useEffect, useState} from "react";

import FullPost from "../FullPost/FullPost";
import Post from "../Post/Post";

import './Posts.css'



export default function Posts ({lift, value}) {

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
                value
                &&
                <FullPost value={value}/>
            }

            {
                posts.map(item => <Post item={item} key={item.id} lift={lift}/>)
            }


        </div>

    );
};

export {Posts}