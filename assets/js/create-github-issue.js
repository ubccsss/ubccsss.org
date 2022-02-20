// use localhost:[port] when running Cloudflare worker locally using `wrangler dev`
// use https://githubissues-dev.ubccsssbot.workers.dev for live dev environment
const WORKER_URL = `https://githubissues.ubccsssbot.workers.dev`;

// call createGithubIssue if form is valid and display link to the new issue
(() => {
  const form = document.querySelector('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
    // if form is valid, create issue
    if (form.checkValidity()) {
      const url = await createGithubIssue();
      if (!url) {
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
  });
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

  // check if reCAPTCHA has been completed
  const token = grecaptcha.getResponse();
  if (token.length == 0) {
    alert('Please complete reCAPTCHA to verify that you are not a robot.');
    return;
  }

  try {
    const issues = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recaptcha: {
          token: token,
        },
        details: {
          course: course,
          user: user,
          review: review,
          reference: reference,
        },
      }),
    });
    const json = await issues.json();
    return json.data.html_url;
  } catch (error) {
    console.error(error);
    alert('Unable to submit review. Please try again later or check the console for more information.');
  }
};
