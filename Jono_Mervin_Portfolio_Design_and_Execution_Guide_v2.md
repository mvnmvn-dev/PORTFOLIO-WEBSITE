# Jono Mervin — Developer Portfolio Design & Execution Guide (v2)

**Purpose:** Build a polished personal software developer portfolio that feels distinctive and professional while remaining easy for nontechnical clients to understand.

**Brand direction:** Personal developer brand with the quality and clarity of a small software studio.

**Primary principle:** Lead with the problems you solve. Let technical visitors explore implementation details one level deeper.

**Audience rule (new):** Write for a business owner, a school or office administrator, and a hiring manager at the same time. If a sentence needs technical knowledge to understand, rewrite it or move it into a "Technical details" section.

---

## 1. Choose your monochromatic visual direction

The portfolio should use a restrained, résumé-inspired palette: black, white, and a small range of neutral grays. The design can still feel premium through typography, spacing, layout, and real project screenshots—not through bright accent colors.

Choose one of these grayscale variations. Each stays monochromatic; the difference is warmth and contrast.

### Option A — Classic Resume *(recommended)*

Crisp black-and-white, minimal decoration, and clear hierarchy. The safest option for a professional portfolio aimed at employers and clients.

| Token | Color | Hex | Suggested use |
|---|---|---|---|
| Page background | White | `#FFFFFF` | Main page background |
| Main text | Near-black | `#171717` | Headlines and body text |
| Secondary text | Dark gray | `#555555` | Descriptions and supporting copy |
| Surface | Very light gray | `#F5F5F5` | Project cards and alternating sections |
| Borders | Light gray | `#DDDDDD` | Dividers, card outlines, form fields |
| Muted detail | Mid gray | `#888888` | Metadata, captions, dates |

**Fonts:** Manrope for headings; Inter for body text; IBM Plex Mono only for small technical labels if needed.

**Shapes:** Mostly square corners or a subtle 4–8px radius, thin borders, simple buttons.

**Personality:** Professional, clean, direct, credible.

**Best for:** A résumé-inspired portfolio that should feel polished and familiar to a broad audience.

### Option B — Soft Grayscale

A slightly warmer and softer take on monochrome. It still uses only white, charcoal, and gray, but reduces the starkness of pure black and white.

| Token | Color | Hex | Suggested use |
|---|---|---|---|
| Page background | Soft white | `#FAFAFA` | Main page background |
| Main text | Charcoal | `#222222` | Headlines and body text |
| Secondary text | Gray | `#606060` | Supporting copy |
| Surface | Pale gray | `#F0F0F0` | Project cards and feature areas |
| Borders | Silver gray | `#D8D8D8` | Dividers and outlines |
| Muted detail | Gray | `#929292` | Metadata and captions |

**Fonts:** Inter for headings and body; IBM Plex Mono for small technical labels.

**Shapes:** 6–10px card corners, subtle borders, understated buttons.

**Personality:** Calm, approachable, modern.

**Best for:** A minimal website that feels a little less formal than a traditional résumé.

### Option C — High-Contrast Editorial

A bolder black-and-white style built around large typography, generous white space, and asymmetric project layouts. It remains monochromatic, with no colorful accents.

| Token | Color | Hex | Suggested use |
|---|---|---|---|
| Page background | White | `#FFFFFF` | Main page background |
| Main text | Black | `#101010` | Headlines and key copy |
| Secondary text | Charcoal | `#424242` | Body text and descriptions |
| Surface | Light gray | `#F2F2F2` | Project panels and image frames |
| Borders | Gray | `#CFCFCF` | Thin dividers and outlines |
| Muted detail | Gray | `#777777` | Labels, dates, metadata |

**Fonts:** Space Grotesk for headings; Inter for body text; JetBrains Mono for code or technical details.

**Shapes:** Square corners, strong alignment, large headlines, minimal shadows.

**Personality:** Distinctive, editorial, confident.

**Best for:** A memorable portfolio without relying on color or decorative effects.

### Recommendation

Start with **Option A — Classic Resume**. Use white as the main background, near-black for headings, dark gray for descriptions, and pale gray only for selected sections or project cards. Keep accent colors out of the core interface. Use contrast, typography, composition, and actual project screenshots to make the website unique.

---

## 2. Choose typography

