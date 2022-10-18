const form = document.getElementById("github-issue-form");
const createIssueButton = document.getElementById("github-issue-btn");

// see ./config/[env]/params.yml for different urls used for different environments
const WORKER_URL = form.dataset.workerurl;

// call createGithubIssue if form is valid and display link to the new issue
(() => {
  document.getElementById("github-issue-year-taken").max =
    new Date().getFullYear();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    // disable button to prevent multiple submissions while waiting for response
    createIssueButton.disabled = true;

    form.classList.add("was-validated");

    // if form is valid, create issue
    if (form.checkValidity()) {
      const url = await createGithubIssue();
      if (!url) {
        createIssueButton.disabled = false;
        return;
      }
      form.style.display = "none";
      const div = document.getElementById("review-div");
      const p = document.createElement("p");
      p.innerText = `Your review has been submitted. `;
      const link = document.createElement("a");
      link.href = url;
      link.innerText = "View your review submission on GitHub";
      link.target = "_blank";
      p.appendChild(link);
      div.appendChild(p);
    } else {
      createIssueButton.disabled = false;
    }
  });
})();

/**
 * Makes POST request to Cloudflare worker to create a new issue on GitHub
 * if error, displays error message, logs error to console
 * otherwise, displays success message
 */
const createGithubIssue = async () => {
  const course = form.dataset.course;
  const user = document.getElementById("github-issue-user").value;
  const reference = document.getElementById("github-issue-reference").value;
  const review = document.getElementById("github-issue-review").value;
  const difficulty = document.getElementById("github-issue-difficulty").value;
  const quality = document.getElementById("github-issue-quality").value;
  const sessionTaken =
    document.getElementById("github-issue-year-taken").value +
    document.getElementById("github-issue-session-taken").value;

  // check if reCAPTCHA has been completed
  const token = grecaptcha.getResponse();
  if (token.length == 0) {
    alert("Please complete reCAPTCHA to verify that you are not a robot.");
    return;
  }

  try {
    const issue = await fetch(WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
          difficulty: difficulty,
          quality: quality,
          sessionTaken: sessionTaken,
        },
      }),
    });
    const json = await issue.json();
    if (issue.ok) {
      return json.url;
    } else {
      console.error("Error validating reCAPTCHA:", json.errors);
      alert("Error valdiating reCAPTCHA. Check console for details.");
    }
  } catch (e) {
    console.error(e);
    alert(
      "Unable to submit review. Please try again later or check the console for more information."
    );
  }
};
