document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");

    form.addEventListener("submit", e => {
        e.preventDefault();
        if (document.getElementById("name").value.trim() === "") {
            status.textContent = "Name cannot be empty!";
            return;
        }
        status.textContent = "Message sent successfully!";
    });
});
