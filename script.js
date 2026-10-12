const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    history.pushState(null, '', link.getAttribute('href'));
    target.classList.remove('section-transition');
    void target.offsetWidth;
    target.classList.add('section-transition');
    target.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(() => target.classList.remove('section-transition'), 950);
  });
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !prefersReducedMotion.matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelector('#year').textContent = new Date().getFullYear();

const GITHUB_RANGE = { start: '2026-01-01', end: '2026-12-31', year: 2026 };
const GITHUB_LEVELS = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parseDateKey(key) {
  const [year, month, day] = key.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function buildContributionWeeks(contributions, startKey, endKey) {
  const byDate = new Map(contributions.map((day) => [day.date, day]));
  const start = parseDateKey(startKey);
  const end = parseDateKey(endKey);
  const gridStart = new Date(start);
  gridStart.setDate(gridStart.getDate() - gridStart.getDay());
  const gridEnd = new Date(end);
  gridEnd.setDate(gridEnd.getDate() + (6 - gridEnd.getDay()));

  const weeks = [];
  const cursor = new Date(gridStart);

  while (cursor <= gridEnd) {
    const week = [];
    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const key = formatDateKey(cursor);
      const inRange = key >= startKey && key <= endKey;
      const entry = byDate.get(key);
      week.push({
        date: key,
        count: inRange ? (entry?.count || 0) : null,
        level: inRange ? (entry?.level || 0) : null,
        month: cursor.getMonth(),
        day: cursor.getDate(),
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
}

function renderContributionGraph(container, username, weeks) {
  const monthMarks = [];
  let labeledMonth = null;
  weeks.forEach((week, weekIndex) => {
    const firstOfMonth = week.find((day) => day.count !== null && day.day === 1);
    if (firstOfMonth) {
      monthMarks.push({ weekIndex, label: MONTH_LABELS[firstOfMonth.month] });
      labeledMonth = firstOfMonth.month;
      return;
    }
    const firstInRange = week.find((day) => day.count !== null);
    if (firstInRange && labeledMonth === null) {
      monthMarks.push({ weekIndex, label: MONTH_LABELS[firstInRange.month] });
      labeledMonth = firstInRange.month;
    }
  });

  const total = weeks.flat().reduce((sum, day) => sum + (day.count || 0), 0);
  const monthsRow = monthMarks.map((mark) => (
    `<span style="grid-column:${mark.weekIndex + 1}">${mark.label}</span>`
  )).join('');

  const cells = weeks.map((week) => {
    const days = week.map((day) => {
      if (day.count === null) {
        return '<span class="contrib-day is-empty" aria-hidden="true"></span>';
      }
      const label = `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`;
      return `<span class="contrib-day" style="background:${GITHUB_LEVELS[day.level]}" title="${label}" aria-label="${label}"></span>`;
    }).join('');
    return `<div class="contrib-week">${days}</div>`;
  }).join('');

  container.innerHTML = `
    <div class="contrib-scroll">
      <div class="contrib-months" style="grid-template-columns:repeat(${weeks.length}, 1fr)">${monthsRow}</div>
      <div class="contrib-grid">${cells}</div>
    </div>
    <div class="contrib-meta">
      <span>${total} contribution${total === 1 ? '' : 's'} in ${GITHUB_RANGE.year}</span>
      <div class="contrib-legend" aria-hidden="true">
        <span>Less</span>
        ${GITHUB_LEVELS.map((color) => `<i style="background:${color}"></i>`).join('')}
        <span>More</span>
      </div>
    </div>
  `;
  container.setAttribute('aria-label', `GitHub contribution calendar for ${username}: ${total} contributions in ${GITHUB_RANGE.year}`);
}

async function loadGithubCalendars() {
  const calendars = document.querySelectorAll('[data-github-user]');
  await Promise.all([...calendars].map(async (calendar) => {
    const username = calendar.dataset.githubUser;
    const graph = calendar.querySelector('.github-calendar-graph');
    if (!graph) return;

    try {
      const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${GITHUB_RANGE.year}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const weeks = buildContributionWeeks(data.contributions || [], GITHUB_RANGE.start, GITHUB_RANGE.end);
      renderContributionGraph(graph, username, weeks);
    } catch {
      graph.innerHTML = `<p class="calendar-error">Could not load this calendar. <a href="https://github.com/${username}" target="_blank" rel="noreferrer">View ${username} on GitHub</a></p>`;
    }
  }));
}

loadGithubCalendars();

const form = document.querySelector('#contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const status = form.querySelector('.form-status');
  if (!name || !email || !message) {
    status.textContent = 'Please complete your name, email, and message.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = 'Please enter a valid email address.';
    return;
  }
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  status.textContent = 'Opening your email app…';
  window.location.href = `mailto:hello@jonomervin.dev?subject=${subject}&body=${body}`;
});
