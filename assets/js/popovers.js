(() => {
  const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
  for (const popover of popovers) {
    new bootstrap.Popover(popover, { html: true });
  }
})();
