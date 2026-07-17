// ============ ECOS DE LA CASA — album experience ============
// Contenido migrado del micrositio original. Las canciones sin fotos/video
// definitivo muestran un bloque de color con "pendiente" — reemplaza esos
// campos (conceptSrc, historiaSrc, moodSrc1-4, videoId, spotifyUrl, lyrics)
// cuando tengas el material final.

const ECOS_PLACEHOLDER = {
  concept: '#E8B923',
  historia: '#D4A017',
  mood: ['#F2CB4E', '#C99A2E', '#EFC13B', '#B98A20'],
};

const ECOS_SONGS = [
  {
    num: '01', accent: '#d4a574', isPrologue: true,
    cardImg: 'assets/ecos-de-la-casa/ecos-prologo.webp', cardLabel: 'Prólogo · Audio & Video',
    title: 'Prólogo', titleHtml: 'Prólogo', artist: 'Alex Caniulef',
    concept: 'Antes de que empiece la música, quiero contarte qué es este proyecto y cómo todo converge en Ecos de la Casa. El inicio del viaje.',
    ctaLabel: 'Ver prólogo',
    videoId: 'AqHDA6uuajw', videoPoster: 'assets/ecos-de-la-casa/ecos-video-cover.webp',
    eyebrow: 'Pista 01', dirLabel: 'Alex Caniulef',
    body: 'Ecos de la Casa nace del deseo de volver a lo esencial: adorar a Jesús con sencillez, como en la mesa o el living de un hogar. Todo comenzó en un departamento, entre amigos que cantaban y oraban. De ahí nace este álbum: versiones en español pensadas para cantarse en comunidad — una invitación a abrir las puertas y dejar que la adoración resuene más allá de una habitación.',
    badge: 'Audio & Video · 1:00', artistSub: 'Duración: 1:00',
    conceptSrc: 'assets/ecos-de-la-casa/concepto-prologo.webp',
  },
  {
    num: '02', accent: '#c4876a',
    cardImg: 'assets/ecos-de-la-casa/cantar-portada.webp', cardLabel: 'Canción',
    title: 'Yo Quiero Cantar de Tu Amor', titleHtml: 'Yo Quiero <br>Cantar de <br>Tu Amor', artist: 'Alex Caniulef',
    concept: 'El desierto es ese lugar donde buscas... y el eco solo te devuelve silencio. Y aun así, hay razones para cantar.',
    ctaLabel: 'Explorar',
    videoId: 'YIfLozUwgBU', videoPoster: 'assets/ecos-de-la-casa/cantar-poster.webp',
    flip: false, eyebrow: 'Canción 02', dirLabel: 'Alex Caniulef',
    body: 'El desierto de Atacama no perdona, pero tampoco olvida. Elegimos grabar ahí porque ningún estudio podía imitar ese silencio absoluto ni esa luz que quema y revela al mismo tiempo. Los colores del Altiplano —el rojo óxido de la roca, el turquesa imposible de las lagunas, el blanco cegador de la sal— tienen un contraste que ninguna postproducción alcanza a fabricar. Es un paisaje que te obliga a callar antes de cantar, y ese vacío se volvió la voz de fondo de esta canción: la certeza de que, incluso en la tierra más árida de Chile, hay una belleza que solo el desierto sabe guardar.',
    badge: 'Adoración · Desierto', artistSub: 'Duración: 3:45',
    historiaPage: 'Pág. 02', historiaText: 'Grabada en los desfiladeros de Salar de Tara y Piedras Rojas, esta canción nace de un lugar de búsqueda espiritual. El desierto como metáfora del silencio divino, donde aprendemos a cantar aun en la sequía.', historiaTag: '#silencio',
    moodHeadlineHtml: 'DESIERTO', moodTagline: 'Arena · Silencio · Fe',
    moodStory: 'Pasadas las Piedras Rojas, casi en la frontera con Argentina, el Altiplano se abre entre murallas de roca volcánica negra y rojiza. A más de 4.300 metros, con el sol pegando fuerte y el viento sin tregua, la Laguna Tuyajto aparecía como un espejo turquesa en medio de la nada — se sentía manejar en otro planeta. Cantar ahí fue otra historia: la altura no perdona, y sostener la voz con el aire que faltaba fue el verdadero desafío detrás de cada toma que Daniel insistía en repetir.',
    playerTitleHtml: 'Yo Quiero Cantar<br>de Tu Amor',
    conceptIsVideo: true, conceptVideoSrc: 'assets/ecos-de-la-casa/concepto-cantar-loop-v2.mp4',
    historiaSrc: 'assets/ecos-de-la-casa/historia-cantar.webp',
    spotifyUrl: 'https://open.spotify.com/embed/track/04NkjPpmSItiji7f7CU5cz?utm_source=generator&theme=0',
    lyrics: 'El mundo busqué y no pudo satisfacerme\nA donde más yo iré\nTu amor es para siempre\nCamino y verdad, tú me guiarás\nY nada nos podrá separar\nTú eres la luz, mi Rey oh Jesús\n\nYo quiero cantar de tu amor\nYo quiero cantar de tu amor\nTus promesas no tienen final\nTú las cumplirás y eso bastará\nYo quiero cantar de tu amor\n\nAl morir pensaste en mí\nAunque yo no lo merecía\nGracias a ti puedo vivir\nUn propósito en mi vida\nCamino y verdad, tú me guiarás\nY nada nos podrá separar\nTú eres la luz, mi Rey oh Jesús\n\nExisten mil razones para estar perdido\nMás tengo un futuro y solo es por Cristo',
    moodSrc1: 'assets/ecos-de-la-casa/mood-cantar-1.webp', moodSrc2: 'assets/ecos-de-la-casa/mood-cantar-2.webp', moodSrc3: 'assets/ecos-de-la-casa/mood-cantar-3.webp', moodSrc4: 'assets/ecos-de-la-casa/mood-cantar-4.webp',
  },
  {
    num: '03', accent: '#b08c5a',
    cardImg: 'assets/ecos-de-la-casa/dios-portada.webp', cardLabel: 'Canción · Feat. Cami Sepúlveda',
    title: 'Dios No Está en Mi Contra', titleHtml: 'Dios No <br>Está en <br>Mi Contra', artist: 'Alex Caniulef & Cami Sepúlveda',
    concept: 'Una declaración de fe en tiempos de incertidumbre. Cuando todo parece estar en contra, la verdad permanece.',
    ctaLabel: 'Explorar',
    videoId: 'L7p13Sn_pzk', videoPoster: 'assets/ecos-de-la-casa/dios-poster.webp',
    flip: true, eyebrow: 'Canción 03', dirLabel: 'Feat. Cami Sepúlveda',
    body: 'Una declaración de fe en tiempos de incertidumbre. La colaboración con Cami Sepúlveda añade una dimensión emocional profunda a este mensaje de confianza inquebrantable.',
    badge: 'Fe · Esperanza', artistSub: 'Feat. Cami Sepúlveda',
    historiaPage: 'Pág. 03', historiaText: 'Esta canción surge de la convicción de que incluso en nuestros momentos más oscuros, Dios no está en contra nuestro. Es un himno de confianza, de rendición, de fe inquebrantable. La voz de Cami añade una dimensión emocional profunda.', historiaTag: '#declaración',
    moodHeadlineHtml: 'CON-<br>FIANZA', moodTagline: 'Fe · Rendición · Certeza',
    playerTitleHtml: 'Dios No Está<br>en Mi Contra',
    spotifyUrl: 'https://open.spotify.com/embed/track/6K8GOkxxQUUcZTG4pNT39l?utm_source=generator&theme=0',
    lyrics: 'Tú dices que soy valiente\nCuando no creo en mí\nAunque podías dejarme\nMe acercaste a ti\n\nDices que voy a lograrlo\nCuando me cuesta creer\nEn medio de mi batalla\nEn ti confiaré\n\nEstás conmigo\nEstás obrando\nY peleando\nDios no está en mi contra\n\nUna revelación nueva\nMi amigo es mi Salvador\nAntes peleaba yo solo\nPero ahora ya no\n\nTengo un poder más grande\nQue lo que yo pueda enfrentar\nLa verdad del Evangelio\nConmigo estás\nConmigo estás\n\nLa batalla tú\nPor mí pelearás\nMi protección\nEn ti puedo confiar\nMi amigo fiel\nConmigo estarás\nMi protección\nEn ti puedo confiar',
  },
  {
    num: '04', accent: '#9aacac', noPhoto: true,
    cardLabel: 'Interludio',
    title: 'Roca Firme', titleHtml: 'Roca<br>Firme', artist: 'Alex Caniulef',
    concept: 'Un momento de quietud. Un interludio instrumental que invita a la reflexión y al descanso espiritual.',
    ctaLabel: 'Explorar',
    eyebrow: 'Interludio 04', dirLabel: 'Alex Caniulef',
    body: 'Los interludios en "Ecos de la Casa" funcionan como pausas contemplativas. "Roca Firme" es una invitación a descansar, a encontrar estabilidad. Piano ambiental y texturas de sintetizador crean un espacio de silencio.',
    badge: 'Instrumental · Contemplación', artistSub: 'Duración: 2:30',
    playerTitleHtml: 'Roca Firme<br>(Interludio)',
    spotifyUrl: 'https://open.spotify.com/embed/track/37aiBLuOQFT41NOCPtb31C?utm_source=generator&theme=0',
    lyrics: 'Aún en tormenta\nNada me moverá\nAnclado en Cristo\nSé que me sostendrá\n\nCristo mi roca firme\nAnclado estoy en Él\nAunque todo esté perdido\nFeliz siempre estaré\n\nPongo mi fe en Cristo\nÉl nunca fallará\nFiel por generaciones\nPor qué me ha de fallar',
  },
  {
    num: '05', accent: '#c8a040',
    cardImg: 'assets/ecos-de-la-casa/digno-de-mi-doracion.webp', cardLabel: 'Canción · Feat. Israel Oñate',
    title: 'Digno de Adoración', titleHtml: 'Digno de <br>Adoración', artist: 'Alex Caniulef & Israel Oñate',
    concept: 'Una explosión de adoración genuina. Israel suma su voz para declarar la dignidad de Dios, en armonía y unidad espiritual.',
    ctaLabel: 'Explorar',
    videoId: null, videoPoster: 'assets/ecos-de-la-casa/digno-de-mi-doracion.webp', comingSoon: true,
    flip: true, eyebrow: 'Canción 05', dirLabel: 'Feat. Israel Oñate',
    body: 'Traducida de Elevation Español Worship, esta versión local con Israel Oñate representa la voz congregacional. Un himno que invita a la adoración corporativa donde toda comunidad puede unirse sin reservas.',
    badge: 'Adoración Corporativa', artistSub: 'Feat. Israel Oñate',
    historiaPage: 'Pág. 05', historiaText: 'Israel colaboró en la traducción y adaptación de esta canción, asegurando autenticidad cultural y espiritual. La armonía entre las voces refleja la unidad del cuerpo de Cristo, un llamado a adorar juntos.', historiaTag: '#adoración',
    moodHeadlineHtml: 'DIGNIDAD', moodTagline: 'Comunidad · Unidad · Gloria',
    playerTitleHtml: 'Digno de<br>Adoración',
    spotifyUrl: 'https://open.spotify.com/embed/track/3whnBVGEI3Bis9fTAoVQUL?utm_source=generator&theme=0',
    lyrics: 'Hoy tú me despertaste\nY mi copa rebosaste\nBendiciones me entregaste\nTe doy mi adoración\n\nEscribiste mi historia\nY te quiero dar la gloria\nPor tu gran misericordia\nTe doy mi adoración\n\nDigno\nDe mi adoración\nDe mi adoración eres\nDigno de mi adoración\nEres digno de adoración\n\nLa carrera no se acaba\nPero nada me hace falta\nPorque me basta tu gracia\nTe doy mi adoración\n\nAhora vivo perdonado\nUn futuro me has dado\nEres Dios de los milagros\nTe doy mi adoración\n\nCuando pienso en tu bondad\nCuando pienso en lo que has hecho Dios\nCuando pienso en tu amor\nTan agradecido estoy Señor\n\nPor las puertas que abriste\nPor el precio que pagaste\nPor la gracia que me diste\nTe doy mi adoración',
  },
  {
    num: '06', accent: '#a8929a', noPhoto: true,
    cardLabel: 'Interludio',
    title: 'Digno de Mi Adoración', titleHtml: 'Digno de<br>Mi Adoración', artist: 'Alex Caniulef',
    concept: 'Del clamor corporativo al susurro personal. Del "nosotros" al "yo", del colectivo a lo individual.',
    ctaLabel: 'Explorar',
    eyebrow: 'Interludio 06', dirLabel: 'Reflexión Personal',
    body: 'Este interludio marca un giro en la narrativa del álbum. Pasamos del "nosotros adoramos" al "yo adoro". Una invitación a la intimidad personal con Dios y a aceptar la responsabilidad individual en la adoración.',
    badge: 'Íntimo · Personal', artistSub: 'Duración: 3:15',
    playerTitleHtml: 'Digno de Mi<br>Adoración',
    spotifyUrl: 'https://open.spotify.com/embed/track/1Gbt39w0pDm8aMncSvWYib?utm_source=generator&theme=0',
    lyrics: 'Digno de mi adoración\nDigno de mi adoración\nTodo viene de ti\nY todo es para ti\nTú mereces gloria',
  },
  {
    num: '07', accent: '#c49a7a',
    cardImg: 'assets/ecos-de-la-casa/gratitud-portada.webp', cardLabel: 'Canción Final',
    title: 'Gratitud', titleHtml: 'Gratitud', artist: 'Alex Caniulef',
    concept: 'La culminación del viaje. Un cántico de agradecimiento que cierra el álbum con esperanza y paz. El eco de la casa se convierte en un abrazo.',
    ctaLabel: 'Explorar',
    videoId: 'B5qPHJ_eWCE', videoPoster: 'assets/ecos-de-la-casa/gratitud-poster.webp',
    flip: true, eyebrow: 'Canción Final 07', dirLabel: 'Alex Caniulef',
    body: 'Gratitud es la conclusión narrativa de "Ecos de la Casa". Grabada en el Salto del Mili Mili, al sur de Chile, esta canción cierra el recorrido: después de la búsqueda, la declaración de fe, la adoración y la intimidad, llegamos a un lugar de agradecimiento simple, profundo y verdadero.',
    badge: 'Cierre · Paz · Gratitud', artistSub: 'Duración: 4:08',
    historiaPage: 'Pág. 07', historiaText: 'Grabada en el Salto del Mili Mili, al sur de Chile, en un momento de quietud. La canción captura el sonido del agua y el bosque, el silencio que sigue a la tormenta, la paz que solo viene después del viaje.', historiaTag: '#gratitud',
    moodHeadlineHtml: 'GRATI-<br>TUD', moodTagline: 'Cierre · Esperanza · Abrazo',
    playerTitleHtml: 'Gratitud',
    spotifyUrl: 'https://open.spotify.com/embed/track/1N624pcSy9UkkyKiKzeUYA?utm_source=generator&theme=0',
    lyrics: 'Que puedo decir\nNada nuevo hay\nQue pueda expresarte\nMi gratitud\n\nY es que una canción\nLlega a su fin\nPero tú mi Dios\nNunca lo harás\n\nMis manos alzaré\nTe alabo una y otra vez\nTodo lo que tengo es un\nAleluya, aleluya\nSé que mucho no es\nNada hay en mí para un Rey\nSolo mi alma que canta\nAleluya, aleluya\n\nUna cosa sé\nY eso es lo que haré\nCon brazos abiertos\nTe alabaré\n\nVamos corazón\nNo tengas miedo y levanta tu voz\nComo un león ruge en tu adoración\nLevántate y alaba al Señor',
  },
];

