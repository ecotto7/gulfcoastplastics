# Gulf Coast Plastics

This is a static HTML, CSS, and JavaScript site. Files live at the repository root. There is no build step.

## GitHub

- The repository is `ecotto7/gulfcoastplastics`, public, on `main`. Do not create it under BIG-IC.
- Commit and push only when asked. Batch related changes into one commit.

## Netlify

- Team name: Gonzo Systems. Team slug: `ecotto7`. Do not create the site on any other Netlify account. Confirm the team is Gonzo Systems before creating the site.
- Import `ecotto7/gulfcoastplastics`. The build command is empty. The publish directory is `.`.
- `netlify.toml` stays at the repository root with `publish = "."`.
- Deploys happen only by pushing to `main`. Never run `netlify deploy`, `netlify deploy --prod`, or a deploy through the Netlify tools unless explicitly asked. Each production deploy costs 15 credits from a shared 300-per-month pool. If that pool runs out, every site on the team pauses. The GitHub import is the production deploy.
- Do not turn on Netlify DNS, change nameservers, or attach gulfcoastplastics.com until explicitly asked. When asked, add the domain in Netlify first, keep DNS at the current provider, and leave email records alone. The address in use is https://gulfcoastplastics.com/. The apex is the primary domain. `www` redirects to the apex on the current site.

## Forms

- Do not use Netlify Forms. Do not add `data-netlify`, a form-name field, or a honeypot.
- Forms stay on their existing provider. Contact Us is the JotForm embed already on the page: form id `253643107208452`, script `https://form.jotform.com/jsform/253643107208452`. Keep that embed. Do not clip the form. The Jotform mark at the bottom stays visible.
- Do not tell future edits to use Netlify Forms.

## Pages and redirects

- Pages use folder URLs. `/about-us/` is `about-us/index.html`. Do not rename or move a page without a 301 in `netlify.toml`.
- Do not redirect a query string that already lands on the same path. `/?p=5` and `/?page_id=5` already land on the homepage. Redirecting them to `/` forwards the query string and the homepage loops.
- Query strings are forwarded on 301s.
- `/new-page/` is an unused placeholder and is not part of this site.
- Privacy Policy is `/privacy-policy/` and Terms of Use is `/terms-of-use/`. The copy is the CTI East Coast privacy policy and terms of use, with the company set to Gulf Coast Plastics, Inc., the site set to https://gulfcoastplastics.com, and the contact details taken from the Contact Us page. `/Privacy-Policy` and `/Terms-Of_Use` redirect to those pages.

## Copyright

The copyright starts in 1999. The end year in the HTML is the current year, and `js/site.js` updates it so it stays current.
