/*
  ANA Fashion Boutique content
  ---------------------------------
  Edit service descriptions, FAQ answers, contact details and gallery items
  here. Web-optimized gallery images live in the assets folder; the original
  full-resolution photographs are preserved alongside them.
*/

(() => {
const BOUTIQUE = {
  name: "ANA Fashion Boutique",
  phoneDisplay: "98415 91833",
  phoneLink: "+9779841591833",
  whatsapp: "9779841591833",
  email: "digitalsuresh65@gmail.com",
  address: "Kumaripati, Lalitpur, Nepal",
  hours: "10:00 AM–7:00 PM",
  instagram: "https://www.instagram.com/sureshjoshi4125?stkn=cWhtanNscm9ycW4x",
};

const services = [
  { title: "Custom Blouses", text: "Necklines, sleeves, embroidery details and finishing designed around your saree, occasion and preferred fit." },
  { title: "Saree Styling", text: "Thoughtful customization, blouse pairing and styling guidance to help your saree feel complete and personal." },
  { title: "Lehenga Design", text: "Personalized silhouettes, colours and detail placement for celebrations, wedding events and special occasions." },
  { title: "Dresses", text: "Made-to-measure dresses shaped around your style—from elegant occasion wear to versatile favourites." },
  { title: "Bridal Wear", text: "A personal design journey for bridal outfits, with consultation, fabric guidance, fittings and careful finishing." },
  { title: "Custom Tailoring", text: "Women’s garments tailored from your chosen design or fabric, with attention to proportion, comfort and fit." },
];

const gallery = [
  { title: "Blouse Details", category: "Blouses", image: "assets/blouse-web.jpg?v=20261006-1", alt: "Woman modelling a detailed custom blouse design" },
  { title: "Saree Elegance", category: "Sarees", image: "assets/saree-web.jpg?v=20261006-1", alt: "Woman modelling a red saree with ornate silver embroidery" },
  { title: "Celebration Lehenga", category: "Lehengas", image: "assets/lehenga-web.jpg?v=20261006-1", alt: "Woman modelling a red lehenga with floral and gold embroidery" },
  { title: "Occasion Dressing", category: "Dresses", image: "assets/occasion-web.jpg?v=20261006-1", alt: "Woman modelling a red and gold embroidered occasion dress" },
  { title: "Bridal Collection", category: "Bridal Wear", image: "assets/bridal-web.jpg?v=20261006-1", alt: "Three women modelling coordinated bridal and occasion outfits" },
  { title: "Bridal Silhouette", category: "Bridal Wear", image: "assets/bridal1-web.jpg?v=20261006-1", alt: "Woman modelling a fitted white bridal gown with a flowing skirt" },
];

const faq = [
  { q: "How are measurements taken?", a: "We take measurements during your consultation and discuss how you would like the garment to fit. Please contact us if you need to arrange measurements another way. [Editable: add your remote-measurement policy, if offered.]" },
  { q: "Can I bring my own fabric?", a: "Please bring or tell us about your fabric during the consultation so we can confirm whether it suits the design. [Editable: add your policy for customer-supplied fabrics.]" },
  { q: "Will I need a fitting?", a: "Fittings may be recommended depending on the garment and design. We will discuss the fitting plan with you before stitching begins. [Editable: add your usual fitting policy.]" },
  { q: "How do bridal consultations work?", a: "A bridal consultation covers your ideas, occasion, preferred silhouette, fabric options, details and fitting needs. Contact us to request a suitable consultation time." },
  { q: "How long will my order take?", a: "Timelines depend on the garment, design complexity, fittings and current schedule. We will discuss an estimated delivery date after understanding your requirements; no booking is confirmed until the boutique confirms it." },
];

window.ANA_CONTENT = { BOUTIQUE, services, gallery, faq };
})();
