import { useState } from 'react';

export default function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
    }
    
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <lable>Title</lable>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create</button>
            </form>
        </div>
    );
}