    // src/components/MessageItem.js
    import React, { useState } from 'react';
    import MessageForm from './MessageForm';
    import CommentForm from './CommentForm';
    import CommentList from './CommentList';

    function MessageItem({
    message,
    onUpdateMessage,
    onDeleteMessage,
    onCreateComment,
    onDeleteComment,
    }) {
    const [editing, setEditing] = useState(false);

    const handleUpdate = (data) => {
        onUpdateMessage(message.id, data);
        setEditing(false);
    };

    return (
        <div style={{ border: '1px solid #ccc', marginBottom: '16px', padding: '8px' }}>
        <div>
            <strong>{message.name}</strong> - {message.createdAt}
        </div>
        {!editing && <p>{message.text}</p>}
        {editing && (
            <MessageForm
            initialValue={{ name: message.name, text: message.text }}
            onSubmit={handleUpdate}
            />
        )}
        <button onClick={() => setEditing((v) => !v)}>
            {editing ? 'Cancel' : 'Edit'}
        </button>
        <button onClick={() => onDeleteMessage(message.id)}>Delete</button>

        <CommentList
            comments={message.comments || []}
            messageId={message.id}
            onDeleteComment={onDeleteComment}
        />

        <h4>Post a comment</h4>
        <CommentForm
            onSubmit={(data) => onCreateComment(message.id, data)}
        />
        </div>
    );
    }

    export default MessageItem;
