let filterEls = document.querySelectorAll('.js-filters__button');
let projectEls = document.querySelectorAll('.js-portfolio-list__item');

for (const filter of filterEls) {
  filter.addEventListener('click', () => onFilterClick(filter.id));
}

function onFilterClick(id) {
  for (const project of projectEls) {
    if (project.id !== id && id !== 'all') {
      project.style.display = 'none';
    }
    if (project.id === id) {
      project.style.display = 'block';
    }
    if (id === 'all') {
      project.style.display = 'block';
    }
  }
}
