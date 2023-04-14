import './User.css'

export default function User ({item}) {

    const takePost = () => fetch(`https://jsonplaceholder.typicode.com/users/${item.id}/posts`)
        .then(items => items.json())
        .then(item => {
            console.log(item)
        });

    return (<div className='User'>

           {item.name}
            <button onClick={() => {takePost()}}/>

        </div>


    );
};