const form = document.getElementById("github-pr-form");
const createPRButton = document.getElementById("github-pr-btn");

// see ./config/[env]/params.yml for different urls used for different environments
const WORKER_URL = form.dataset.workerurl;

// call createGithubPR if form is valid and display link to the new PR
(() => {
  document.getElementById("github-pr-year-taken").max =
    new Date().getFullYear();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    // disable button to prevent multiple submissions while waiting for response
    createPRButton.disabled = true;

    form.classList.add("was-validated");

    // if form is valid, create PR
    if (form.checkValidity()) {
      createPRButton.innerHTML = `<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div>`;
      const url = await createGithubPR();
      if (!url) {
        createPRButton.innerHTML = "Submit";
        createPRButton.disabled = false;
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
      createPRButton.innerHTML = "Submit";
    } else {
      createPRButton.disabled = false;
    }
  });
})();

/**
 * Makes POST request to Cloudflare worker to create a new PR on GitHub
 * if error, displays error message, logs error to console
 * otherwise, displays success message
 */
const createGithubPR = async () => {
  const course = form.dataset.course;
  const user = document.getElementById("github-pr-user").value;
  const reference = document.getElementById("github-pr-reference").value;
  const review = document.getElementById("github-pr-review").value;
  const difficulty = document.getElementById("github-pr-difficulty").value;
  const quality = document.getElementById("github-pr-quality").value;
  const sessionTaken =
    document.getElementById("github-pr-year-taken").value +
    document.getElementById("github-pr-session-taken").value;

  // check if reCAPTCHA has been completed
  const token = grecaptcha.getResponse();
  if (token.length == 0) {
    alert("Please complete reCAPTCHA to verify that you are not a robot.");
    return;
  }

  try {
    const pr = await fetch(WORKER_URL, {
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
    const json = await pr.json();
    if (pr.ok) {
      return json.url;
    } else {
      console.error(json);
      alert(
        "Unable to submit review. Please try again later or check the console for more information.\n\n" +
          "If the problem persists, please create an issue at www.github.com/ubccsss/ubccsss.org/issues"
      );
    }
  } catch (e) {
    console.error(e);
    alert(
      "Unable to submit review. Please try again later or check the console for more information.\n\n" +
        "If the problem persists, please create an issue at www.github.com/ubccsss/ubccsss.org/issues"
    );
  }
};
