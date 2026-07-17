/**
 * main.js — renders the page from SITE_CONTENT (content.js) + SITE_ICONS.
 * You normally never edit this file; change content.js instead.
 */
(function () {
  "use strict";

  var C = window.SITE_CONTENT || {};
  var ICONS = window.SITE_ICONS || {};

  var ARROW_RIGHT =
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ARROW_DIAG =
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function $(id) {
    return document.getElementById(id);
  }
  function setText(id, value) {
    var el = $(id);
    if (el && value != null) el.textContent = value;
  }
  function el(tag, className) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    return e;
  }

  // ---- Meta -------------------------------------------------------------
  function renderMeta() {
    var m = C.meta || {};
    if (m.title) document.title = m.title;
    if (m.description) {
      var d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute("content", m.description);
    }
    if (m.favicon) {
      var link = document.querySelector('link[rel="icon"]');
      if (link) {
        link.setAttribute("href", encodePath(m.favicon));
        var ext = m.favicon.split(".").pop().toLowerCase();
        var types = {
          svg: "image/svg+xml",
          png: "image/png",
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          ico: "image/x-icon",
          gif: "image/gif",
          webp: "image/webp",
        };
        if (types[ext]) link.setAttribute("type", types[ext]);
      }
    }
  }

  // ---- Header -----------------------------------------------------------
  function renderHeader() {
    var h = C.header || {};
    setText("resume-label", h.resumeLabel || "Resume");
    setText("find-me-text", h.findMeText || "You can find me on");

    var btn = $("resume-btn");
    if (btn && h.resumeFile) btn.setAttribute("href", encodePath(h.resumeFile));

    var list = $("socials-list");
    if (!list) return;
    list.innerHTML = "";
    (h.socials || []).forEach(function (s) {
      if (!s.url) return;
      var li = el("li");
      var a = el("a", "social-link");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", s.label || s.icon);
      a.title = s.label || s.icon;
      a.innerHTML = ICONS[s.icon] || "";
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  // ---- Hero -------------------------------------------------------------
  function renderHero() {
    var hero = C.hero || {};
    setText("hero-greeting", hero.greeting);
    setText("hero-name", hero.name);
    setText("hero-tagline", hero.tagline);
    var img = $("hero-image");
    if (img) {
      img.src = encodePath(hero.image);
      img.alt = hero.imageAlt || "";
    }
  }

  // ---- Expertise --------------------------------------------------------
  function renderExpertise() {
    var e = C.expertise || {};
    setText("expertise-heading", e.heading || "My Expertise");
    var list = $("tags-list");
    if (!list) return;
    list.innerHTML = "";
    (e.tags || []).forEach(function (t) {
      var li = el("li", "tag" + (t.accent ? " tag--accent" : ""));
      li.textContent = t.label;
      list.appendChild(li);
    });
  }

  // ---- Projects ---------------------------------------------------------
  function renderProjects() {
    var p = C.projects || {};
    setText("projects-heading", p.heading || "My Projects");
    var grid = $("project-grid");
    if (!grid) return;
    grid.innerHTML = "";

    (p.items || []).forEach(function (item) {
      var card;
      if (item.url) {
        card = el("a", "project-card");
        card.href = item.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
      } else {
        card = el("div", "project-card");
      }
      var img = el("img");
      img.src = encodePath(item.image);
      img.alt = item.title || "Project";
      img.loading = "lazy";
      card.appendChild(img);
      grid.appendChild(card);
    });

    if (p.seeMore && p.seeMore.label) {
      var more = el("a", "project-card project-card--more");
      more.href = p.seeMore.url || "#";
      if (p.seeMore.url) {
        more.target = "_blank";
        more.rel = "noopener noreferrer";
      }
      var label = el("span");
      label.textContent = p.seeMore.label;
      var arrow = el("span", "arrow");
      arrow.innerHTML = ARROW_RIGHT;
      more.appendChild(label);
      more.appendChild(arrow);
      grid.appendChild(more);
    }
  }

  // ---- Experience -------------------------------------------------------
  function renderExperience() {
    var ex = C.experience || {};
    setText("experience-heading", ex.heading || "My Experience");
    var list = $("experience-list");
    if (!list) return;
    list.innerHTML = "";
    (ex.items || []).forEach(function (item) {
      var li = el("li", "timeline__item");
      var dot = el("span", "timeline__dot" + (item.current ? " timeline__dot--filled" : ""));
      var role = el("h3", "timeline__role");
      role.innerHTML =
        escapeHtml(item.role || "") +
        (item.org ? ' <span class="at">@' + escapeHtml(item.org) + "</span>" : "");
      li.appendChild(dot);
      li.appendChild(role);
      if (item.description) {
        var desc = el("p", "timeline__desc");
        desc.textContent = item.description;
        li.appendChild(desc);
      }
      list.appendChild(li);
    });
  }

  // ---- Education --------------------------------------------------------
  function renderEducation() {
    var ed = C.education || {};
    setText("education-heading", ed.heading || "My Education");
    var list = $("education-list");
    if (!list) return;
    list.innerHTML = "";
    (ed.items || []).forEach(function (item) {
      var li = el("li", "timeline__item");
      li.appendChild(el("span", "timeline__dot"));
      var inst = el("h3", "timeline__role");
      inst.textContent = item.institute || "";
      li.appendChild(inst);
      if (item.program) {
        var prog = el("p", "edu__program");
        prog.textContent = item.program;
        li.appendChild(prog);
      }
      var meta = el("p", "edu__meta");
      meta.innerHTML =
        [item.period, item.location]
          .filter(Boolean)
          .map(escapeHtml)
          .join("<br>");
      li.appendChild(meta);
      list.appendChild(li);
    });
  }

  // ---- Fashion ----------------------------------------------------------
  // Encode each path segment so file names with spaces/special chars
  // (e.g. "PXL_...~2.jpg") resolve correctly on GitHub Pages.
  function encodePath(path) {
    return String(path || "")
      .split("/")
      .map(function (seg) {
        return encodeURIComponent(seg);
      })
      .join("/");
  }

  function buildOutfit(photo) {
    var fig = el("figure", "outfit");
    var img = el("img");
    img.src = encodePath(photo.image);
    img.alt = photo.alt || "Outfit";
    img.loading = "lazy";
    img.draggable = false;
    fig.appendChild(img);
    return fig;
  }

  function renderFashion() {
    var f = C.fashion || {};
    setText("fashion-heading", f.heading);
    setText("fashion-sub", f.subheading);
    var scroller = $("outfit-scroller");
    if (!scroller) return;

    var photos = f.photos || [];
    scroller.innerHTML = "";

    var track = el("div", "outfit-track");
    photos.forEach(function (photo) {
      track.appendChild(buildOutfit(photo));
    });
    scroller.appendChild(track);

    setupCarousel(scroller, track, photos.length);
  }

  // ---- Auto-moving carousel --------------------------------------------
  function setupCarousel(scroller, track, originalCount) {
    if (!track.children.length) return;

    var reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced-motion / no-JS-animation fallback: plain manual scroll.
    if (reduceMotion) {
      scroller.classList.add("outfit-scroller--manual");
      return;
    }

    // Duplicate the set so we can loop seamlessly.
    var originals = Array.prototype.slice.call(track.children);
    originals.forEach(function (node) {
      track.appendChild(node.cloneNode(true));
    });

    var NORMAL_SPEED = 45; // px per second
    var SLOW_SPEED = 4; // px per second while hovering an image
    var targetSpeed = NORMAL_SPEED;
    var currentSpeed = NORMAL_SPEED;

    var offset = 0;
    var loopWidth = 0;
    var lastTime = null;

    function measure() {
      // Distance from the first item to its duplicate = one full loop.
      var dup = track.children[originalCount];
      loopWidth = dup ? dup.offsetLeft : track.scrollWidth / 2;
    }
    measure();
    window.addEventListener("resize", measure);

    // Slow down drastically while hovering any outfit; pause on grab.
    scroller.addEventListener("pointerenter", function (e) {
      if (e.target.closest && e.target.closest(".outfit")) {
        targetSpeed = SLOW_SPEED;
      }
    });
    scroller.addEventListener(
      "pointerover",
      function (e) {
        targetSpeed =
          e.target.closest && e.target.closest(".outfit")
            ? SLOW_SPEED
            : NORMAL_SPEED;
      }
    );
    scroller.addEventListener("pointerout", function (e) {
      if (!e.relatedTarget || !scroller.contains(e.relatedTarget)) {
        targetSpeed = NORMAL_SPEED;
      }
    });
    scroller.addEventListener("pointerleave", function () {
      targetSpeed = NORMAL_SPEED;
    });

    // Pause entirely when the tab is hidden to avoid a jump on return.
    var paused = false;
    document.addEventListener("visibilitychange", function () {
      paused = document.hidden;
      if (!paused) lastTime = null;
    });

    function frame(now) {
      if (lastTime == null) lastTime = now;
      var dt = (now - lastTime) / 1000;
      lastTime = now;

      // Ease current speed toward the target for a smooth slow-down.
      currentSpeed += (targetSpeed - currentSpeed) * Math.min(1, dt * 6);

      if (!paused && loopWidth > 0) {
        offset -= currentSpeed * dt;
        if (offset <= -loopWidth) offset += loopWidth;
        track.style.transform = "translate3d(" + offset + "px, 0, 0)";
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // ---- Connect ----------------------------------------------------------
  function renderConnect() {
    var c = C.connect || {};
    setText("connect-heading", c.heading || "Let's Connect");
    var email = $("connect-email");
    if (email && c.email) {
      email.textContent = c.email;
      email.href = "mailto:" + c.email;
    }
    var list = $("connect-links");
    if (!list) return;
    list.innerHTML = "";
    (c.links || []).forEach(function (link) {
      if (!link.url) return;
      var li = el("li");
      var a = el("a", "connect__link");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      var label = el("span");
      label.textContent = link.label;
      var arrow = el("span", "arrow");
      arrow.innerHTML = ARROW_DIAG;
      a.appendChild(label);
      a.appendChild(arrow);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  // ---- Footer note ------------------------------------------------------
  function renderFooter() {
    var name = ((C.hero && C.hero.name) || "").replace(/^I am\s+/i, "");
    var year = new Date().getFullYear();
    setText(
      "footer-text",
      "© " + year + (name ? " " + name : "") + ". All rights reserved."
    );
  }

  // ---- Scroll reveal ----------------------------------------------------
  function setupReveal() {
    var selectors = [
      ".hero__text",
      ".hero__art",
      ".section-title",
      ".tag",
      ".project-card",
      ".timeline__item",
      ".fashion__heading",
      ".connect__link",
    ];
    var els = [];
    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (node) {
        node.classList.add("reveal");
        els.push(node);
      });
    });

    if (!("IntersectionObserver" in window)) {
      els.forEach(function (n) {
        n.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            setTimeout(function () {
              entry.target.classList.add("is-visible");
            }, Math.min(i, 6) * 50);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach(function (n) {
      io.observe(n);
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function init() {
    renderMeta();
    renderHeader();
    renderHero();
    renderExpertise();
    renderProjects();
    renderExperience();
    renderEducation();
    renderFashion();
    renderConnect();
    renderFooter();
    setupReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
