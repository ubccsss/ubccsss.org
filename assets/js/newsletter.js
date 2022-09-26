(() => {
    const newsletterModal = new bootstrap.Modal(document.getElementById('newsletter-modal'));
    if (document.cookie.indexOf('newsletter') < 0) {
        newsletterModal.show();
        document.getElementById('maybe-later-btn').addEventListener('click', (event) => {
            const expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 3);
            document.cookie = `newsletter=1; expires=${expiryDate.toUTCString()};`;
        });
        document.getElementById('join-btn').addEventListener('click', (event) => {
            document.cookie = `newsletter=1;`;
        });
    }
})();
