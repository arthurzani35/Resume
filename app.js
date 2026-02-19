const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

const activateTab = (id) => {
  tabs.forEach((tab) => {
    const active = tab.dataset.tab === id;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  panels.forEach((panel) => {
    const active = panel.id === id;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
  });
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.tab;
    activateTab(id);
    window.location.hash = id;
  });
});

const initial = window.location.hash.replace('#', '');
if (initial && document.getElementById(initial)) {
  activateTab(initial);
}

document.getElementById('year').textContent = new Date().getFullYear();