Use no more than two main typefaces, plus an optional monospace font for technical details.

| Pairing | Headings | Body | Technical labels | Overall feel |
|---|---|---|---|---|
| A — Friendly studio | Space Grotesk | Inter | JetBrains Mono | Modern and approachable |
| B — Editorial | Manrope | Inter | IBM Plex Mono | Clean and confident |
| C — Product-focused | Plus Jakarta Sans | Source Sans 3 | JetBrains Mono | Professional and practical |

**Recommended:** Pairing B for a consistent, understated, résumé-like appearance.

### Suggested type scale

- Hero headline: `clamp(2.7rem, 6vw, 5.5rem)`; line-height around `0.98–1.08`.
- Section heading: `clamp(2rem, 4vw, 3.25rem)`.
- Project title: `1.4–1.8rem`.
- Body text: `1rem–1.125rem`, line-height `1.6–1.75`.
- Eyebrow labels: `0.75–0.875rem`, medium weight, slightly increased letter spacing.

Keep paragraphs short. Avoid low-contrast text and tiny body copy.

---

## 3. Choose the page format

### Format 1 — One-page portfolio *(recommended for version 1)*

All primary sections live on one scrolling page, with optional dedicated project case-study pages.

**Advantages:** Simple navigation, quick to build, easy for clients to scan, good starting point for a personal portfolio.

**Trade-off:** Detailed project stories can make the homepage long. Keep summaries brief and move technical detail into case studies.

### Format 2 — Multi-page studio portfolio

Separate pages for Home, Work, About, Services, and Contact.

**Advantages:** More room for detailed project stories and search-friendly content.

**Trade-off:** More content and maintenance. Can feel empty if there are only a few finished projects.

### Format 3 — Interactive portfolio

A more experimental experience with animated transitions, interactive project previews, and diagrams.

**Advantages:** Memorable and can demonstrate frontend skills.

**Trade-off:** Easy to overbuild; motion can distract from the projects and create accessibility/performance problems.

**Recommendation:** Use **Format 1** with individual case-study pages for your best two or three projects. Add richer interactions only after the core content and responsive layout are complete.

---

## 4. Plain-language writing rules (new)

These rules keep the site understandable for nontechnical visitors.

- **Pair every technical term with a short everyday explanation.** Example: "database (a organized place where your records are stored)". Use roughly 5–8 words.
- **Move stack details into a "Technical details" block** on each project, collapsed or placed below the plain summary.
- **Lead with the outcome.** Write "Keeps all records in one searchable place," not "Implemented a CRUD interface with role-based access."
- **Avoid unexplained jargon** in the hero, services, and project cards: API, backend, schema, framework, deployment, machine learning.
- **Keep sentences short** and use active voice. Aim for a reading level a general adult audience finds easy.
- **Use one consistent word per idea.** Pick "system" or "app" and stick with it.
- **State the language(s) you work in** (for example English, Filipino, or both) near Contact.

---

## 5. Homepage layout and content

### Recommended section order

