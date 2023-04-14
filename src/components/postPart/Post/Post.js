import React from "react";

import './Post.css'


const Post = ({item, lift}) => {

    return (

        <div className='Post'>
            <p>
                Id - {item.id} <br />

                <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    {item.title}
                </div> <br />

                <button onClick={() => {lift(item)}}>
                    Hello
                </button>

            </p>
        </div>
    );
};

export default Post;

