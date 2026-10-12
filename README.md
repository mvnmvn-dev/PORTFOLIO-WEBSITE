# JONO Projects — John Mervin Agno

A plain HTML, CSS, and JavaScript portfolio designed from `Jono_Mervin_Portfolio_Design_and_Execution_Guide_v2.md`.

## Local preview

Because this is a static site, serve the folder with any static server. For example:

```powershell
npx.cmd serve .
```

Then open the local URL shown by the command.

## Deploy on Vercel through GitHub

1. Create a GitHub repository and push this folder.
2. In Vercel, choose **Add New Project** and import the repository.
3. Leave the framework preset as **Other** and the build command blank.
4. Set the output directory to `.`.
5. Deploy.

## Files

- `index.html`, `styles.css`, `script.js` — the site.
- `og-image.png` — social sharing preview (1200×630). `og-image.svg` is the editable source.
- `resume.md` — downloadable résumé. Replace with a PDF when ready.

## Before publishing

- Add a real, clear photo to the About section.
- The project cards use the supplied screenshots with CSS grayscale/contrast and pixelated image rendering; clicking one opens its full-size original. The `.jpg` image copies are byte-identical to the supplied `.png`-named JPEG files so static hosting can identify them correctly.
- Review every screenshot for names, account details, addresses, and safety or operational data; replace or redact anything that should not be public before publishing.
- Re-verify each live deployment URL and status before publishing; the iPhone showcase is an unofficial concept, not affiliated with Apple.
- Confirm the email address, support terms, and ownership terms.
- Add a LinkedIn link to the Contact section if you maintain a profile.
- Once the final domain is set, add `og:url`, a canonical link, and an absolute `og:image` URL in `index.html`.

## GitHub activity

The About section shows public contributions from April 1 to October 31, 2026 for both GitHub profiles, using the jogruber contributions API. October is year to date, so the calendar stops at today until the month ends. If the API is unavailable, each calendar falls back to a link to the profile.
