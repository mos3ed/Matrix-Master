    //مسار
    const API_BASE = 'http://localhost:3000'; 

    export async function fetchMessages() {
    const res = await fetch(`${API_BASE}/messages`);
    return res.json();
    }

    export async function createMessage(data) {
    const res = await fetch(`${API_BASE}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
    }

    export async function updateMessage(id, data) {
    const res = await fetch(`${API_BASE}/messages/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
    }

    export async function deleteMessage(id) {
    await fetch(`${API_BASE}/messages/${id}`, {
        method: 'DELETE',
    });
    }

    export async function createComment(messageId, data) {
    const res = await fetch(`${API_BASE}/messages/${messageId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
    }

    export async function deleteComment(messageId, commentId) {
    await fetch(`${API_BASE}/messages/${messageId}/comments/${commentId}`, {
        method: 'DELETE',
    });
    }
