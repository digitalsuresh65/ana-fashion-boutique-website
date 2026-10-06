const { BOUTIQUE, services, gallery, faq } = window.ANA_CONTENT;
const page = document.body.dataset.page || 'home';
const content = document.querySelector('#content');
const headerBrand = document.querySelector('header .brand');

headerBrand.classList.add('brand-logo-link');
headerBrand.setAttribute('aria-label', 'A&A Fashion Boutique home');
headerBrand.innerHTML = '<img class="brand-logo" src="assets/boutique-logo.png?v=20261006-2" alt="A&amp;A Fashion Boutique logo">';

const serviceMessage = (service) =>
  `https://wa.me/${BOUTIQUE.whatsapp}?text=${encodeURIComponent(`Hello ANA Fashion Boutique, I'd like to enquire about ${service}.`)}`;

const serviceCards = (items = services) => items.map((service, index) => `
  <article class="service-card">
    <span class="number">0${index + 1}</span><h3>${service.title}</h3><p>${service.text}</p>
    <a href="${serviceMessage(service.title)}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
  </article>`).join('');

const galleryCards = (items = gallery) => items.map((item) => {
  const index = gallery.indexOf(item);
  return `<button class="gallery-card" data-category="${item.category}" data-index="${index}" aria-label="Enlarge ${item.title}">
    <span class="gallery-photo"><img src="${item.image}" alt="${item.alt}" loading="lazy" width="1200" height="1800"></span>
    <h3>${item.title}</h3><p>${item.category} · Select to enlarge</p>
  </button>`;
}).join('');

const processSteps = `<div class="process-grid">
  <article class="process-step"><b>01</b><h3>Consultation</h3><p>We listen to your ideas, occasion, preferences and comfort.</p></article>
  <article class="process-step"><b>02</b><h3>Design & Fabric</h3><p>We shape the design and discuss fabric, colour and details.</p></article>
  <article class="process-step"><b>03</b><h3>Measurements</h3><p>We take careful measurements for the intended fit and silhouette.</p></article>
  <article class="process-step"><b>04</b><h3>Stitching & Fittings</h3><p>Your piece is constructed and fitting needs are discussed with you.</p></article>
  <article class="process-step"><b>05</b><h3>Final Delivery</h3><p>After finishing and agreed adjustments, your garment is prepared for collection.</p></article>
</div>`;

const pageHero = (eyebrow, title, text) => `<section class="page-hero"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${text}</p></section>`;
const cta = (title, text, label = 'Book a Consultation') => `<section class="page-cta"><div><p class="eyebrow">BEGIN YOUR ANA DESIGN</p><h2>${title}</h2><p>${text}</p></div><a class="button" href="contact.html">${label}</a></section>`;

