(() => {
  const P = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const deck = $('#deck');
  const slides = $$('.slide');
  const isPhone = () => matchMedia('(max-width: 820px)').matches;

  /* ---------- tiles + lightbox ---------- */
  function tile(img, caption, extra = {}) {
    const b = document.createElement('button');
    b.className = 'tile' + (extra.cls ? ' ' + extra.cls : '');
    b.type = 'button';
    b.dataset.full = `assets/work/${img}.webp`;
    b.dataset.caption = caption || '';
    if (extra.data) Object.assign(b.dataset, extra.data);
    b.innerHTML = `<img src="assets/thumb/${img}.webp" alt="${caption || ''}" loading="lazy" decoding="async">` +
      (extra.cap !== false && caption ? `<span class="cap">${extra.capHtml || caption}</span>` : '');
    return b;
  }

  const lb = $('#lightbox'), lbImg = $('#lbImg'), lbCap = $('#lbCap');
  let lbList = [], lbIndex = 0;
  function openLightbox(t) {
    const group = t.parentElement;
    lbList = $$('.tile', group).filter(x => !x.classList.contains('is-hidden'));
    lbIndex = lbList.indexOf(t);
    showLb();
    lb.hidden = false;
    $('.lb-close', lb).focus();
  }
  function showLb() {
    const t = lbList[lbIndex];
    lbImg.src = t.dataset.full;
    lbImg.alt = lbCap.textContent = t.dataset.caption;
  }
  function stepLb(d) { lbIndex = (lbIndex + d + lbList.length) % lbList.length; showLb(); }
  const closeLb = () => { lb.hidden = true; lbImg.src = ''; };
  document.addEventListener('click', e => {
    const t = e.target.closest('.tile');
    if (t && t.dataset.full) openLightbox(t);
  });
  $('.lb-close', lb).onclick = closeLb;
  $('.lb-prev', lb).onclick = () => stepLb(-1);
  $('.lb-next', lb).onclick = () => stepLb(1);
  lb.addEventListener('click', e => { if (e.target === lb || e.target.tagName === 'FIGURE') closeLb(); });
  let tx = 0;
  lb.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) stepLb(d < 0 ? 1 : -1); });

  /* ---------- content ---------- */
  $('#marquee').innerHTML = [...P.clients, ...P.clients].map(c => `<span>${c}</span>`).join('');

  // Haften
  const reels = $('#haftenReels');
  P.haften.reels.forEach((r, i) => {
    const d = document.createElement('div');
    d.className = 'reel';
    d.innerHTML = `<video muted loop playsinline preload="none" poster="assets/work/${r}.webp" src="assets/work/${r}.mp4"></video><span>Reel ${i + 1} · AHR Expo</span>`;
    reels.append(d);
  });
  const expo = $('#haftenExpo');
  P.haften.expo.forEach(x => expo.append(tile(x, 'Haften · AHR Expo México 2026', { cap: false })));
  const hs = $('#haftenSocial');
  P.haften.social.forEach(x => hs.append(tile(x, 'Haften · Redes sociales', { cap: false })));

  // BIOS
  P.bios.campaign.forEach(x => $('#biosCampaign').append(tile(x, 'BIOS · Campaña Ruta Rosa', { cap: false, cls: x === 'bios-tarjeta' ? 'contain' : '' })));
  const printNames = { 'bios-hoja-membretada': 'Hoja membretada', 'bios-flyer-ventanilla': 'Flyer de ventanilla', 'bios-flyer-vih': 'Flyer pruebas VIH', 'bios-tarjeta': 'Tarjeta Ruta Rosa' };
  P.bios.print.forEach(x => $('#biosPrint').append(tile(x, 'BIOS · ' + printNames[x])));
  P.bios.brand.forEach((x, i) => $('#biosBrand').append(tile(x, i ? 'BIOS · Fotografía del sitio web' : 'BIOS · Logotipo', { cap: false })));

  // Logos
  const lg = $('#logoGrid');
  P.logos.forEach(l => lg.append(tile(l.img, l.name, { capHtml: `<span>${l.name}</span><small>${l.note}</small>` })));

  // Stationery
  const sg = $('#stationeryGrid');
  P.stationery.forEach(s => sg.append(tile(s.img, s.name, { data: { kind: s.kind } })));
  filters($('#stationeryFilters'), sg, 'kind');

  // Social
  const brands = ['Todos', ...new Set(P.social.map(s => s.brand))];
  $('#socialFilters').innerHTML = brands.map((b, i) => `<button class="${i ? '' : 'is-active'}" data-filter="${i ? b : 'all'}">${b}</button>`).join('');
  const so = $('#socialGrid');
  P.social.forEach(s => so.append(tile(s.img, s.name, { data: { brand: s.brand } })));
  filters($('#socialFilters'), so, 'brand');

  function filters(bar, grid, key) {
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      $$('button', bar).forEach(x => x.classList.toggle('is-active', x === b));
      const f = b.dataset.filter;
      $$('.tile', grid).forEach(t => t.classList.toggle('is-hidden', f !== 'all' && t.dataset[key] !== f));
      grid.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- scaled live iframes ---------- */
  const DEVICES = { desktop: [1440, 900], tablet: [820, 1180], mobile: [390, 844] };

  // Case-study embeds (desktop view, scaled to fit the panel)
  function initEmbed(el) {
    if (el.dataset.ready) return;
    el.dataset.ready = 1;
    const url = el.dataset.url;
    el.innerHTML = `<div class="bar"><i></i><span>${url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span><a href="${url}" target="_blank" rel="noopener">Abrir <svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9"/></svg></a></div>
      <div class="stage"><iframe title="Vista en vivo" src="${url}" loading="lazy"></iframe><img class="poster" src="${el.dataset.poster}" alt=""><div class="loader"><span></span>Cargando sitio en vivo…</div></div>`;
    const stage = $('.stage', el), fr = $('iframe', el);
    const done = () => { $('.poster', el)?.remove(); $('.loader', el).classList.add('is-done'); };
    fr.addEventListener('load', done);
    setTimeout(done, 9000);
    const fit = () => {
      const w = stage.clientWidth, h = stage.clientHeight; if (!w) return;
      const vw = w < 560 ? 390 : 1440, s = w / vw;
      fr.style.width = vw + 'px'; fr.style.height = h / s + 'px'; fr.style.transform = `scale(${s})`;
    };
    new ResizeObserver(fit).observe(stage); fit();
  }

  // Tabs
  $$('[data-tabs]').forEach(bar => {
    const section = bar.closest('.slide');
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      $$('button', bar).forEach(x => x.setAttribute('aria-selected', x === b));
      $$('.panel', section).forEach(p => p.classList.toggle('is-active', p.id === b.dataset.panel));
      activatePanel($('#' + b.dataset.panel));
    });
  });
  function activatePanel(p) {
    const em = $('.embed', p); if (em) initEmbed(em);
    syncReels();
  }

  // Showroom
  const list = $('#siteList'), frame = $('#siteFrame'), dframe = $('#deviceFrame'), vp = $('#viewport');
  const poster = $('#sitePoster'), loader = $('#siteLoader');
  let device = isPhone() ? 'mobile' : 'desktop', current = -1, showroomReady = false;
  list.innerHTML = P.sites.map((s, i) => `<li><button data-i="${i}"><img src="assets/thumb/${s.id}.webp" alt="" loading="lazy"><span><strong>${s.name}</strong><small>${s.tag}</small></span></button></li>`).join('');
  list.addEventListener('click', e => { const b = e.target.closest('button'); if (b) selectSite(+b.dataset.i); });
  $$('.devices button').forEach(b => {
    b.classList.toggle('is-active', b.dataset.device === device);
    b.onclick = () => { device = b.dataset.device; $$('.devices button').forEach(x => x.classList.toggle('is-active', x === b)); fitShowroom(); };
  });
  $('#siteReload').onclick = () => { if (current > -1) { loader.classList.remove('is-done'); frame.src = P.sites[current].url; } };

  function selectSite(i) {
    if (i === current) return;
    current = i;
    const s = P.sites[i];
    $$('button', list).forEach(b => b.classList.toggle('is-active', +b.dataset.i === i));
    $('button.is-active', list)?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
    $('#siteUrl span').textContent = s.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    $('#siteUrl').href = $('#siteOpen').href = s.url;
    $('#siteName').textContent = s.name;
    $('#siteDesc').textContent = s.desc;
    poster.src = `assets/web/${s.id}.webp`; poster.style.display = '';
    loader.classList.remove('is-done');
    frame.src = s.url;
    clearTimeout(selectSite.t);
    selectSite.t = setTimeout(() => loader.classList.add('is-done'), 9000);
  }
  frame.addEventListener('load', () => { if (frame.src) { loader.classList.add('is-done'); poster.style.display = 'none'; } });

  function fitShowroom() {
    const W = vp.clientWidth, H = vp.clientHeight; if (!W) return;
    const [dw, dh] = DEVICES[device];
    if (device === 'desktop') {
      const s = W / dw;
      dframe.classList.remove('is-device');
      Object.assign(dframe.style, { width: W + 'px', height: H + 'px' });
      Object.assign(frame.style, { width: dw + 'px', height: H / s + 'px', transform: `scale(${s})` });
    } else {
      const s = Math.min((H - 40) / dh, (W - 40) / dw, 1);
      dframe.classList.add('is-device');
      Object.assign(dframe.style, { width: dw * s + 16 + 'px', height: dh * s + 16 + 'px' });
      Object.assign(frame.style, { width: dw + 'px', height: dh + 'px', transform: `scale(${s})` });
    }
  }
  new ResizeObserver(fitShowroom).observe(vp);

  /* ---------- slide tracking ---------- */
  const dots = $('#dots');
  dots.innerHTML = slides.map(s => `<a href="#${s.id}" data-label="${s.dataset.title}" aria-label="${s.dataset.title}"></a>`).join('');
  $$('.hero-copy > *, .section-head, .case-info, .case-body, .contact-card > *').forEach(el => el.classList.add('reveal'));
  $$('.hero-copy > *').forEach((el, i) => el.style.transitionDelay = i * 80 + 'ms');

  let active = 0;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in-view');
      setActive(slides.indexOf(en.target));
    });
  }, { root: deck, threshold: isPhone() ? 0.25 : 0.55 });
  slides.forEach(s => io.observe(s));

  function setActive(i) {
    active = i;
    const id = slides[i].id;
    document.body.dataset.slide = id;
    $$('.nav a').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + id));
    $('.nav a.is-active')?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    $$('a', dots).forEach((a, j) => a.classList.toggle('is-active', j === i));
    $('#progressBar').style.width = (i / (slides.length - 1)) * 100 + '%';
    if (history.replaceState) history.replaceState(null, '', '#' + id);
    if (id === 'web' && !showroomReady) { showroomReady = true; fitShowroom(); selectSite(0); }
    if (id === 'haften' || id === 'bios') $$('.panel.is-active', slides[i]).forEach(activatePanel);
    if (id === 'inicio') countUp();
    syncReels();
  }

  function syncReels() {
    const on = document.body.dataset.slide === 'haften' && $('#h-expo').classList.contains('is-active');
    $$('#haftenReels video').forEach(v => { if (on) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause(); });
  }

  let counted = false;
  function countUp() {
    if (counted) return; counted = true;
    $$('[data-count]').forEach(el => {
      const n = +el.dataset.count, t0 = performance.now();
      const tick = t => { const k = Math.min((t - t0) / 1200, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
  }

  // Anchor links scroll inside the deck
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const t = document.getElementById(a.getAttribute('href').slice(1)); if (!t) return;
    e.preventDefault(); go(slides.indexOf(t));
  });
  function go(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    deck.scrollTo({ top: slides[i].offsetTop, behavior: 'smooth' });
  }

  // Keyboard: arrows / PageUp / PageDown / Space, F = presentation mode
  document.addEventListener('keydown', e => {
    if (!lb.hidden) {
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowRight') stepLb(1);
      if (e.key === 'ArrowLeft') stepLb(-1);
      return;
    }
    if (e.target.closest('input,textarea')) return;
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(active + 1); }
    if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); go(active - 1); }
    if (e.key === 'Home') go(0);
    if (e.key === 'End') go(slides.length - 1);
    if (e.key.toLowerCase() === 'f') toggleFs();
  });
  function toggleFs() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.();
  }
  $('#fsBtn').onclick = toggleFs;

  // Deep link on load
  const start = slides.findIndex(s => '#' + s.id === location.hash);
  if (start > 0) requestAnimationFrame(() => { deck.style.scrollBehavior = 'auto'; deck.scrollTop = slides[start].offsetTop; deck.style.scrollBehavior = ''; });
})();