function ecosMedia(src, placeholderText, placeholderBg) {
  if (src) return `<img src="${src}" alt="" loading="lazy">`;
  return `<div class="ecos-placeholder" style="background:${placeholderBg}">${placeholderText}</div>`;
}

function ecosVideoBlock({ headLabel, headSub, frameClass, posterSrc, videoSrc, comingSoon }) {
  const posterInner = comingSoon
    ? `<div class="ecos-comingsoon-badge">
         <span class="label" style="color:var(--song-accent)">Videoclip</span>
         <span class="title">Próximamente</span>
         <span class="sub">En producción</span>
       </div>`
    : `<div class="ecos-play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg></div>`;

  return `
    <div class="ecos-video-block">
      <div class="ecos-video-block-head" style="color:var(--song-accent)">
        <span>${headLabel}</span><span>${headSub}</span>
      </div>
      <div class="ecos-video-frame ${frameClass}" data-video-src="${videoSrc || ''}">
        <div class="ecos-video-poster ${comingSoon ? 'coming-soon' : ''}">
          <img src="${posterSrc}" alt="" loading="lazy">
          <div class="ecos-video-overlay">${posterInner}</div>
        </div>
      </div>
    </div>`;
}

function ecosSongCardHTML(song, i) {
  if (song.noPhoto) {
    return `
      <button type="button" class="ecos-song-card no-photo-card" data-song-index="${i}" aria-expanded="false">
        <div class="ecos-song-bar-content">
          <div class="ecos-song-bar-text">
            <span class="ecos-song-bar-label" style="color:${song.accent}">${song.cardLabel}</span>
            <h2 class="ecos-song-bar-title">${song.title}</h2>
            <p class="ecos-song-bar-artist">${song.artist}</p>
          </div>
          <p class="ecos-song-bar-concept" style="border-color:${song.accent}">${song.concept}</p>
          <div class="ecos-song-cta" style="--cta-accent:${song.accent}">
            ${song.ctaLabel} &nbsp;<span class="ecos-song-cta-arrow">↓</span>
          </div>
        </div>
      </button>`;
  }
  return `
    <button type="button" class="ecos-song-card" data-song-index="${i}" aria-expanded="false">
      <div class="ecos-song-card-media">${ecosMedia(song.cardImg, '', '#333')}</div>
      <div class="ecos-song-card-content">
        <div class="ecos-song-top">
          <span class="ecos-song-num">${song.num}</span>
          <span class="ecos-song-credit">Ecos de la Casa<br>Alex Caniulef</span>
        </div>
        <div class="ecos-song-bottom">
          <span class="ecos-song-label" style="color:${song.accent}">${song.cardLabel}</span>
          <h2 class="ecos-song-title">${song.titleHtml}</h2>
          <p class="ecos-song-artist">${song.artist}</p>
          <p class="ecos-song-concept" style="border-color:${song.accent}">${song.concept}</p>
          <div class="ecos-song-cta" style="--cta-accent:${song.accent}">
            ${song.ctaLabel} &nbsp;<span class="ecos-song-cta-arrow">↓</span>
          </div>
        </div>
      </div>
    </button>`;
}

