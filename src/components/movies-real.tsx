import type { FunctionalComponent } from 'preact';
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const data = 
    useEffect(() => {
        fetch('http://127.0.0.1:8000/provinsis').then((response) =>
        response.json()
    );
    }, []);


// Components that are build-time rendered also log to the CLI.
// When rendered with a client:* directive, they also log to the browser console.
console.log(data);

const Movies: FunctionalComponent = () => {
    // Output the result to the page
    
    return (
        <>
            {JSON.stringify(data[0].name)} {data[1].name}
        </>
    );
};

export default Movies;


<>
{posts.map((post) => {
    return (
        <div className="post-card" key={post.id}>
            <h2 className="post-title">{post.name}</h2>
            <p className="post-body">{post.body}</p>
            <div className="button">
                <button onClick={() => deletePost(post.id)} className="delete-btn">Delete</button>
            </div>
        </div>
    );
})}
</>