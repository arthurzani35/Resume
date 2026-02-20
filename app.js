const tabButtons = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.panel');

function setActiveTab(targetId) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === targetId;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  tabPanels.forEach((panel) => {
    if (!panel.id) return;
    const isActive = panel.id === targetId;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });
}

if (tabButtons.length && tabPanels.length) {
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.tab;
      setActiveTab(targetId);
      window.location.hash = targetId;
    });
  });

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(initialHash)) {
    setActiveTab(initialHash);
  }
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