function ecosConceptBlockHTML(song) {
  const media = song.conceptIsVideo
    ? `<video src="${song.conceptVideoSrc}" autoplay muted loop playsinline></video>`
    : ecosMedia(song.conceptSrc, 'Foto — concepto pendiente', ECOS_PLACEHOLDER.concept);

  const imageOrder = song.flip ? 2 : 1;
  const textOrder = song.flip ? 1 : 2;
  const cols = song.flip ? '55% 45%' : '45% 55%';

  return `
    <div class="ecos-concept-grid" data-stack-mobile style="grid-template-columns:${cols}">
      <div class="ecos-concept-media" style="order:${imageOrder}">${media}</div>
      <div class="ecos-concept-text" style="order:${textOrder}">
        <div class="ecos-concept-text-top">
          <span class="ecos-concept-eyebrow" style="color:${song.accent}">${song.eyebrow}</span>
          <span class="ecos-concept-dir">${song.dirLabel}</span>
        </div>
        <div class="ecos-concept-mid">
          <h2>CONCEPTO</h2>
          <p class="ecos-concept-body">${song.body}</p>
        </div>
        <div class="ecos-concept-bottom">
          <div class="ecos-badge" style="--badge-accent:${song.accent}">${song.badge}</div>
          <div class="ecos-concept-credit">
            <strong>Alex Caniulef</strong>
            <span>${song.artistSub}</span>
          </div>
        </div>
      </div>
    </div>`;
}

