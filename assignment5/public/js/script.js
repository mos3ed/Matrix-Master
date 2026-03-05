    console.log("Timeline script loaded");

    // مثال: منع إرسال رسالة فارغة
    const form = document.querySelector("form");
    if (form) {
    form.addEventListener("submit", (e) => {
        const message = document.querySelector("textarea").value.trim();
        if (message.length === 0) {
        e.preventDefault();
        alert("Message cannot be empty");
        }
    });
    }
