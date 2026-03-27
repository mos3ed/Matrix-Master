    // src/components/MessageList.js
    import React from 'react';
    import MessageItem from './MessageItem';

    function MessageList(props) {
    const {
        messages,
        onUpdateMessage,
        onDeleteMessage,
        onCreateComment,
        onDeleteComment,
    } = props;

    return (
        <div>
        {messages.map((m) => (
            <MessageItem
            key={m.id}
            message={m}
            onUpdateMessage={onUpdateMessage}
            onDeleteMessage={onDeleteMessage}
            onCreateComment={onCreateComment}
            onDeleteComment={onDeleteComment}
            />
        ))}
        </div>
    );
    }

    export default MessageList;