function ecosHistoriaBlockHTML(song) {
  return `
    <div class="ecos-historia">
      <div class="ecos-historia-media">${ecosMedia(song.historiaSrc, 'Foto — la historia detrás pendiente', ECOS_PLACEHOLDER.historia)}</div>
      <div class="ecos-historia-overlay">
        <div class="ecos-historia-top"><span>Ecos de la Casa · ${song.historiaPage}</span><span>La Historia</span></div>
        <div class="ecos-historia-text"><p>${song.historiaText}</p></div>
        <div class="ecos-historia-tag" style="color:${song.accent}">${song.historiaTag}</div>
      </div>
    </div>`;
}

function ecosMoodBlockHTML(song) {
  const imageOrder = song.flip ? 2 : 1;
  const textOrder = song.flip ? 1 : 2;
  const mosaic = [1, 2, 3, 4].map((n, idx) =>
    ecosMedia(song['moodSrc' + n], 'Foto de mood pendiente', ECOS_PLACEHOLDER.mood[idx])
  ).join('');
  const story = song.moodStory ? `<p class="ecos-mood-story">${song.moodStory}</p>` : '';

  return `
    <div class="ecos-mood-grid" data-stack-mobile>
      <div class="ecos-mood-media" style="order:${imageOrder}">
        <div class="ecos-mood-mosaic">${mosaic}</div>
      </div>
      <div class="ecos-mood-text" style="order:${textOrder}">
        <span class="ecos-mood-eyebrow" style="color:${song.accent}">Mood &amp; Tone</span>
        <h2>${song.moodHeadlineHtml}</h2>
        <span class="ecos-mood-tagline">${song.moodTagline}</span>
        ${story}
      </div>
    </div>`;
}

