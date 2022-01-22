(async () => {
  async function loadGrades(subject, course) {
    const res = await fetch(`https://ubcgrades.com/api/v2/course-statistics/UBCV/${subject}/${course}`);
    return await res.json();
  }

  function addDescription(list, term, details) {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.className = 'col-sm-3';
    dt.textContent = term;
    dd.className = 'col-sm-9';
    dd.textContent = details.toFixed(2) + '%';
    list.append(dt, dd);
  }

  const gradesEl = document.getElementsByClassName('grades-api')[0];
  const grades = await loadGrades(gradesEl.dataset.subject, gradesEl.dataset.course);
  const { average, average_past_5_yrs, max_course_avg, min_course_avg, stdev } = grades;
  const fragment = document.createDocumentFragment();
  addDescription(fragment, 'Average (all time)', average);
  addDescription(fragment, 'Average (past 5 years)', average_past_5_yrs);
  addDescription(fragment, 'Highest Grade', max_course_avg);
  addDescription(fragment, 'Lowest Grade', min_course_avg);
  addDescription(fragment, 'Standard Deviation', stdev);
  gradesEl.append(fragment);
})();
