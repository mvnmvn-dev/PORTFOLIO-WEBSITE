const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const themeStorageKey = 'jono-projects-theme';
const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
let hasSavedTheme = false;

try {
  const savedTheme = localStorage.getItem(themeStorageKey);
  hasSavedTheme = savedTheme === 'dark' || savedTheme === 'light';
} catch {}

function applyTheme(theme, remember = false) {
  const darkMode = theme === 'dark';
  document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  themeToggle?.setAttribute('aria-pressed', String(darkMode));
  const label = darkMode ? 'Switch to light mode' : 'Switch to dark mode';
  themeToggle?.setAttribute('aria-label', label);
  themeToggle?.setAttribute('title', label);
  themeColorMeta?.setAttribute('content', darkMode ? '#121212' : '#ffffff');

  if (remember) {
    hasSavedTheme = true;
    try {
      localStorage.setItem(themeStorageKey, darkMode ? 'dark' : 'light');
    } catch {}
  }
}

applyTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
themeToggle?.addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
});

const followSystemTheme = (event) => {
  if (!hasSavedTheme) applyTheme(event.matches ? 'dark' : 'light');
};
if (systemThemeQuery.addEventListener) systemThemeQuery.addEventListener('change', followSystemTheme);
else systemThemeQuery.addListener?.(followSystemTheme);

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

function closeMenu() {
  nav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const sectionNavLinks = [...(nav?.querySelectorAll('a[href^="#"]') ?? [])]
  .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
  .filter(({ section }) => section);
let navUpdatePending = false;

function updateCurrentNavSection() {
  if (navUpdatePending) return;
  navUpdatePending = true;

  window.requestAnimationFrame(() => {
    const marker = window.innerHeight * 0.32;
    const current = sectionNavLinks.find(({ section }) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= marker && bounds.bottom > marker;
    });

    sectionNavLinks.forEach(({ link }) => {
      if (link === current?.link) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    navUpdatePending = false;
  });
}

window.addEventListener('scroll', updateCurrentNavSection, { passive: true });
window.addEventListener('resize', updateCurrentNavSection);
updateCurrentNavSection();

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    closeMenu();
    menuToggle?.focus();
  }
});

window.matchMedia('(min-width: 681px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
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

    // Move keyboard and screen-reader focus to the section that was scrolled to.
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });

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

const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const manilaTime = document.querySelector('#manila-time');
if (manilaTime) {
  const manilaTimeFormatter = new Intl.DateTimeFormat('en-PH', {
    timeZone: 'Asia/Manila',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  const updateManilaTime = () => {
    const now = new Date();
    manilaTime.textContent = `${manilaTimeFormatter.format(now)} PHT (UTC+8)`;
    manilaTime.dateTime = now.toISOString();
  };

  updateManilaTime();
  window.setInterval(updateManilaTime, 1_000);
}

// GitHub activity: April 1 to October 31, 2026. October is year to date,
// so the calendar stops at today's date until the month is complete.
const GITHUB_RANGE = { start: '2026-04-01', end: '2026-10-31', year: 2026, label: 'April to October 2026' };
const GITHUB_LEVELS = [0, 1, 2, 3, 4].map((level) => `var(--contrib-level-${level})`);
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
      <span>${total} contribution${total === 1 ? '' : 's'}, Apr–Oct 2026</span>
      <div class="contrib-legend" aria-hidden="true">
        <span>Less</span>
        ${GITHUB_LEVELS.map((color) => `<i style="background:${color}"></i>`).join('')}
        <span>More</span>
      </div>
    </div>
  `;
  container.setAttribute('aria-label', `GitHub contribution calendar for ${username}: ${total} contributions, ${GITHUB_RANGE.label}`);
}

async function loadGithubCalendars() {
  const calendars = document.querySelectorAll('[data-github-user]');
  const today = formatDateKey(new Date());
  const endKey = today < GITHUB_RANGE.end ? today : GITHUB_RANGE.end;

  await Promise.all([...calendars].map(async (calendar) => {
    const username = calendar.dataset.githubUser;
    const graph = calendar.querySelector('.github-calendar-graph');
    if (!graph) return;

    try {
      const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${GITHUB_RANGE.year}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const weeks = buildContributionWeeks(data.contributions || [], GITHUB_RANGE.start, endKey);
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
  const fallback = form.querySelector('.form-fallback');
  const gmailDraftLink = form.querySelector('.gmail-draft-link');
  if (!name || !email || !message) {
    status.textContent = 'Please complete your name, email, and message.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = 'Please enter a valid email address.';
    return;
  }
  const subjectText = `Portfolio enquiry from ${name}`;
  const bodyText = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = new URL('mailto:work.jmagno@gmail.com');
  mailto.searchParams.set('subject', subjectText);
  mailto.searchParams.set('body', bodyText);
  const gmail = new URL('https://mail.google.com/mail/');
  gmail.searchParams.set('view', 'cm');
  gmail.searchParams.set('fs', '1');
  gmail.searchParams.set('to', 'work.jmagno@gmail.com');
  gmail.searchParams.set('su', subjectText);
  gmail.searchParams.set('body', bodyText);
  gmailDraftLink.href = gmail.toString();
  fallback.hidden = false;
  status.textContent = 'Opening your email app. If no draft appears, use the Gmail fallback below; review and send the message yourself.';
  window.location.href = mailto.toString();
});