function ecosEscucharBlockHTML(song) {
  const hasSpotify = !!song.spotifyUrl;
  const hasLyrics = !!song.lyrics;

  if (!hasSpotify && !hasLyrics) {
    return `
      <div class="ecos-escuchar" style="--song-accent:${song.accent}">
        <span class="ecos-escuchar-eyebrow" style="color:${song.accent}">Escuchar</span>
        <div class="ecos-escuchar-title">${song.playerTitleHtml}</div>
        <div class="ecos-escuchar-pending">Streaming y letra disponibles próximamente</div>
      </div>`;
  }

  const cols = hasSpotify && hasLyrics ? 'cols-2' : 'cols-1';
  const spotify = hasSpotify
    ? `<iframe class="ecos-spotify-embed" src="${song.spotifyUrl}" allowfullscreen loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    : '';
  const lyrics = hasLyrics
    ? `<div class="ecos-lyrics-box">
         <span class="ecos-lyrics-label" style="color:${song.accent}">Letra</span>
         <div class="ecos-lyrics-scroll"><p>${song.lyrics}</p></div>
       </div>`
    : '';

  return `
    <div class="ecos-escuchar" style="--song-accent:${song.accent}">
      <span class="ecos-escuchar-eyebrow" style="color:${song.accent}">Escuchar</span>
      <div class="ecos-escuchar-title">${song.playerTitleHtml}</div>
      <div class="ecos-escuchar-grid ${cols}">${spotify}${lyrics}</div>
    </div>`;
}

function ecosPlayerHTML(song) {
  if (!song.audioSrc) {
    return `
      <div class="ecos-player ecos-player-pending">
        <div class="ecos-player-toggle disabled">▶</div>
        <div class="ecos-player-body">
          <div class="ecos-player-bar"><div class="ecos-player-bar-fill"></div></div>
          <div class="ecos-player-time"><span>Audio pendiente de subir</span></div>
        </div>
      </div>`;
  }
  return `
    <div class="ecos-player">
      <audio class="ecos-player-audio" src="${song.audioSrc}" preload="metadata"></audio>
      <button type="button" class="ecos-player-toggle" style="--player-accent:${song.accent}" aria-label="Reproducir">▶</button>
      <div class="ecos-player-body">
        <div class="ecos-player-bar" data-seek>
          <div class="ecos-player-bar-fill" style="background:${song.accent}"></div>
        </div>
        <div class="ecos-player-time"><span class="ecos-player-current">0:00</span><span class="ecos-player-duration">0:00</span></div>
      </div>
    </div>`;
}

function ecosPlayerEscucharHTML(song) {
  const lyrics = song.lyrics
    ? `<div class="ecos-lyrics-box">
         <span class="ecos-lyrics-label" style="color:${song.accent}">Letra</span>
         <div class="ecos-lyrics-scroll"><p>${song.lyrics}</p></div>
       </div>`
    : `<div class="ecos-lyrics-box ecos-lyrics-pending">
         <span class="ecos-lyrics-label" style="color:${song.accent}">Letra</span>
         <div class="ecos-lyrics-scroll"><p>Letra pendiente de subir.</p></div>
       </div>`;

  return `
    <div class="ecos-escuchar" style="--song-accent:${song.accent}">
      <span class="ecos-escuchar-eyebrow" style="color:${song.accent}">Escuchar</span>
      <div class="ecos-escuchar-title">${song.playerTitleHtml}</div>
      <div class="ecos-escuchar-grid cols-2">
        ${ecosPlayerHTML(song)}
        ${lyrics}
      </div>
    </div>`;
}

function ecosSongDetailHTML(song, i) {
  if (song.noPhoto) {
    return `
      <div class="ecos-detail" style="--song-accent:${song.accent}">
        <div class="ecos-detail-header">
          <span class="ecos-detail-label" style="color:${song.accent}">${String(i + 1).padStart(2, '0')} · ${song.title}</span>
          <button type="button" class="ecos-detail-close" data-close-song style="--dot-accent:${song.accent}">✕</button>
        </div>
        <div class="ecos-detail-body">
          ${ecosConceptBlockHTML(song)}
          ${ecosEscucharBlockHTML(song)}
        </div>
      </div>`;
  }

  const videoSrc = song.videoId
    ? `https://www.youtube.com/embed/${song.videoId}?autoplay=1&rel=0&modestbranding=1&color=white`
    : '';

  const prologueVideo = song.isPrologue
    ? ecosVideoBlock({
        headLabel: 'Prólogo — Ecos de la Casa', headSub: 'Alex Caniulef · 1:00',
        frameClass: '', posterSrc: song.videoPoster, videoSrc, comingSoon: false,
      })
    : '';

  const fullDetails = !song.isPrologue
    ? `${ecosHistoriaBlockHTML(song)}
       ${ecosMoodBlockHTML(song)}
       ${ecosVideoBlock({
         headLabel: 'Videoclip oficial', headSub: song.title, frameClass: 'ratio-16-9',
         posterSrc: song.videoPoster, videoSrc, comingSoon: !!song.comingSoon,
       })}
       ${ecosEscucharBlockHTML(song)}`
    : '';

  return `
    <div class="ecos-detail" style="--song-accent:${song.accent}">
      <div class="ecos-detail-header">
        <span class="ecos-detail-label" style="color:${song.accent}">${String(i + 1).padStart(2, '0')} · ${song.title}</span>
        <button type="button" class="ecos-detail-close" data-close-song style="--dot-accent:${song.accent}">✕</button>
      </div>
      <div class="ecos-detail-body">
        ${ecosConceptBlockHTML(song)}
        ${prologueVideo}
        ${fullDetails}
      </div>
    </div>`;
}

