    const USER_ID = "67c6e3f4a1b2c3d4e5f67890"; // ضع userId حقيقي من قاعدة البيانات

    loadPosts();

    async function createPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("body").value;

    await fetch("/api/create-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, userId: USER_ID })
    });

    document.getElementById("title").value = "";
    document.getElementById("body").value = "";

    loadPosts();
    }

    async function loadPosts() {
    const res = await fetch("/api/get-posts");
    const posts = await res.json();

    const container = document.getElementById("posts");
    container.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "box";

        const userName = `${post.userId?.first_name || "User"} ${post.userId?.last_name || ""}`;
        const date = new Date(post.createdAt).toLocaleString();

        div.innerHTML = `
        <div class="post-title">${userName} — ${date}</div>
        <p>${post.content}</p>

        <h5 class="mt-3">Comments</h5>
        <div id="comments-${post._id}"></div>

        <textarea id="comment-${post._id}" class="form-control mt-3" placeholder="Post a comment"></textarea>
        <button class="btn btn-secondary mt-2" onclick="addComment('${post._id}')">Post comment</button>
        `;

        container.appendChild(div);
        loadComments(post._id);
    });
    }

    async function addComment(postId) {
    const comment = document.getElementById("comment-" + postId).value;

    await fetch(`/api/post-post-comment/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment, userId: USER_ID })
    });

    document.getElementById("comment-" + postId).value = "";
    loadComments(postId);
    }

    async function loadComments(postId) {
    const res = await fetch(`/api/get-post-comments/${postId}`);
    const comments = await res.json();

    const container = document.getElementById("comments-" + postId);
    container.innerHTML = "";

    comments.forEach(c => {
        const userName = `${c.userId?.first_name || "User"} ${c.userId?.last_name || ""}`;
        const date = new Date(c.createdAt).toLocaleString();

        const div = document.createElement("div");
        div.className = "comment";
        div.innerHTML = `<strong>${userName} — ${date}</strong><br>${c.comment}`;
        container.appendChild(div);
    });
    }
