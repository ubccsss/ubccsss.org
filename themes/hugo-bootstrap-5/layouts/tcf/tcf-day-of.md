<!DOCTYPE html>
<html lang="{{ .Lang }}">
  <head>
    {{ partial "head-meta" . }}


    <link rel="canonical" href="{{ .Permalink }}" />

    <title>UBC Technical Career Fair 2023</title>

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.2/css/bootstrap.min.css"
      integrity="sha512-CpIKUSyh9QX2+zSdfGP+eWLx23C8Dj9/XmHjZY2uDtfkdLGo0uY12jgcnkX9vXOgYajEKb/jiw67EYm+kBf+6g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer" />
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
      integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
      crossorigin="anonymous"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
      integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
      crossorigin="anonymous"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />

    <link href="{{ "css/style.css" | relURL }}" rel="stylesheet" />
    <link href="{{ "css/tcf2023.css" | relURL }}" rel="stylesheet" />

    {{ range .AlternativeOutputFormats -}}
      <link
        rel="{{ .Rel }}"
        type="{{ .MediaType.Type }}"
        href="{{ .Permalink | safeURL }}" />
    {{ end -}}
    {{ template "_internal/google_analytics_async.html" . }}
    {{ partial "head-custom.html" . }}
  </head>
  <body class="d-flex flex-column min-vh-100">
    <div class="dropdown nav-sticky">
      <button
        class="btn btn-light dropdown-toggle position-absolute m-3 small-shadow"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        <i class="bi-list"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="/tcf#about">About</a></li>
        <li><a class="dropdown-item" href="/tcf/companies">Companies</a></li>
        <li><a class="dropdown-item" href="/tcf#events">Q&A Events</a></li>
        <li><a class="dropdown-item" href="/tcf#event-info">Event Info</a></li>
        <li><a class="dropdown-item" href="/tcf#faq">FAQ</a></li>
      </ul>
    </div>
    <div class="hero-header py-6 h-100">
      <div class="hero-header-content">
        <div class="mx-auto py-5">
          <h1 class="display-1 fw-bold mb-neg1">Day-Of Event Information</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <a href="/tcf/">&lt; back to main page</a>
      <p class="mt-4">
        This page hosts the day-of event information, including booth maps,
        hourly breakdown event schedules, and other logistics.<br /><br />Check
        back later for more information!
      </p>
      <hr />
      <ul>
        <li>
          <p>
            <a href="/files/tcf2023/Venue-Info.pdf"
              >Floor Plan, Event Schedule, Booth Allocations, and Event Map</a
            >
          </p>
        </li>
        <li>
          <p><a href="/files/tcf2023/menu.pdf">Food/Beverages at TCF</a></p>
        </li>
        <li>
          <p>
            <a href="/files/tcf2023/wifi-tutorial.pdf"
              >UBC Visitor Internet Access at TCF</a
            >
          </p>
        </li>
      </ul>
    </div>
    <div class="container py-0 mt-auto">
      <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <img class="bi" width="30" height="24" src="/logo.svg" />
          </a>
          <span class="mb-3 mb-md-0 text-muted">© 2023 UBC CSSS</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="https://www.instagram.com/ubc_csss/"
              ><i class="bi-instagram"></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="https://twitter.com/ubccsss">
              <i class="bi-twitter-x"></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="http://ubccsss.org/discord">
              <i class="bi-discord"></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="https://www.facebook.com/ubccsss">
              <i class="bi-facebook"></i
            ></a>
          </li>
        </ul>
      </footer>
    </div>
  </body>
  <style>
    .hero-header {
      background: url(/files/tcf6.jpg);
      background-position: center;
    }
    .hero-header-content {
      padding: 5rem 0;
    }
  </style>
</html>
