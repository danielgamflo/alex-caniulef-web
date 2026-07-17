// ---------- NAV SCROLL / PROGRESS BAR ----------
const siteNav = document.getElementById('site-nav');
const siteProgress = document.getElementById('site-progress');

window.addEventListener('scroll', () => {
  siteNav.classList.toggle('scrolled', window.scrollY > 60);
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0;
  siteProgress.style.width = pct + '%';
}, { passive: true });

// ---------- HERO SLIDESHOW ----------
const heroSlides = document.querySelectorAll('.hero-slide');
let activeSlide = 0;

// Solo la primera foto del hero carga de inmediato; el resto entra después
// del primer pintado para no competir por ancho de banda con el LCP.
window.addEventListener('load', () => {
  heroSlides.forEach((slide) => {
    if (slide.dataset.bg) {
      slide.style.backgroundImage = `url('${slide.dataset.bg}')`;
    }
  });
});

setInterval(() => {
  heroSlides[activeSlide].classList.remove('active');
  activeSlide = (activeSlide + 1) % heroSlides.length;
  heroSlides[activeSlide].classList.add('active');
}, 4500);

// ---------- ALBUM DETAIL VIEW ----------
// Edita spotify/youtube aquí para apuntar cada disco a su propio enlace.
const albums = [
  { title: 'Ecos de la Casa', year: '2026', cover: 'assets/site/Ecos-de-la-casa-cover.webp', description: 'El nuevo proyecto de Alex, inspirado en la adoración en comunidad para acompañar a las iglesias de Latinoamérica.', spotify: 'https://open.spotify.com/intl-es/artist/5ZXn7vFAzmZ1ANS4mYHydl', youtube: 'https://www.youtube.com/@AlexCaniulef' },
  { title: 'Sigo en Pie', year: '2022', cover: 'assets/site/Sigo-en-pie-cover.webp', description: 'Un EP nacido de procesos difíciles, donde el pop rock se cruza con canciones para el día a día. Fe y esperanza en medio de la caída, un testimonio de que, pase lo que pase, seguimos de pie.', spotify: 'https://open.spotify.com/intl-es/artist/5ZXn7vFAzmZ1ANS4mYHydl', youtube: 'https://www.youtube.com/@AlexCaniulef', spotifyEmbed: 'https://open.spotify.com/embed/album/18zhIbZI70ePzphsIonFgI?utm_source=generator' },
  { title: 'Viviré Live', year: '2020', cover: 'assets/site/Vivire-Live.webp', description: 'Un registro en vivo de canciones de Mi Dios y Rey, su primer EP. El punto donde Alex comenzó a encontrar su sonido, grabado junto a la comunidad y con la energía de vivir la adoración todos juntos.', spotify: 'https://open.spotify.com/intl-es/artist/5ZXn7vFAzmZ1ANS4mYHydl', youtube: 'https://www.youtube.com/@AlexCaniulef', spotifyEmbed: 'https://open.spotify.com/embed/album/0yRF1waN5QnHvqLVuyvhJG?utm_source=generator' },
  { title: 'Mi Dios y Rey', year: '2015', cover: 'assets/site/Mi-Dios-y-rey-cover.webp', description: 'El primer disco de Alex Caniulef, punto de partida de una propuesta de adoración honesta y cercana.', spotify: 'https://open.spotify.com/intl-es/artist/5ZXn7vFAzmZ1ANS4mYHydl', youtube: 'https://www.youtube.com/@AlexCaniulef', spotifyEmbed: 'https://open.spotify.com/embed/album/3YOABkd5S0KNuY2IC72i6Y?utm_source=generator' },
];

const homeView = document.getElementById('home-view');
const albumView = document.getElementById('album-view');
const albumBack = document.getElementById('album-back');

const albumDetailCover = document.getElementById('album-detail-cover');
const albumDetailYear = document.getElementById('album-detail-year');
const albumDetailTitle = document.getElementById('album-detail-title');
const albumDetailDescription = document.getElementById('album-detail-description');
const albumDetailSpotify = document.getElementById('album-detail-spotify');
const albumDetailYoutube = document.getElementById('album-detail-youtube');
const albumDetailPlayer = document.getElementById('album-detail-player');

document.querySelectorAll('.album-card').forEach((card) => {
  card.addEventListener('click', () => {
    const index = Number(card.dataset.albumIndex);
    if (index === 0) {
      window.ecosOpen();
      return;
    }
    const album = albums[index];
    albumDetailCover.style.backgroundImage = `url('${album.cover}')`;
    albumDetailYear.textContent = album.year;
    albumDetailTitle.textContent = album.title;
    albumDetailDescription.textContent = album.description;
    albumDetailSpotify.href = album.spotify;
    albumDetailYoutube.href = album.youtube;
    albumDetailPlayer.innerHTML = album.spotifyEmbed
      ? `<iframe class="album-spotify-embed" src="${album.spotifyEmbed}" allowfullscreen loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
      : '';

    homeView.hidden = true;
    albumView.hidden = false;
    window.scrollTo(0, 0);
  });
});

albumBack.addEventListener('click', () => {
  albumView.hidden = true;
  homeView.hidden = false;
});

// ---------- CONTACT FORM ----------
const contactForm = document.getElementById('contact-form');
const contactSubmit = document.getElementById('contact-submit');
const contactSuccess = document.getElementById('contact-success');
const contactError = document.getElementById('contact-error');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  contactSubmit.disabled = true;
  contactSubmit.textContent = 'Enviando…';
  contactError.hidden = true;

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(contactForm),
    });
    const json = await res.json();
    if (json.success) {
      contactForm.hidden = true;
      contactSuccess.hidden = false;
    } else {
      contactError.hidden = false;
      contactSubmit.disabled = false;
      contactSubmit.textContent = 'Enviar';
    }
  } catch (err) {
    contactError.hidden = false;
    contactSubmit.disabled = false;
    contactSubmit.textContent = 'Enviar';
  }
});