function ecosFooterHTML() {
  return `
    <footer class="ecos-footer" id="ecos-footer">
      <div class="ecos-footer-links">
        <a class="ecos-footer-link-btn" href="https://open.spotify.com/intl-es/artist/5ZXn7vFAzmZ1ANS4mYHydl" target="_blank" rel="noopener">♪ &nbsp;Spotify</a>
        <a class="ecos-footer-link-btn" href="https://music.apple.com/us/artist/alex-caniulef/1314296522" target="_blank" rel="noopener">♫ &nbsp;Apple Music</a>
        <a class="ecos-footer-link-btn" href="https://www.youtube.com/@AlexCaniulef" target="_blank" rel="noopener">▶ &nbsp;YouTube</a>
      </div>
      <div class="ecos-footer-divider"></div>
      <div class="ecos-footer-grid">
        <div>
          <span class="ecos-footer-col-label">Créditos</span>
          <div class="ecos-footer-item">
            <span class="ecos-footer-item-label">Dirección Creativa</span>
            <span class="ecos-footer-item-value">Daniel Gamboa</span>
          </div>
          <div class="ecos-footer-item" style="margin-bottom:0">
            <span class="ecos-footer-item-label">Colaboradores</span>
            <span class="ecos-footer-item-value">Israel Oñate — Voz y Traducción</span>
            <span class="ecos-footer-item-value">Cami Sepúlveda — Voz</span>
            <span class="ecos-footer-item-value">David Vidal — Producción Musical</span>
          </div>
        </div>
        <div>
          <span class="ecos-footer-col-label">Contacto</span>
          <a class="ecos-footer-contact-link" href="https://instagram.com/alexcaniulefmusic" target="_blank" rel="noopener">
            <span class="ecos-footer-item-label">Instagram</span>
            <span class="value">@alexcaniulefmusic</span>
          </a>
          <a class="ecos-footer-contact-link" href="mailto:alex.caniulef@gmail.com" style="margin-bottom:0">
            <span class="ecos-footer-item-label">Correo</span>
            <span class="value">alex.caniulef@gmail.com</span>
          </a>
        </div>
      </div>
      <div class="ecos-footer-divider"></div>
      <div class="ecos-footer-bottom">
        <span>© 2026 Alex Caniulef</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>`;
}

