    // src/components/CommentList.js
    import React from 'react';

    function CommentList({ comments, messageId, onDeleteComment }) {
    // تأكد من أن الـ backend يرجع التعليقات مرتبة من الأحدث للأقدم
    return (
        <div style={{ marginTop: '8px', paddingLeft: '16px' }}>
        {comments.map((c) => (
            <div key={c.id} style={{ marginBottom: '8px' }}>
            <strong>{c.name}</strong> - {c.createdAt}
            <p>{c.text}</p>
            <button onClick={() => onDeleteComment(messageId, c.id)}>
                Delete comment
            </button>
            </div>
        ))}
        </div>
    );
    }

    export default CommentList;

    