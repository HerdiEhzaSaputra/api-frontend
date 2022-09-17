import type { FunctionalComponent } from 'preact';
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const Movies: FunctionalComponent = () => {
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    // GET with fetch API
    useEffect(() => {
    const fetchPost = async () => {
        const response = await fetch(
            'http://127.0.0.1:8000/provinsis'
        );
        const data = await response.json();
        console.log(data);
        setPosts(data);
    };
    fetchPost();
    }, []);

    // Delete with fetchAPI
    const deletePost = async (id) => {
    let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: 'DELETE',
        }
    );
    if (response.status === 200) {
        setPosts(
            posts.filter((post) => {
                return post.id !== id;
            })
        );
    } else {
        return;
    }
    };

    // Post with fetchAPI
    const addPosts = async (title, body) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    let data = await response.json();
    setPosts((posts) => [data, ...posts]);
    setName('');
    setBody('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(name, body);
    };

    return (
        
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
        
    );
};

export default Movies;