const pages = {
  home: `
    <section class="hero"><div class="hero-copy"><p class="eyebrow">MADE FOR YOUR MOMENTS</p><h1>Custom-designed fashion,<br><em>beautifully tailored</em><br>for you.</h1><p>From an everyday favourite to your most special occasion. Thoughtfully designed women’s wear, made around your style and fit in Kumaripati, Lalitpur.</p><div class="actions"><a class="button" href="contact.html">Book a Consultation</a><a class="text-link" href="gallery.html">Explore Our Designs</a></div><span class="hero-note">YOUR STYLE. YOUR FIT. YOUR ANA.</span></div><div class="hero-image"><img src="assets/hero-home.jpg?v=20261006-1" alt="Woman wearing an intricately embroidered red bridal lehenga with a green-trimmed dupatta" fetchpriority="high" width="1800" height="1200"><div class="image-caption">A little detail.<br><em>A lasting impression.</em></div></div></section>
    <div class="ribbon"><span>PERSONAL DESIGN CONSULTATIONS</span><i>✧</i><span>TAILORED TO YOU</span><i>✧</i><span>CRAFTED WITH CARE</span></div>
    <section class="section"><div class="section-head"><div><p class="eyebrow">WHAT WE CREATE</p><h2>Tailoring for every <em>occasion.</em></h2><p class="section-intro">Personal design and careful tailoring for the pieces you want to live in and celebrate in.</p></div><a class="text-link" href="services.html">View all services</a></div><div class="service-grid home-services">${serviceCards(services.slice(0, 3))}</div></section>
    <section class="section home-gallery"><div class="section-head"><div><p class="eyebrow">DESIGN GALLERY</p><h2>A glimpse of the <em>possibilities.</em></h2></div><a class="text-link" href="gallery.html">Explore the gallery</a></div><div class="gallery-grid">${galleryCards(gallery.slice(0, 3))}</div></section>
    <section class="section"><div class="section-head"><div><p class="eyebrow">OUR PROCESS</p><h2>From first idea to <em>final fit.</em></h2></div><a class="text-link" href="process.html">See how it works</a></div>${processSteps}</section>
    ${cta('Have a design in mind?', 'Tell us about your occasion, your fabric or simply the feeling you want your outfit to have.')}`,

  about: `
    ${pageHero('ABOUT ANA', 'Made with care.<br><em>Designed around you.</em>', 'Our boutique brings together thoughtful design, skilled tailoring and personal attention for women in Lalitpur and beyond.')}
    <section class="section"><div class="split"><div class="about-mark" aria-hidden="true"><b>ANA</b><span>FASHION · FIT · FINISH</span></div><div><p class="eyebrow">OUR STORY</p><h2>A personal approach to <em>women’s fashion.</em></h2><p>At ANA Fashion Boutique, we believe the most beautiful garment is one that feels personal. From the first idea to the final fitting, we pay close attention to the way you want to look and feel.</p><p>Based in Kumaripati, Lalitpur, we create custom women’s fashion for everyday confidence, celebrations and bridal moments.</p><p class="editable"><strong>Editable story detail:</strong> Add how the boutique began, who founded it, and the inspiration behind ANA.</p><div class="values"><span>CRAFTSMANSHIP</span><span>PERSONAL ATTENTION</span><span>BEAUTIFUL FIT</span></div></div></div></section>
    <section class="section principles"><p class="eyebrow">WHAT GUIDES US</p><div class="service-grid"><article class="service-card"><span class="number">01</span><h3>Craftsmanship</h3><p>Careful construction and considered finishing give every garment its character.</p></article><article class="service-card"><span class="number">02</span><h3>Personal Attention</h3><p>We listen closely to your ideas, comfort and the occasion you are dressing for.</p></article><article class="service-card"><span class="number">03</span><h3>Fit With Feeling</h3><p>Measurements matter, and so does how the garment makes you feel when you wear it.</p></article></div></section>
    ${cta('Let’s talk about your piece.', 'A consultation is the best place to begin your custom design.')}`,

  services: `
    ${pageHero('OUR SERVICES', 'Made for your style,<br><em>your fit and your moment.</em>', 'Bring an idea, an inspiration image, your fabric or simply the occasion. We’ll help you shape the next step.')}
    <section class="services"><div class="section"><div class="service-grid">${serviceCards()}</div></div></section>
    <section class="section service-note"><div class="split"><div><p class="eyebrow">CUSTOM MEANS PERSONAL</p><h2>A design conversation,<br><em>not a catalogue.</em></h2></div><div><p>Every service begins by understanding what you need. Design details, fabric suitability, measurements, fittings and timing are discussed before the work is confirmed.</p><p>Have something different in mind? Contact us and tell us about it.</p></div></div></section>
    ${cta('Which service can we help with?', 'Choose a service in the appointment form or message us directly on WhatsApp.')}`,

  gallery: `
    ${pageHero('DESIGN GALLERY', 'Explore the <em>possibilities.</em>', 'Browse our blouse, saree, lehenga, occasion and bridal design photographs by category.')}
    <section class="section gallery-page"><div class="filters" role="group" aria-label="Filter gallery">${['All', 'Blouses', 'Sarees', 'Lehengas', 'Dresses', 'Bridal Wear'].map((filter, index) => `<button class="filter" data-filter="${filter}" aria-pressed="${index === 0}">${filter}</button>`).join('')}</div><div class="gallery-grid" aria-live="polite">${galleryCards()}</div></section>
    ${cta('Inspired by something you see?', 'Share the details you love and we can discuss a design made for you.')}`,

  bridal: `
    ${pageHero('BRIDAL WEAR', 'Your vision,<br><em>made personal.</em>', 'A thoughtful design journey for the outfit you will remember long after the celebration.')}
    <section class="bridal"><div class="split"><div><img class="bridal-photo" src="assets/bridal-web.jpg?v=20261006-1" alt="Three women modelling coordinated bridal and occasion outfits" width="1200" height="1800"></div><div class="bridal-copy"><p class="eyebrow">THE BRIDAL EXPERIENCE</p><h2>Designed with you,<br><em>step by step.</em></h2><p>Your bridal outfit deserves time, thought and a close understanding of you. We guide the process from the first design conversation to the finishing touches.</p><ul><li>Personal design consultation</li><li>Fabric and colour selection guidance</li><li>Measurements and planned fittings</li><li>Finishing details considered with care</li></ul><a class="button" href="${serviceMessage('a bridal wear consultation')}" target="_blank" rel="noopener">Enquire About Bridal Wear</a></div></div></section>
    <section class="section"><p class="eyebrow">YOUR CONSULTATION</p><h2>Bring your ideas.<br><em>We’ll shape the details.</em></h2><div class="bridal-points"><article><b>01</b><h3>Your occasion</h3><p>Tell us about your ceremony, events and the moments the outfit is for.</p></article><article><b>02</b><h3>Your direction</h3><p>Share colours, silhouettes, references or traditions that matter to you.</p></article><article><b>03</b><h3>Your fittings</h3><p>We discuss measurements and fitting needs as part of the design plan.</p></article><article><b>04</b><h3>Your finish</h3><p>Details and final adjustments are reviewed before the garment is prepared for delivery.</p></article></div></section>
    ${cta('Begin your bridal consultation.', 'Tell us about your wedding events and the outfit you have in mind.', 'Request a Bridal Consultation')}`,

  process: `
    ${pageHero('OUR PROCESS', 'From first idea to<br><em>final fit.</em>', 'A clear, personal process helps every decision—from silhouette and fabric to fittings and finishing—feel considered.')}
    <section class="section process-page">${processSteps}<div class="process-note"><h3>Timing is discussed individually.</h3><p>The schedule depends on the garment, design complexity, required fittings and current boutique availability. We will discuss an estimated delivery date after understanding your requirements.</p></div></section>
    ${cta('Ready to start the conversation?', 'Book a consultation and tell us what you would like to create.')}`,

  contact: `
    ${pageHero('CONTACT & APPOINTMENTS', 'Let’s create something<br><em>beautiful.</em>', 'Tell us what you have in mind. Your appointment is confirmed only after ANA Fashion Boutique replies.')}
    <section class="section"><div class="contact-layout"><div><h2>Visit or<br><em>get in touch.</em></h2><dl class="contact-details"><div><dt>PHONE</dt><dd><a href="tel:${BOUTIQUE.phoneLink}">${BOUTIQUE.phoneDisplay}</a></dd></div><div><dt>WHATSAPP</dt><dd><a href="https://wa.me/${BOUTIQUE.whatsapp}" target="_blank" rel="noopener">+977 98415 91833</a></dd></div><div><dt>EMAIL</dt><dd><a href="mailto:${BOUTIQUE.email}">${BOUTIQUE.email}</a></dd></div><div><dt>VISIT</dt><dd>${BOUTIQUE.address}</dd></div><div><dt>HOURS</dt><dd>${BOUTIQUE.hours}</dd></div><div><dt>FOLLOW</dt><dd><a href="${BOUTIQUE.instagram}" target="_blank" rel="noopener">Instagram</a></dd></div></dl><p class="editable"><strong>Before publishing:</strong> Add a precise street or landmark, confirm which days the boutique is open, and add any other social profiles.</p></div><form id="appointment-form" action="https://formsubmit.co/${BOUTIQUE.email}" method="POST"><input type="hidden" name="_subject" value="New appointment enquiry — ANA Fashion Boutique"><input type="hidden" name="_template" value="table"><input type="hidden" name="_url" value="https://ana-fashion-boutique-website.vercel.app/contact"><input class="form-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="form-grid"><label>Name <input name="Name" autocomplete="name" required></label><label>Email address <input name="email" type="email" autocomplete="email" required></label><label>WhatsApp / Phone <span class="optional">(optional)</span><input name="WhatsApp or Phone" type="tel" autocomplete="tel" inputmode="tel" pattern="[+0-9 ()-]{7,20}"></label><label>Website <span class="optional">(optional)</span><input name="Website" type="url" autocomplete="url" placeholder="https://example.com"></label><label>Service <select name="Service" required><option value="">Choose a service</option>${services.map(s => `<option>${s.title}</option>`).join('')}</select></label><label>Preferred appointment date <input name="Preferred appointment date" type="date" required></label><label class="full">Message <textarea name="Message" placeholder="Tell us about your occasion, ideas or fabric (optional)"></textarea></label></div><p class="form-note">Your enquiry will be emailed securely to ${BOUTIQUE.email}. This does not make a confirmed booking; the boutique will reply to confirm availability.</p><button class="button" type="submit">Send Appointment Enquiry</button><p class="form-status" role="status" aria-live="polite"></p></form></div></section>
    <section class="faq"><div class="section faq-wrap"><div><p class="eyebrow">GOOD TO KNOW</p><h2>Frequently asked <em>questions.</em></h2><p class="section-intro">Helpful details before you enquire. Policy-specific answers remain marked for review.</p></div><div>${faq.map(item => `<details><summary>${item.q}</summary><p>${item.a}</p></details>`).join('')}</div></div></section>`
};

