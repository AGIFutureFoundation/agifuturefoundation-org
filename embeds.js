/* ============ AGIF shared embeds ============
   1) .world-embed[data-src] — lazy 3D world iframe (WorldForge / metaverse), fullscreen-capable
   2) .social-links — rendered from the central social.json (upgradable from one file) */
(function () {
  "use strict";

  var SOCIAL_URL =
    "https://raw.githubusercontent.com/AGIFutureFoundation/agifuturefoundation-org/main/social.json";
  var SOCIAL_TIMEOUT = 3500;

  /* ---------- 3D world embed ---------- */
  function initWorldEmbeds() {
    document.querySelectorAll(".world-embed[data-src]").forEach(function (host) {
      if (host.dataset.ready) return;
      host.dataset.ready = "1";

      var src = host.dataset.src;
      var title = host.dataset.title || "3D world";
      var wrap = document.createElement("div");
      wrap.className = "world-wrap";

      var bar = document.createElement("div");
      bar.className = "world-bar";
      bar.innerHTML =
        '<span class="world-title">🌍 ' + title + "</span>" +
        '<span class="world-actions"><button class="world-full" title="Fullscreen">⛶</button></span>';

      var stage = document.createElement("div");
      stage.className = "world-stage";

      var facade = document.createElement("div");
      facade.className = "world-facade";
      facade.innerHTML =
        '<span class="world-play">▶</span>' +
        "<p><strong>" + title + "</strong></p>" +
        '<p class="world-hint">Walkable 3D worlds on real Earth maps — runs right in your browser, no install.</p>' +
        '<span class="btn btn-primary">Enter the world →</span>';

      stage.appendChild(facade);
      wrap.appendChild(bar);
      wrap.appendChild(stage);
      host.appendChild(wrap);

      function enter() {
        stage.innerHTML =
          '<div class="world-loading"><span></span> Loading the world…</div>' +
          '<iframe src="' + src + '" title="' + title + '" loading="lazy" allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope" allowfullscreen></iframe>';
      }

      facade.addEventListener("click", enter);
      bar.querySelector(".world-full").addEventListener("click", function () {
        if (document.fullscreenElement) document.exitFullscreen();
        else if (wrap.requestFullscreen) wrap.requestFullscreen();
        else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
      });
    });
  }

  /* ---------- upgradable social links ---------- */
  function renderSocial(links, host) {
    var html = links
      .filter(function (l) { return l.url && l.url !== "#"; })
      .map(function (l) {
        var ext = /^https?:/i.test(l.url);
        return (
          '<a href="' + l.url + '"' +
          (ext ? ' aria-label="' + l.label + '" target="_blank" rel="noopener"' : "") +
          ">" + l.label + "</a>"
        );
      })
      .join("");
    if (html) host.innerHTML = html;
  }

  function initSocial() {
    var hosts = document.querySelectorAll(".social-links");
    if (!hosts.length) return;
    var here = location.hostname;
    fetch(SOCIAL_URL, { signal: AbortSignal.timeout ? AbortSignal.timeout(SOCIAL_TIMEOUT) : undefined })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error("http " + r.status)); })
      .then(function (cfg) {
        var links = (cfg.sites && cfg.sites[here] && cfg.sites[here].length) ? cfg.sites[here] : cfg.links;
        if (links) hosts.forEach(function (h) { renderSocial(links, h); });
      })
      .catch(function () { /* keep the links already written in the page */ });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { initWorldEmbeds(); initSocial(); });
  } else {
    initWorldEmbeds();
    initSocial();
  }
})();
