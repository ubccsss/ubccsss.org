(() => {
    // add 10 second delay in showing the newsletter popup
    setTimeout(() => {
        const newsletterModalEl = document.getElementById('newsletter-modal');
        const newsletterModal = new bootstrap.Modal(newsletterModalEl);
        if (document.cookie.indexOf('newsletter') < 0) {
            newsletterModalEl.addEventListener('hide.bs.modal', (event) => {
                // activeElement is the element that triggered the modal to hide
                const activeElement = document.activeElement;
                // if the user clicks on the join button, set a cookie to not show the popup again
                if (activeElement.id === 'join-btn') {
                    document.cookie = `newsletter=1; path=/;`;
                } else if (activeElement.id === 'maybe-later-btn') {
                    // if the user clicks on the maybe later button, set a cookie to show the popup again in 3 months
                    const expiryDate = new Date();
                    expiryDate.setMonth(expiryDate.getMonth() + 3);
                    document.cookie = `newsletter=1; expires=${expiryDate.toUTCString()}; path=/;`;
                } else {
                    // if the user exits the popup in any other way (clicking outside the modal / ESC key), 
                    // set a cookie to show the popup again in 1 month
                    const expiryDate = new Date();
                    expiryDate.setMonth(expiryDate.getMonth() + 1);
                    document.cookie = `newsletter=1; expires=${expiryDate.toUTCString()}; path=/;`;
                }
            })
            newsletterModal.show();
        }
    }, 10_000);
})();
