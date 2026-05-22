// Lightweight nav/footer injector so all pages share one source of truth.
(function(){
  const navHTML = `
  <div class="nav-wrap">
    <nav class="nav" aria-label="Main">
      <a class="brand" href="index.html" aria-label="360 Auto Security home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z"/></svg>
        </span>
        <span class="brand-text">360 AUTO SECURITY<small>Birmingham &middot; TASSA Approved</small></span>
      </a>
      <div class="nav-links">
        <a href="index.html" data-nav="index">Home</a>
        <a href="services.html" data-nav="services">Services</a>
        <a href="about.html" data-nav="about">About</a>
        <a href="gallery.html" data-nav="gallery">Gallery</a>
        <a href="contact.html" data-nav="contact">Contact</a>
      </div>
      <div class="nav-cta">
        <a href="tel:+441217981713" class="btn btn-ghost btn-sm" aria-label="Call us">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span class="hide-sm">0121 798 1713</span>
        </a>
        <a href="contact.html" class="btn btn-primary btn-sm">Get a Quote</a>
        <button class="menu-btn" aria-label="Open menu" id="menuOpen">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </nav>
  </div>
  <div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Menu">
    <button class="menu-btn close" aria-label="Close menu" id="menuClose">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <a href="index.html">Home</a>
    <a href="services.html">Services</a>
    <a href="about.html">About</a>
    <a href="gallery.html">Gallery</a>
    <a href="contact.html">Contact</a>
    <a href="tel:+441217981713" class="btn btn-primary" style="margin-top:1rem;justify-content:center">Call 0121 798 1713</a>
  </div>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z"/></svg>
            </span>
            <span class="brand-text">360 AUTO SECURITY<small>TASSA Approved</small></span>
          </a>
          <p style="margin-top:1rem;max-width:22rem;font-size:.92rem">Birmingham&rsquo;s trusted vehicle security specialists. Autowatch Ghost immobilisers, Thatcham-approved trackers and alarm systems &mdash; fitted by approved installers.</p>
          <div class="social" aria-label="Social media">
            <a href="https://www.instagram.com/360autoss" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://www.facebook.com/360autosolutions" target="_blank" rel="noopener" aria-label="Facebook"><img src="assets/Facebook-White-Logo-PNG-File.png" alt="" width="20" height="20" loading="lazy"></a>
            <a href="https://wa.me/447480236664" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="assets/whatsapp_icon.png" alt="" width="20" height="20" loading="lazy"></a>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#ghost">Ghost Immobiliser</a></li>
            <li><a href="services.html#trackers">S5 &amp; S7 Trackers</a></li>
            <li><a href="services.html#alarms">Thatcham Alarms</a></li>
            <li><a href="services.html#mobile">Mobile Installation</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html#quote">Get a Quote</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+441217981713">0121 798 1713</a></li>
            <li><a href="mailto:uk360autos@hotmail.com">uk360autos@hotmail.com</a></li>
            <li>Unit 5A, Millards Industrial Estate, Cornwallis Road, West Bromwich B70 9BY</li>
          </ul>
        </div>
      </div>
      <div class="footer-bot">
        <span>&copy; ${new Date().getFullYear()} 360 Auto Security. All rights reserved.</span>
        <span>TASSA Approved Installer &middot; Authorised: Autowatch &middot; SmarTrack &middot; MetaTrak &middot; ScorpionTrack &middot; Pandora</span>
      </div>
    </div>
  </footer>`;

  document.addEventListener('DOMContentLoaded',()=>{
    const navMount = document.getElementById('site-nav');
    const footMount = document.getElementById('site-footer');
    if(navMount) navMount.innerHTML = navHTML;
    if(footMount) footMount.innerHTML = footerHTML;

    // Highlight active link
    const page = document.body.dataset.page;
    if(page){
      document.querySelectorAll(`[data-nav="${page}"]`).forEach(a=>a.classList.add('active'));
    }
    // Mobile menu
    const open = document.getElementById('menuOpen');
    const close = document.getElementById('menuClose');
    const menu = document.getElementById('mobileMenu');
    if(open && menu) open.addEventListener('click',()=>menu.classList.add('open'));
    if(close && menu) close.addEventListener('click',()=>menu.classList.remove('open'));
    if(menu) menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
  });
})();
