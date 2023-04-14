export default function PostsOfUser ({item}) {

    return (<div className = 'PostsOfUser'>
            {item.body}
        </div>
    );
};

export {PostsOfUser}