content.innerHTML = pages[page] || pages.home;
document.querySelector('#footer').innerHTML = `<div class="brand"><span class="monogram">ANA</span><span>FASHION BOUTIQUE<small>KUMARIPATI · LALITPUR</small></span></div><div class="footer-links"><a href="about.html">About</a><a href="services.html">Services</a><a href="gallery.html">Gallery</a><a href="process.html">Process</a><a href="contact.html">Contact</a></div><p>Custom-designed women’s fashion and tailoring in Lalitpur, Nepal.<br>© ${new Date().getFullYear()} ANA Fashion Boutique</p>`;

const footerBrand = document.querySelector('#footer .brand');
footerBrand.outerHTML = '<a class="footer-logo-link" href="index.html" aria-label="A&amp;A Fashion Boutique home"><img class="footer-logo" src="assets/boutique-logo.png?v=20261006-2" alt="A&amp;A Fashion Boutique logo"></a>';

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuButton.textContent = open ? 'Close' : 'Menu';
});
nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.textContent = 'Menu';
  }
});
const currentLink = nav.querySelector(`[data-page="${page}"]`);
if (currentLink) currentLink.setAttribute('aria-current', 'page');

const cards = [...document.querySelectorAll('.gallery-card')];
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => item.setAttribute('aria-pressed', 'false'));
  button.setAttribute('aria-pressed', 'true');
  const filter = button.dataset.filter;
  cards.forEach(card => { card.hidden = filter !== 'All' && card.dataset.category !== filter; });
}));

