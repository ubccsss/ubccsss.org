(function() {
  function loadGrades(subject, course) {
    return fetch(`https://ubcgrades.com/api/course-profile/${subject}/${course}`)
      .then(res => res.json());
  }
  function addDescription(list, term, details) {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.className = 'col-sm-3'
    dt.textContent = term;
    dd.className = 'col-sm-9'
    dd.textContent = details + '%';
    list.append(dt, dd);
  }
  document.querySelectorAll('.grades-api').forEach(function(gradesEl) {
    console.log(gradesEl);
    loadGrades(gradesEl.dataset.subject, gradesEl.dataset.course).then(json => {
      const fragment = document.createDocumentFragment();
      addDescription(fragment, 'Average', json.average);
      addDescription(fragment, 'Highest Grade', json.high);
      addDescription(fragment, 'Lowest Grade', json.low);
      addDescription(fragment, 'Percentage passed', json.pass_percent);
      gradesEl.append(fragment);
    });
  });
})();
