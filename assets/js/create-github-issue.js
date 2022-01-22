// use localhost:[port] when running Cloudflare worker locally using `wrangler dev`
// use https://githubissues-dev.ubccsssbot.workers.dev for live dev environment
const WORKER_URL = `https://githubissues.ubccsssbot.workers.dev`;

// call createGithubIssue if form is valid and display link to the new issue
(() => {
  'use strict';

  const form = document.querySelector('form');
  form.addEventListener(
    'submit',
    async (event) => {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
      // if form is valid, create issue
      if (form.checkValidity()) {
        const url = await createGithubIssue();
        if (!url) {
          alert('Unable to submit review. Please try again later or check the console for more information.');
          return;
        }
        form.style.display = 'none';
        const div = document.getElementById('review-div');
        const p = document.createElement('p');
        p.innerText = `Your review has been submitted. `;
        const link = document.createElement('a');
        link.href = url;
        link.innerText = 'View your review submission on GitHub';
        link.target = '_blank';
        p.appendChild(link);
        div.appendChild(p);
      }
    },
    false
  );
})();

/**
 * Makes POST request to Cloudflare worker to create a new issue on GitHub
 * if error, displays error message, logs error to console
 * otherwise, displays success message
 */
const createGithubIssue = async () => {
  const course = document.getElementsByClassName('blog-post-title')[0].innerText.trim();
  const user = document.getElementById('github-issue-user').value;
  const reference = document.getElementById('github-issue-reference').value;
  const review = document.getElementById('github-issue-review').value;

  try {
    const issues = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course: course,
        user: user,
        review: review,
        reference: reference,
      }),
    });
    const json = await issues.json();
    return json.data.html_url;
  } catch (error) {
    console.error(error);
  }
};
