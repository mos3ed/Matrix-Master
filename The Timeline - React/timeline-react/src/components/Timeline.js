    // src/components/Timeline.js
    import React, { useEffect, useState } from 'react';
    import {
    fetchMessages,
    createMessage,
    updateMessage,
    deleteMessage,
    createComment,
    deleteComment,
    } from '../api';
    import MessageForm from './MessageForm';
    import MessageList from './MessageList';

    function Timeline() {
    const [messages, setMessages] = useState([]);

    const loadMessages = async () => {
        const data = await fetchMessages();
        // تأكد إن الـ backend يرجعهم مرتبين من الأحدث للأقدم
        setMessages(data);
    };

    useEffect(() => {
        loadMessages();
    }, []);

    const handleCreateMessage = async (payload) => {
        await createMessage(payload);
        await loadMessages();
    };

    const handleUpdateMessage = async (id, payload) => {
        await updateMessage(id, payload);
        await loadMessages();
    };

    const handleDeleteMessage = async (id) => {
        await deleteMessage(id);
        await loadMessages();
    };

    const handleCreateComment = async (messageId, payload) => {
        await createComment(messageId, payload);
        await loadMessages();
    };

    const handleDeleteComment = async (messageId, commentId) => {
        await deleteComment(messageId, commentId);
        await loadMessages();
    };

    return (
        <div>
        <h2>Post a message</h2>
        <MessageForm onSubmit={handleCreateMessage} />
        <hr />
        <MessageList
            messages={messages}
            onUpdateMessage={handleUpdateMessage}
            onDeleteMessage={handleDeleteMessage}
            onCreateComment={handleCreateComment}
            onDeleteComment={handleDeleteComment}
        />
        </div>
    );
    }

    export default Timeline;