const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxTitle = document.querySelector('#lightbox-title');
cards.forEach(card => card.addEventListener('click', () => {
  const item = gallery[Number(card.dataset.index)];
  lightboxImage.src = item.image;
  lightboxImage.alt = item.alt;
  lightboxTitle.textContent = item.title;
  lightbox.showModal();
}));
lightbox.querySelector('.close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
progressBar.setAttribute('aria-hidden', 'true');
progressBar.innerHTML = '<span></span>';
document.body.prepend(progressBar);

const progressFill = progressBar.querySelector('span');
const heroPhoto = document.querySelector('.hero-image > img');
let scrollTicking = false;
const updateScrollEffects = () => {
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? Math.min(1, window.scrollY / scrollRange) : 0;
  progressFill.style.transform = `scaleX(${progress})`;
  if (heroPhoto && !reducedMotion) {
    heroPhoto.style.setProperty('--hero-shift', `${-Math.min(18, window.scrollY * 0.025)}px`);
  }
  scrollTicking = false;
};
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(updateScrollEffects);
    scrollTicking = true;
  }
}, { passive: true });
updateScrollEffects();

if (!reducedMotion && 'IntersectionObserver' in window) {
  const revealTargets = [...document.querySelectorAll([
    '.hero-copy > *', '.hero-image', '.page-hero > *', '.section-head > *',
    '.split > *', '.service-card', '.gallery-card', '.process-step',
    '.bridal-points article', '.process-note', '.contact-layout > *',
    '.faq-wrap > *', '.page-cta > div', 'footer > *'
  ].join(','))];

  document.querySelectorAll('.hero-copy, .page-hero, .service-grid, .gallery-grid, .process-grid, .bridal-points').forEach(group => {
    [...group.children].forEach((item, index) => item.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 70}ms`));
  });
  revealTargets.forEach(target => target.classList.add('reveal'));
  document.documentElement.classList.add('motion-ready');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  revealTargets.forEach(target => revealObserver.observe(target));
}

const form = document.querySelector('#appointment-form');
if (form) {
  const dateInput = form.querySelector('input[type="date"]');
  dateInput.min = new Date().toLocaleDateString('en-CA');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const status = form.querySelector('.form-status');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    const formData = new FormData(form);
    const customerName = String(formData.get('Name') || '').trim();
    status.textContent = 'Sending your enquiry securely…';
    status.classList.remove('is-error');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';

    try {
      const response = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });
      const result = await response.json();
      const accepted = response.ok && (result.success === true || result.success === 'true');
      const activationPending = /activat/i.test(String(result.message || ''));
      if (!accepted || activationPending) throw new Error(activationPending ? 'activation' : 'submission');

      const thankYou = document.createElement('div');
      thankYou.className = 'form-thanks';
      thankYou.setAttribute('role', 'status');
      thankYou.setAttribute('tabindex', '-1');
      thankYou.innerHTML = '<span class="thanks-mark" aria-hidden="true">✓</span><p class="eyebrow">ENQUIRY RECEIVED</p><h3>Thank you<span class="thanks-name"></span>.</h3><p>Your enquiry has been accepted for email delivery to our boutique. We’ll review your details and reply by email.</p><p class="thanks-note">Your appointment is confirmed only after the boutique replies.</p><a class="text-link" href="index.html">Return to Home</a>';
      if (customerName) thankYou.querySelector('.thanks-name').textContent = `, ${customerName}`;
      form.reset();
      form.insertAdjacentElement('afterend', thankYou);
      form.hidden = true;
      thankYou.focus({ preventScroll: true });
      thankYou.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
    } catch (error) {
      status.textContent = error.message === 'activation'
        ? 'Email delivery is awaiting one-time FormSubmit activation. Please use WhatsApp for now or try again after activation.'
        : 'We could not send your enquiry. Please check your connection and try again, or contact us on WhatsApp.';
      status.classList.add('is-error');
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}