function ecosBuildMarkup() {
  const songsHTML = ECOS_SONGS.map((song, i) => `
    <section class="ecos-song" id="ecos-song-${i}" style="--song-accent:${song.accent}">
      ${ecosSongCardHTML(song, i)}
      ${ecosSongDetailHTML(song, i)}
    </section>`).join('');

  return `
    <div class="ecos-progress" id="ecos-progress"></div>
    <header class="ecos-header" id="ecos-header">
      <div class="ecos-header-left">
        <button type="button" class="ecos-back" id="ecos-back">← Volver</button>
        <a href="#" class="ecos-logo" id="ecos-logo-home">
          <img src="assets/logo-alex.png" alt="Alex Caniulef">
        </a>
      </div>
    </header>

    <nav class="ecos-navdots" id="ecos-navdots"></nav>

    <section class="ecos-hero" id="ecos-hero">
      <div class="ecos-hero-media"><img id="ecos-hero-img" src="assets/ecos-de-la-casa/Portada_Ecos_de_la_Casa_Limpia.webp" alt="Ecos de la Casa"></div>
      <img class="ecos-hero-logo" src="assets/ecos-de-la-casa/Logo-Efecto-Ecos-de-la-Casa-blanco.png" alt="Ecos de la Casa">
      <div class="ecos-hero-watermark">Ecos</div>
      <div class="ecos-hero-content">
        <div class="ecos-hero-info">
          <span class="ecos-hero-eyebrow">Álbum de Adoración</span>
          <p class="ecos-hero-tagline">7 Canciones · Grabado entre paisajes y hogares de Chile</p>
          <button type="button" class="ecos-hero-cta" id="ecos-scroll-first">Explorar el álbum &nbsp;<span>↓</span></button>
        </div>
      </div>
      <div class="ecos-scroll-hint">Scroll<div class="ecos-scroll-hint-line"></div></div>
    </section>

    <div>${songsHTML}</div>

    ${ecosFooterHTML()}`;
}

// ---------- wiring ----------
let ecosBuilt = false;
let ecosScrollHandler = null;
let ecosKeydownHandler = null;