1. Navigation
2. Hero (what I do + who it's for)
3. Featured projects (with outcome lines)
4. Services
5. How I work
6. FAQ, timeline, and pricing guidance
7. About (with photo)
8. GitHub activity (small, secondary)
9. Contact (with availability and response time)
10. Footer

### A. Navigation

Keep the navigation short:

- Logo/name: `JONO MERVIN`
- Work
- Services
- About
- Contact button

On mobile, use a simple menu and keep the contact action easy to find. Avoid menus with many nested options.

### B. Hero section

**Suggested headline:**

> I build digital solutions that make work simpler.

**Suggested supporting copy:**

> I create websites, business systems, and practical digital tools that help people organize work, serve customers, and solve everyday problems.

**"Who this is for" line (new):**

> Built for small businesses, schools, offices, and teams that need a simple, dependable system.

**Availability badge (new):** A small, honest status such as `Open to freelance projects` or `Open to full-time roles`. Update it whenever it changes, and remove it if it becomes untrue.

**Primary button:** `Explore my work`

**Secondary button:** `Let's talk`

The hero should answer what you do without requiring the visitor to understand terms such as API, backend, database schema, or machine learning.

Optional visual: a composed collage of real project screenshots, cropped UI panels, or a simple illustration connecting **Idea → Design → Build**. Do not use fake dashboard screenshots as proof of actual features.

### C. Featured projects

Show three strong projects first, not every repository at once. Use real screenshots from your own applications wherever possible.

Each project card should include:

1. Project name.
2. One plain-language sentence explaining what it helps users do.
3. **One outcome line in client terms (new).** Examples: "Replaces paper logbooks," "Keeps records in one searchable place," "Lets staff check schedules from a phone." Use only outcomes that are true. If you have no measured numbers, describe the change qualitatively and never invent metrics.
4. A real screenshot or short demo.
5. Two to four capability tags written in everyday words (for example "Records," "Scheduling," "Reports").
6. A **status label (new):** Live, In progress, Prototype, Capstone project, or Archived.
7. A `View project` link.

Potential candidates from your GitHub profile include:

- `facilities-admin-management-system`
- `sakaydali-app`
- `spval-agenda-calendar`
- `bcp-osas`

Verify each repository's purpose, status, features, and stack before writing final copy. Select projects based on quality, completeness, and how clearly they demonstrate your abilities—not simply repository count.

**Honest labeling (new):** If a project was built for a class, a capstone, or a mock organization, say so plainly. Clients respect honesty, and it protects your credibility.

**Privacy check for screenshots (new):** Before publishing any screenshot, remove or replace real names, ID numbers, contact details, student or employee data, security logs, and anything that reveals how a real facility is protected. Use sample data and blur anything you are unsure about. This matters most for facilities, campus safety, and records systems.

### D. Services / what I can build

Use everyday descriptions, such as:

- **Business websites** — Introduce a business, service, or product online.
- **Custom management systems** — Organize records, users, tasks, and workflows.
- **Web applications** — Create tools that let people complete tasks online.
- **AI-assisted features** — Explore practical automation or classification where it fits the problem. Describe these as assistive tools that support staff decisions, not replacements for people.

Only advertise services you are comfortable delivering. Explain scope and limitations honestly.

### E. How I work

Show a clear four-step process:

1. **Understand** — Discuss the goal, users, and pain points.
2. **Plan** — Agree on features, priorities, and design direction.
3. **Build and test** — Develop the solution, check important flows, and refine it.
4. **Deliver** — Deploy or hand over the project with instructions and next steps.

This helps first-time clients understand what working with a developer involves.

### F. Working together: timeline, pricing, and support (new)

This section removes the most common client worries. Keep it short and honest.

**How projects usually start:** "Every project starts with a free 30-minute conversation. After we agree on scope, I give a fixed quote." (Adjust to what you actually offer.)

**Typical timelines (estimates only):**

| Project type | Typical timeline |
|---|---|
| Simple business website | 1–3 weeks |
| Custom management system | 1–3 months |
| Changes to an existing system | Depends on scope; quoted first |

Mark these clearly as estimates and replace them with timelines you can realistically meet.

**Pricing:** You do not need to publish prices. A line such as "Pricing depends on scope. You will always get a written quote before work begins" is enough. If you prefer, show a "starting from" figure only if you are ready to honor it.

**After launch:** State exactly what you offer, for example bug fixes for a set number of weeks, optional monthly maintenance, and how to request changes. Be specific so clients know they will not be left alone.

**What I need from you:** A short list such as your goals, sample documents or current process, a point person for feedback, and any logos or content.

### G. FAQ (new)

Add five to six questions in plain language:

- Do I need to know anything technical?
- Who owns the code, design, and data?
- What happens after the project launches?
- Can you update or expand my system later?
- How will we communicate, and how often?
- What do you need from me to get started?

Only publish answers you are prepared to stand behind. If you are unsure about ownership or support terms, decide them first, and consider putting them in a simple written agreement.

### H. About

Use a concise introduction focused on how you approach problems and what you enjoy building. Include a **friendly, clear photo of yourself** (a face builds trust with nontechnical clients more than a design flourish). Add your core technologies as a simple grouped list rather than a logo wall:

- **Websites:** the tools you use to build pages
- **Systems and data:** frameworks and databases
- **AI features:** the tools you have actually used

Add a link to GitHub and a **one-page résumé PDF download** near Contact for employers.

### I. GitHub contributions — April to October only

Add a compact **GitHub Activity** section after Featured Projects or near the bottom of the homepage. It should show only contribution dates from **April 1 through October 31, 2026**. Do not display January–March or November–December in this section. October 2026 is still in progress as of October 12, so label it as year-to-date until the month is complete.

- **Profile:** [github.com/jono-mervin](https://github.com/jono-mervin)
- **Display:** A monochrome contribution heatmap or a simple April–October monthly summary. Use the same black, white, and gray palette as the rest of the portfolio.
- **Plain explanation (new):** Add one friendly line for nontechnical visitors, such as "A record of my coding activity." Do not assume visitors know what a contribution graph is.
- **Data rule:** Pull contribution dates/counts from the actual GitHub profile or a reliable contribution-data source. Do not estimate, fabricate, or manually inflate counts.
- **Date filter:** Include entries where the contribution date is between `2026-04-01` and `2026-10-31`, inclusive. If you intend to show a different year later, change both dates together.
- **Feasibility check (new):** GitHub's public contribution graph is not simply embeddable. Decide early whether you will use GitHub's API, a small build-time script that fetches and saves the data, or a trusted third-party service. Confirm it works before promising this section.
- **Privacy and accuracy:** The public graph may not include private-repository activity unless the account owner enables private contribution visibility. Explain the displayed range clearly, and do not describe it as a full-year total.
- **Link:** Add a subtle `View GitHub profile` link below the visualization.
- **Fallback:** If the contribution data source fails to load, show the profile link and a short message rather than a broken or empty chart.

**Suggested heading:** `Consistent work, visible progress.`

**Suggested caption:** `GitHub contributions from April–October 2026. October activity is year-to-date.`

Keep this section secondary to the project case studies. The contribution graph is supporting evidence of activity; the quality and explanation of the projects should remain the main focus.

### J. Contact

Headline: **Have an idea you want to build?**

Include:

- A direct email link.
- GitHub, and LinkedIn if maintained.
- **A chat option (new)** such as Messenger or WhatsApp, if you are comfortable using it, since many local clients prefer chat over forms.
- **A response-time promise (new):** for example "I reply within 1–2 business days." Only promise what you can keep.
- **Languages spoken (new).**
- A short contact form only if it can reliably deliver messages. Give clear success and error feedback for form submission.

---

## 6. Project case-study template

A project page should be useful to both a business owner and a technical reviewer.

### First screen: plain-language summary

- Project name and real screenshot.
- One sentence describing the problem it addresses.
- One outcome line in client terms.
- Project status: live, in progress, prototype, capstone, or archived.
- Links: Live demo (if available), GitHub, and demo video (if available).

### Then explain the project

**The problem** — What was difficult, slow, confusing, or manual?

**The solution** — What does the application help users do?

**Key features** — List only features that are actually implemented.

**My contribution** — Be clear about what you personally designed, coded, tested, or integrated. If it was a team project, say so.

**How it works** — Add a simple workflow diagram before deeper technical detail.

**Technology** — List the real framework, languages, database, and APIs used, with a brief reason for important choices. Keep this in a clearly labeled "Technical details" section so nontechnical readers can skip it.

**Challenges and decisions** — Describe one real technical challenge and how you handled it.

**What I learned / next improvements** — Show reflection and engineering maturity.

**Evidence** — Add real screenshots, tests, demo links, and accurate metrics where available. Never invent performance figures, user counts, client testimonials, or production usage.

**Data and privacy note (new):** If the project handles sensitive information, add one line explaining that screenshots use sample data. For AI features, state what the feature does and that people stay in charge of final decisions.

---

## 7. Visual rules for a consistent monochrome UI

### Layout

- Use a centered content container around `1120–1240px` on desktop.
- Use a 12-column grid on large screens and a 4-column or single-column approach on mobile.
- Use consistent spacing increments such as 8, 12, 16, 24, 32, 48, 64, and 96px.
- Keep text line lengths comfortable; do not stretch paragraphs across the full screen.
- Give sections clear separation, but do not place every item inside a card.

### Project cards

- Prioritize screenshots over decorative icons.
- Keep card layouts consistent while varying screenshot crops or composition slightly.
- Use a subtle border and small elevation change on hover; avoid large bouncy animations.
- Make the project title and link easy to identify.

### Buttons and links

- One clear primary button style.
- One quieter secondary style.
- Visible hover, keyboard-focus, disabled, and loading states where applicable.
- Ensure links look like links and buttons perform actions.

### Motion

Choose **balanced, restrained motion** by default:

- Small hover transitions.
- Gentle section reveal only if it does not hide content from assistive technology.
- No mandatory intro animation or fake loading screen.
- Respect `prefers-reduced-motion`.
- Do not use animation as a substitute for useful project content.

### Accessibility and responsive behavior

- Test keyboard navigation and visible focus.
- Use semantic headings and descriptive link text.
- Maintain sufficient text contrast.
- **Make touch targets at least 44px tall and wide (new).**
- **Write alt text that describes meaning, not "screenshot" (new).** Example: "Dashboard showing a monthly list of facility bookings."
- Add captions or text alternatives for any demo video.
- Test narrow mobile screens, tablets, and desktop widths.
- Avoid hover-only information; touch users need access to the same content.
- Keep page weight low so the site loads reasonably on slower mobile connections.

---

## 8. Technology and implementation choices

Choose the stack that helps you finish cleanly and maintain the portfolio—not the stack that looks most impressive on a résumé.

### Option A — HTML, CSS, JavaScript

Best for a small, mostly static portfolio and for practicing fundamentals. Use reusable CSS variables and components/patterns, and keep project content organized.

### Option B — React or Next.js

Best if you want reusable components, interactive elements, or project case studies that will grow over time. A static export or simple deployment may be sufficient; a database is not necessary for static portfolio content.

### Recommendation

If the priority is a straightforward, fast, maintainable site, use the stack you already know best. If you specifically want to demonstrate modern component-based frontend skills, React or Next.js is a sensible choice. Avoid adding a backend unless the website needs a real dynamic feature.

### Suggested component structure

```text
src/
  components/
    Navbar
    Hero
    ProjectCard
    ProjectGrid
    Services
    ProcessSteps
    WorkingTogether
    Faq
    About
    GithubActivity
    Contact
    Footer
  data/
    projects
    faq
  pages/ or app/
  styles/
    tokens.css
    global.css
```

Adapt this structure to your chosen framework; it is a guide, not a required folder layout.

### Design tokens

Create CSS variables for colors, spacing, radii, shadows, and typography. This makes it easier to change the visual direction consistently later.

Example for Option A — Classic Resume. Token names describe their role, so they stay clear even though the palette is all gray:

```css
:root {
  --color-bg: #FFFFFF;
  --color-text: #171717;
  --color-text-strong: #222222;
  --color-text-soft: #555555;
  --color-surface: #F5F5F5;
  --color-muted: #888888;
  --color-border: #DDDDDD;

  --font-heading: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  --radius-card: 6px;
  --radius-button: 4px;
  --content-width: 1200px;
}
```

Note: the muted color is `#888888` to match the Option A table. Check that muted text still meets contrast on white; use `--color-text-soft` for anything a visitor must read.

### SEO and sharing basics (new)

- **Page title formula:** `Jono Mervin — Web & Systems Developer`
- **Meta description:** One sentence on what you build and for whom. Add your location or service area if you want local clients.
- **Social preview image** and a favicon.
- **Descriptive page titles** for each case study, for example `Facilities Admin System — Case Study | Jono Mervin`.

---

## 9. Execution roadmap

### Phase 1 — Audit and select projects

- Review the GitHub repositories and confirm their purpose and current status.
- Pick three featured projects.
- Run each project locally if possible.
- Capture genuine screenshots using sample data and note which features are complete.
- Improve each selected repository's README with setup instructions, screenshots, feature list, and technology stack.
- Write one outcome line and one status label for each project.

**Deliverable:** A verified project inventory and evidence folder.

### Phase 2 — Lock the design and the content

- Choose one palette, font pairing, and page format from this guide.
- Sketch the homepage and one project case study.
- Decide the desktop and mobile navigation.
- Define colors, type sizes, spacing, card styles, and button states.
- Draft plain-language copy for the hero, services, process, FAQ, timeline, and support terms.
- Decide your real policies: ownership, after-launch support, response time, availability.

**Deliverable:** A consistent mini design system, wireframe, and approved copy.

### Phase 3 — Build the core page

- Implement navigation, hero, project cards, services, process, working-together section, FAQ, about, and contact.
- Make layout responsive before adding decorative animation.
- Connect all repository and live-demo links.
- Ensure buttons and forms actually work.
- Add the résumé PDF and a clear photo.

**Deliverable:** A complete first version of the homepage.

### Phase 4 — Build case studies

- Create one reusable case-study template.
- Write concise, accurate descriptions for the selected projects.
- Add screenshots, feature lists, architecture/workflow visuals, and technical details.
- Distinguish live projects from prototypes, capstones, and unfinished work.
- Run the privacy check on every image.

**Deliverable:** Two or three detailed project pages, depending on available evidence.

### Phase 5 — GitHub activity section

- Choose the data source and confirm it returns real contribution data.
- Build the April–October display with the fallback state.
- Add the plain-language caption.

**Deliverable:** A working, accurate, secondary activity section.

### Phase 6 — Test and launch

- Test at mobile, tablet, and desktop widths.
- Check links, form behavior, keyboard navigation, color contrast, and image loading.
- Ask one nontechnical person to read the homepage and explain back what you do.
- Optimize image sizes and avoid unnecessary animation libraries.
- Add a useful page title, description, favicon, and social sharing preview.
- Deploy through a suitable host such as Vercel or GitHub Pages, depending on the stack.
- Test the deployed website, not just the local version.

**Deliverable:** A public portfolio that works reliably.

---

## 10. Final quality checklist

### Content

- [ ] A new visitor can explain what I do after reading the hero.
- [ ] A nontechnical friend can describe each featured project after reading its card.
- [ ] Every featured project has an accurate, plain-language description, an outcome line, and a status label.
- [ ] Claims match the actual implementation, and no metrics are invented.
- [ ] My role and contributions are clear.
- [ ] Technical terms are explained or moved into "Technical details."
- [ ] Timeline, pricing, support, and FAQ answers reflect what I can really deliver.
- [ ] Contact details, résumé, and repository links work.
- [ ] GitHub activity shows only April–October for the selected year and uses verified contribution data.

### Privacy and honesty

- [ ] Screenshots contain no real personal data, IDs, or security details.
- [ ] Class, capstone, and prototype projects are labeled as such.
- [ ] AI features are described as assistive.

### Design

- [ ] I use one coherent palette and no more than two main fonts.
- [ ] Headings, body copy, buttons, and cards have consistent styling.
- [ ] The interface looks good on mobile as well as desktop.
- [ ] Screenshots are real and legible.
- [ ] Decorative elements do not compete with project content.

### Engineering

- [ ] No dead links or nonfunctional buttons.
- [ ] Forms have validation and clear feedback if included.
- [ ] Keyboard focus is visible, touch targets are at least 44px, and text contrast is sufficient.
- [ ] Alt text describes meaning.
- [ ] Images are optimized and page loading is reasonable.
- [ ] The deployed version has been tested.

---

## 11. Decisions to make before coding

Use this as the final selection sheet:

- **Color direction:** Option A — Classic Resume / Option B — Soft Grayscale / Option C — High-Contrast Editorial
- **Font pairing:** A / B / C
- **Page format:** One-page + case studies / Multi-page / Interactive
- **Motion:** Minimal / Balanced / Immersive
- **GitHub activity range:** April 1–October 31, 2026 (October year-to-date until the month ends)
- **GitHub data source:** GitHub API / build-time script / third-party service
- **Featured projects:** Select the strongest three after verifying the repositories
- **Primary goal:** Employment / Freelance clients / Both
- **Availability status:** Freelance / Full-time / Both / Not available
- **Support terms:** What is included after launch, and for how long
- **Ownership terms:** Who owns the code, design, and data
- **Contact channels:** Email / chat app / form, and your response-time promise
- **Languages:** English / Filipino / Both

### Final recommendation

Use **Option A (Classic Resume) + Font Pairing B + one-page homepage with dedicated case studies + minimal-to-balanced motion**. Keep the words simple, the visuals polished, and the project evidence real. Let typography, spacing, thin borders, grayscale project previews, and clear content hierarchy provide the visual identity. Add trust-building content (outcomes, timeline, support, FAQ, a real photo) so first-time clients feel comfortable reaching out, while technical reviewers can still explore how you build software.
