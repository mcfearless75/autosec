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
        <a href="#services">Services</a>
        <a href="#about">Why us</a>
        <a href="https://www.instagram.com/360autoss" target="_blank" rel="noopener">Instagram</a>
        <a href="#contact">Contact</a>
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
    <a href="#services">Services</a>
    <a href="#about">Why us</a>
    <a href="https://www.instagram.com/360autoss" target="_blank" rel="noopener">Instagram</a>
    <a href="#contact">Contact</a>
    <a href="https://wa.me/447480236664" target="_blank" rel="noopener" class="btn btn-wa" style="margin-top:.5rem;justify-content:center">WhatsApp 07480 236664</a>
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
            <a href="https://www.instagram.com/360autoss" target="_blank" rel="noopener" aria-label="Instagram" class="s-ig">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.86 5.86 0 0 0 1.38 2.13 5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="https://www.facebook.com/360autosolutions" target="_blank" rel="noopener" aria-label="Facebook" class="s-fb">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
            </a>
            <a href="https://wa.me/447480236664" target="_blank" rel="noopener" aria-label="WhatsApp" class="s-wa">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.12 8.12 0 0 1-2.39-1.47 8.94 8.94 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52s-.67-1.62-.92-2.22c-.24-.58-.49-.5-.67-.51-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49a17.1 17.1 0 0 0 1.7.63c.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.03 21.79h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.86 9.86 0 1 1 8.36 4.62M20.5 3.49A11.82 11.82 0 0 0 12.03 0C5.46 0 .11 5.34.11 11.91a11.85 11.85 0 0 0 1.59 5.95L0 24l6.3-1.65a11.89 11.89 0 0 0 5.72 1.46h.01c6.57 0 11.92-5.34 11.92-11.9a11.84 11.84 0 0 0-3.46-8.42"/></svg>
            </a>
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
