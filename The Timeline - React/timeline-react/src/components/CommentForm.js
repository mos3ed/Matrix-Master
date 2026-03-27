    // src/components/CommentForm.js
    import React, { useState } from 'react';

    function CommentForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !text) return;
        onSubmit({ name, text });
        setName('');
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <textarea
            placeholder="Post a comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <button type="submit">Post a comment</button>
        </form>
    );
    }

    export default CommentForm;
