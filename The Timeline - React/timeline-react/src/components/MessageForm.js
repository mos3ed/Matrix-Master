    
    import React, { useState } from 'react';

    function MessageForm({ onSubmit, initialValue }) {
    const [name, setName] = useState(initialValue?.name || '');
    const [text, setText] = useState(initialValue?.text || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !text) return;
        onSubmit({ name, text });
        if (!initialValue) {
        setName('');
        setText('');
        }
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
            placeholder="Post a message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <button type="submit">
            {initialValue ? 'Update message' : 'Post a message'}
        </button>
        </form>
    );
    }

    export default MessageForm;
