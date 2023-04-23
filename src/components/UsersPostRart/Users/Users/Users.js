import { useState, useEffect } from 'react';

import axios from 'axios';

import User from '../User/User';
import Post from '../../Posts/Post/Post';

import './Users.css';

const Users = ({setUserId}) => {

    const [users, setUsers] = useState([]);

    const [selectedUser, setSelectedUser] = useState(null);

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data));
    }, []);

    useEffect(() => {
        if (selectedUser) {
            axios(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}/posts`)
                .then((response) => setUserPosts(response.data));
        }
    }, [selectedUser]);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="UsersPosts">
            <div className="UsersList">
                <h2>Users</h2>
                {users.map((user) => (
                    <div className='User' key={user.id}>
                        <User user={user} setUserId={setUserId}/>
                        <button className="GetPostsButton" onClick={() => handleUserClick(user)}>Get Posts</button>
                    </div>
                ))}
            </div>
            {selectedUser && (
                <div className='UserPosts'>
                    {userPosts.map((post) => (
                        <Post key={post.id} post={post}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;