function ecosFormatTime(sec) {
  if (!isFinite(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function ecosPauseAudioIn(scopeEl) {
  scopeEl.querySelectorAll('.ecos-player-audio').forEach((audio) => {
    audio.pause();
    const btn = audio.closest('.ecos-player').querySelector('.ecos-player-toggle');
    if (btn) { btn.textContent = '▶'; btn.classList.remove('playing'); }
  });
}

function ecosInit() {
  if (ecosBuilt) return;
  ecosBuilt = true;

  const view = document.getElementById('ecos-view');
  view.innerHTML = ecosBuildMarkup();

  const header = document.getElementById('ecos-header');
  const progress = document.getElementById('ecos-progress');
  const navdots = document.getElementById('ecos-navdots');
  const heroImg = document.getElementById('ecos-hero-img');
  const parallaxEls = view.querySelectorAll('.ecos-song-card-media img, .ecos-song-card-media .ecos-placeholder');

  const sectionIds = ['ecos-hero', ...ECOS_SONGS.map((_, i) => 'ecos-song-' + i), 'ecos-footer'];
  sectionIds.forEach((id, i) => {
    const dot = document.createElement('div');
    dot.className = 'ecos-navdot';
    dot.dataset.targetId = id;
    dot.addEventListener('click', () => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
    navdots.appendChild(dot);
  });
  const dotEls = navdots.querySelectorAll('.ecos-navdot');

  document.getElementById('ecos-back').addEventListener('click', ecosClose);
  document.getElementById('ecos-logo-home').addEventListener('click', (e) => {
    e.preventDefault();
    ecosClose();
  });
  document.getElementById('ecos-scroll-first').addEventListener('click', () => {
    document.getElementById('ecos-song-0').scrollIntoView({ behavior: 'smooth' });
  });

  // song card open/close (single-expand)
  view.addEventListener('click', (e) => {
    const card = e.target.closest('.ecos-song-card');
    if (card) {
      const section = card.closest('.ecos-song');
      const willOpen = !section.classList.contains('open');
      view.querySelectorAll('.ecos-song.open').forEach((el) => {
        if (el !== section) { el.classList.remove('open'); ecosPauseAudioIn(el); }
      });
      if (!willOpen) ecosPauseAudioIn(section);
      section.classList.toggle('open', willOpen);
      card.setAttribute('aria-expanded', String(willOpen));
      document.body.style.overflow = view.querySelector('.ecos-song.open') ? 'hidden' : '';
      return;
    }
    const closeBtn = e.target.closest('[data-close-song]');
    if (closeBtn) {
      const section = closeBtn.closest('.ecos-song');
      ecosPauseAudioIn(section);
      section.classList.remove('open');
      document.body.style.overflow = view.querySelector('.ecos-song.open') ? 'hidden' : '';
      return;
    }
    const poster = e.target.closest('.ecos-video-poster:not(.coming-soon)');
    if (poster) {
      const frame = poster.closest('.ecos-video-frame');
      const src = frame.dataset.videoSrc;
      if (src) {
        frame.innerHTML = `<iframe src="${src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }
      return;
    }
    const playerToggle = e.target.closest('.ecos-player-toggle:not(.disabled)');
    if (playerToggle) {
      const audio = playerToggle.closest('.ecos-player').querySelector('.ecos-player-audio');
      if (audio.paused) {
        view.querySelectorAll('.ecos-player-audio').forEach((a) => { if (a !== audio) a.pause(); });
        view.querySelectorAll('.ecos-player-toggle.playing').forEach((b) => {
          if (b !== playerToggle) { b.textContent = '▶'; b.classList.remove('playing'); }
        });
        audio.play();
        playerToggle.textContent = '⏸';
        playerToggle.classList.add('playing');
      } else {
        audio.pause();
        playerToggle.textContent = '▶';
        playerToggle.classList.remove('playing');
      }
      return;
    }
    const seekBar = e.target.closest('.ecos-player-bar[data-seek]');
    if (seekBar) {
      const audio = seekBar.closest('.ecos-player').querySelector('.ecos-player-audio');
      if (audio && isFinite(audio.duration) && audio.duration > 0) {
        const rect = seekBar.getBoundingClientRect();
        const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        audio.currentTime = ratio * audio.duration;
      }
    }
  });

  // audio progress/duration (media events don't bubble, use capture phase)
  view.addEventListener('timeupdate', (e) => {
    if (!e.target.classList || !e.target.classList.contains('ecos-player-audio')) return;
    const audio = e.target;
    const player = audio.closest('.ecos-player');
    const fill = player.querySelector('.ecos-player-bar-fill');
    const current = player.querySelector('.ecos-player-current');
    if (isFinite(audio.duration) && audio.duration > 0) {
      fill.style.width = (audio.currentTime / audio.duration * 100) + '%';
    }
    if (current) current.textContent = ecosFormatTime(audio.currentTime);
  }, true);

  view.addEventListener('loadedmetadata', (e) => {
    if (!e.target.classList || !e.target.classList.contains('ecos-player-audio')) return;
    const player = e.target.closest('.ecos-player');
    const duration = player.querySelector('.ecos-player-duration');
    if (duration) duration.textContent = ecosFormatTime(e.target.duration);
  }, true);

  view.addEventListener('ended', (e) => {
    if (!e.target.classList || !e.target.classList.contains('ecos-player-audio')) return;
    const player = e.target.closest('.ecos-player');
    const toggle = player.querySelector('.ecos-player-toggle');
    if (toggle) { toggle.textContent = '▶'; toggle.classList.remove('playing'); }
  }, true);

  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  let ecosScrollTicking = false;

  const runScrollUpdate = () => {
    ecosScrollTicking = false;
    const vh = window.innerHeight;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - vh;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    progress.style.width = pct + '%';
    header.classList.toggle('scrolled', scrollTop > 60);

    if (heroImg) {
      const r = heroImg.parentElement.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const offset = Math.max(-90, Math.min(90, ((center - vh / 2) / vh) * 140));
      heroImg.style.transform = `translateY(${offset}px)`;
    }
    parallaxEls.forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const offset = Math.max(-60, Math.min(60, ((center - vh / 2) / vh) * 130));
      el.style.transform = `translateY(${offset}px)`;
    });

    const centerY = scrollTop + vh / 2;
    let current = 0;
    sections.forEach((sec, i) => {
      if (centerY >= sec.offsetTop && centerY < sec.offsetTop + sec.offsetHeight) current = i;
    });
    dotEls.forEach((dot, i) => dot.classList.toggle('active', i === current));
  };

  ecosScrollHandler = () => {
    if (!ecosScrollTicking) {
      ecosScrollTicking = true;
      requestAnimationFrame(runScrollUpdate);
    }
  };

  ecosKeydownHandler = (e) => {
    if (e.key === 'Escape') {
      const open = view.querySelector('.ecos-song.open');
      if (open) {
        ecosPauseAudioIn(open);
        open.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  };
}

function ecosOpen() {
  ecosInit();
  document.getElementById('home-view').hidden = true;
  document.getElementById('site-nav').hidden = true;
  document.getElementById('site-progress').hidden = true;
  document.getElementById('ecos-view').hidden = false;
  window.scrollTo(0, 0);
  window.addEventListener('scroll', ecosScrollHandler, { passive: true });
  window.addEventListener('keydown', ecosKeydownHandler);
  ecosScrollHandler();
}

function ecosClose() {
  const view = document.getElementById('ecos-view');
  ecosPauseAudioIn(view);
  view.querySelectorAll('.ecos-song.open').forEach((el) => el.classList.remove('open'));
  document.body.style.overflow = '';
  window.removeEventListener('scroll', ecosScrollHandler);
  window.removeEventListener('keydown', ecosKeydownHandler);
  view.hidden = true;
  document.getElementById('site-nav').hidden = false;
  document.getElementById('site-progress').hidden = false;
  document.getElementById('home-view').hidden = false;
  window.scrollTo(0, 0);
}

window.ecosOpen = ecosOpen;
