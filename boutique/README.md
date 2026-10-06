# ANA Fashion Boutique website

This is a fast, responsive multi-page static website. The finished files are in
`dist/`.

## Website pages

- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `gallery.html` — Filterable design gallery
- `bridal.html` — Bridal wear
- `process.html` — Tailoring process
- `contact.html` — Contact, appointments and FAQ

## Edit the content

- Business details, services, gallery entries and FAQ answers: `dist/content.js`
- Page section copy and interactions: `dist/app.js`
- Colours and layout: `dist/style.css`
- Page-specific search titles and descriptions: the corresponding HTML file
- Shared page layouts and interactions: `dist/app.js`
- Brand logo: `dist/assets/ana-boutique-logo.svg`
- Gallery and hero images: `dist/assets/`

The current fashion photographs are licensed sample images and are labelled as
inspiration throughout the site. Replace them with ANA Fashion Boutique's own
photographs before publishing.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 4173 --directory dist
```

Then open `http://127.0.0.1:4173`.

## Appointment form

The form validates the visitor's entries and prepares a WhatsApp message. The
visitor must review and send that message in WhatsApp. The site never displays a
successful submission or claims an appointment is confirmed.

If you later want enquiries stored automatically or sent by email, connect the
form to a form service or backend and add the service's privacy/spam settings.
