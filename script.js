// Book Search

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const filter = this.value.toLowerCase();
        const books = document.querySelectorAll(".book-card");

        books.forEach(book => {
            const text = book.textContent.toLowerCase();

            if (text.includes(filter)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });
}

// Contact Form

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        document.getElementById("successMessage").textContent =
            "Thank you! Your message has been received.";

        form.reset();
    });
}