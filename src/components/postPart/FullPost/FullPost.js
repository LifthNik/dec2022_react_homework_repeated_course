import React, { useState, useEffect } from "react";

import "./FullPost.css";

const FullPost = ({ value }) => {

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1);

        const timeout = setTimeout(() => {
            setOpacity(0);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <div className="FullPost" style={{opacity}}>
            <h2>{value.title}</h2>
            <p>{value.body}</p>
            <div className="meta-info">
                <span>ID: {value.id}</span>
                <span>User ID: {value.userId}</span>
            </div>
        </div>
    );
};

export default FullPost;