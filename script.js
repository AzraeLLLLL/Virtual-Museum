// ===== Script block: inline =====
(function () {
      "use strict";

      var artworks = [
        {
          id: "spoliarium",
          title: "Spoliarium",
          shortTitle: "Spoliarium",
          artist: "Juan Luna y Novicio",
          date: "1884",
          location: "National Museum of Fine Arts, Manila",
          medium: "Oil on canvas",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Juan_Luna_Spoliarium.jpg/1280px-Juan_Luna_Spoliarium.jpg",
          fallback: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Juan_Luna_Spoliarium.jpg",
          source: "https://commons.wikimedia.org/wiki/File:Juan_Luna_Spoliarium.jpg",
          credit: "Juan Luna y Novicio; faithful public-domain reproduction hosted by Wikimedia Commons.",
          license: "Public domain artwork reproduction.",
          background: "Painted in 1884, Spoliarium stages the aftermath of gladiatorial combat through dramatic chiaroscuro and monumental scale. In a Philippine art archive, it becomes a key image of suffering, spectacle, and national memory.",
          subject: "Fallen gladiators, attendants, spectators, and grieving figures occupy a dark Roman interior.",
          content: "The painting turns spectacle into moral criticism. It communicates suffering, dehumanization, public violence, and the loss of dignity.",
          context: "Created during the Spanish colonial period, the work became symbolically powerful for Filipino viewers because oppression in ancient Rome could be read beside colonial injustice.",
          footerLine: "Spoliarium — J. Luna",
          position: "center center"
        },
        {
          id: "virgenes",
          title: "Las Vírgenes Cristianas Expuestas al Populacho",
          shortTitle: "Las Vírgenes Cristianas",
          artist: "Félix Resurrección Hidalgo",
          date: "1884",
          location: "Bangko Sentral ng Pilipinas collection; Philippine art historical canon",
          medium: "Oil on canvas",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Las_Virgenes_Cristianas_Expuestas_Al_Populacho_%28The_Christian_Virgins_Being_Exposed_to_the_Populace%29_by_Felix_Ressureccion_Hidalgo_1884.jpg",
          fallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Las_Virgenes_Cristianas_Expuestas_Al_Populacho_%28The_Christian_Virgins_Being_Exposed_to_the_Populace%29_by_Felix_Ressureccion_Hidalgo_1884.jpg?width=1200",
          source: "https://commons.wikimedia.org/wiki/File:Las_Virgenes_Cristianas_Expuestas_Al_Populacho_(The_Christian_Virgins_Being_Exposed_to_the_Populace)_by_Felix_Ressureccion_Hidalgo_1884.jpg",
          credit: "Félix Resurrección Hidalgo; faithful public-domain reproduction hosted by Wikimedia Commons.",
          license: "Public domain artwork reproduction.",
          background: "Hidalgo's 1884 academic painting shows Christian women exposed before a hostile crowd. It demonstrates how Filipino painters used European training to create images of vulnerability, dignity, and moral tension.",
          subject: "Two vulnerable Christian women appear before spectators whose gazes and gestures create a threatening public arena.",
          content: "The painting contrasts innocence with crowd aggression. Its drama centers on dignity, shame, spiritual conviction, and moral endurance.",
          context: "Hidalgo, born in Binondo, Manila, used European academic technique while Filipino artists were proving that colonial subjects could equal European painters within the academy.",
          footerLine: "Las Vírgenes — F. Hidalgo",
          position: "center center"
        },
        {
          id: "bulaquena",
          title: "La Bulaqueña",
          shortTitle: "La Bulaqueña",
          artist: "Juan Luna y Novicio",
          date: "1895",
          location: "National Museum of the Philippines collection, Manila",
          medium: "Oil on canvas portrait",
          image: "https://upload.wikimedia.org/wikipedia/commons/5/56/La_Bulaquena_by_Juan_Luna.jpg",
          fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/La_Bulaquena_by_Juan_Luna.jpg/683px-La_Bulaquena_by_Juan_Luna.jpg",
          source: "https://commons.wikimedia.org/wiki/File:La_Bulaquena_by_Juan_Luna.jpg",
          credit: "Juan Luna y Novicio; faithful public-domain reproduction hosted by Wikimedia Commons.",
          license: "Public domain artwork reproduction.",
          background: "La Bulaqueña is a late nineteenth-century portrait of a Filipina in formal traditional dress. It joins academic portrait technique with a distinctly Philippine sitter, costume, and social presence.",
          subject: "A young woman in traditional formal attire stands or sits with quiet restraint against a dark, subdued background.",
          content: "The portrait communicates refinement, cultural self-possession, modesty, and the visible dignity of Filipino identity.",
          context: "Painted near the end of the Spanish colonial period, the work bridges Luna's European training with Philippine dress, class, and social representation.",
          footerLine: "La Bulaqueña — J. Luna",
          position: "center 18%"
        },
        {
          id: "ricefield",
          title: "In the Rice Field",
          shortTitle: "In the Rice Field",
          artist: "Fabián de la Rosa",
          date: "1919",
          location: "Philippine genre painting; Luzon agrarian subject",
          medium: "Oil on canvas",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Fabi%C3%A1n_de_la_Rosa_-_In_the_Rice_Field_%281919%29.jpg",
          fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Fabi%C3%A1n_de_la_Rosa_-_In_the_Rice_Field_%281919%29.jpg/1200px-Fabi%C3%A1n_de_la_Rosa_-_In_the_Rice_Field_%281919%29.jpg",
          source: "https://commons.wikimedia.org/wiki/File:Fabi%C3%A1n_de_la_Rosa_-_In_the_Rice_Field_(1919).jpg",
          credit: "Fabián de la Rosa; public-domain artwork image hosted by Wikimedia Commons.",
          license: "Public domain artwork reproduction.",
          background: "De la Rosa's field scene presents agricultural labor with clarity and warmth. The painting honors rural work as cultural memory rather than treating it as a background detail.",
          subject: "Figures work in a rice field, surrounded by land, water, and open atmosphere.",
          content: "The painting honors labor, patience, and the intimate relation between people and land.",
          context: "Rice-field imagery is central to Philippine visual culture because agriculture shaped livelihood, landscape, and social memory across Luzon.",
          footerLine: "In the Rice Field — F. de la Rosa",
          position: "center center"
        },
        {
          id: "elciego",
          title: "El Ciego",
          shortTitle: "El Ciego",
          artist: "Fernando Amorsolo",
          date: "1928",
          location: "Philippine painting; documented through public art-market record",
          medium: "Oil on canvas",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/El_Ciego.jpg",
          fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/El_Ciego.jpg/1200px-El_Ciego.jpg",
          source: "https://commons.wikimedia.org/wiki/File:El_Ciego.jpg",
          credit: "Fernando Amorsolo; public-domain artwork image hosted by Wikimedia Commons.",
          license: "Public domain artwork reproduction.",
          background: "El Ciego, painted in 1928, shows Amorsolo's skill in figure painting, light, and social observation. The work shifts attention from idealized landscape to human vulnerability and dignity.",
          subject: "A blind figure becomes the center of attention, rendered with Amorsolo's careful modeling and controlled illumination.",
          content: "The work invites empathy and attention to vulnerability, dignity, and the human presence behind social labels.",
          context: "Amorsolo is strongly associated with Luzon and Manila-based Philippine painting. This work expands his image beyond rural sunlight toward intimate social observation.",
          footerLine: "El Ciego — F. Amorsolo",
          position: "center center"
        }
      ];

      var currentIndex = 0;
      var currentTab = "subject";
      var lastFocus = null;
      var $ = function (selector, root) { return (root || document).querySelector(selector); };
      var $$ = function (selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); };

      function escapeHTML(value) {
        return String(value).replace(/[&<>\"']/g, function (ch) {
          return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[ch];
        });
      }

      function createGallery() {
        var grid = $("#galleryGrid");
        grid.innerHTML = artworks.map(function (art, index) {
          return "<article class=\"artwork-card reveal\" id=\"gallery-" + escapeHTML(art.id) + "\" data-id=\"" + escapeHTML(art.id) + "\">" +
            "<span class=\"ceiling-track\" aria-hidden=\"true\"></span>" +
            "<button class=\"hanging-frame\" type=\"button\" data-index=\"" + index + "\" aria-label=\"Inspect " + escapeHTML(art.title) + "\">" +
            "<span class=\"frame-inner image-wrap\"><img src=\"" + art.image + "\" data-fallback=\"" + art.fallback + "\" alt=\"" + escapeHTML(art.title + " by " + art.artist) + "\" loading=\"lazy\" decoding=\"async\" referrerpolicy=\"no-referrer\" style=\"--fit-pos:" + escapeHTML(art.position || "center center") + "\"><span class=\"click-ribbon\">Inspect</span></span>" +
            "</button>" +
            "<button class=\"wall-plaque\" type=\"button\" data-index=\"" + index + "\" aria-label=\"Open label for " + escapeHTML(art.title) + "\"><strong>" + escapeHTML(art.shortTitle) + "</strong><span>" + escapeHTML(art.artist) + " / " + escapeHTML(art.date) + "</span><em>View label</em></button>" +
            "</article>";
        }).join("");
        $$(".hanging-frame, .wall-plaque", grid).forEach(function (button) {
          button.addEventListener("click", function () { openArtwork(Number(button.getAttribute("data-index"))); });
        });
        // Gallery tilt removed to prevent hover jitter.
        $$(".hanging-frame", grid).forEach(function (button) { button.style.setProperty("--tilt-x", "0deg"); });
        bindImageFallbacks(grid);
      }

      function createAnalysis() {
        var grid = $("#analysisGrid");
        grid.innerHTML = artworks.map(function (art) {
          return "<article class=\"analysis-card reveal\"><h3>" + escapeHTML(art.shortTitle) + "</h3>" +
            "<p><strong>Subject:</strong> " + escapeHTML(art.subject) + "</p>" +
            "<p><strong>Content:</strong> " + escapeHTML(art.content) + "</p>" +
            "<p><strong>Context:</strong> " + escapeHTML(art.context) + "</p></article>";
        }).join("");
      }

      function createSources() {
        var grid = $("#sourceGrid");
        grid.innerHTML = artworks.map(function (art) {
          return "<article class=\"source-card reveal\"><strong>" + escapeHTML(art.shortTitle) + "</strong>" +
            "<p>" + escapeHTML(art.credit) + " " + escapeHTML(art.license) + "</p>" +
            "<a href=\"" + art.source + "\" target=\"_blank\" rel=\"noopener\">Open original source</a></article>";
        }).join("");
        $("#footerWorks").innerHTML = artworks.map(function (art) { return "<li><a class=\"footer-work-link\" href=\"#gallery-" + escapeHTML(art.id) + "\">" + escapeHTML(art.footerLine) + "</a></li>"; }).join("");
      }

      function bindImageFallbacks(root) {
        $$("img", root || document).forEach(function (img) {
          if (img.dataset.boundFallback === "true") return;
          img.dataset.boundFallback = "true";
          img.addEventListener("error", function () {
            if (img.dataset.triedFallback !== "true" && img.dataset.fallback) {
              img.dataset.triedFallback = "true";
              img.src = img.dataset.fallback;
              return;
            }
            var wrap = img.closest(".image-wrap") || img.closest(".modal-frame") || img.parentElement;
            if (wrap) wrap.classList.add("broken");
          });
        });
      }

      function openArtwork(index) {
        currentIndex = index;
        currentTab = "subject";
        lastFocus = document.activeElement;
        renderModal();
        var modal = $("#artModal");
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        $("#closeModal").focus();
      }

      function closeArtwork() {
        var modal = $("#artModal");
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
      }

      function renderModal() {
        var art = artworks[currentIndex];
        var modalFrame = $("#modalFrame");
        var modalImage = $("#modalImage");
        modalFrame.classList.remove("broken");
        modalFrame.dataset.art = art.id;
        modalImage.dataset.triedFallback = "false";
        modalImage.dataset.fallback = art.fallback;
        modalImage.src = art.image;
        modalImage.alt = art.title + " by " + art.artist;
        $("#modalTitle").textContent = art.title;
        $("#modalFacts").innerHTML = [
          ["Artist", art.artist],
          ["Date", art.date],
          ["Location", art.location],
          ["Medium", art.medium]
        ].map(function (pair) {
          return "<div class=\"fact\"><span>" + escapeHTML(pair[0]) + "</span><strong>" + escapeHTML(pair[1]) + "</strong></div>";
        }).join("");
        $("#modalBackground").textContent = art.background;
        $("#modalOfficialFooter").innerHTML = "<div class=\"label-footer-top\"><span>Official exhibit label</span><span>Hiyas ng Luzon</span></div>" +
          "<div class=\"label-footer-body\"><div><strong>Image credit</strong><br>" + escapeHTML(art.credit) + "</div><div><strong>License / source</strong><br>" + escapeHTML(art.license) + "</div></div>";
        setTab("subject");
      }

      function setTab(tab) {
        currentTab = tab;
        var art = artworks[currentIndex];
        var title = tab.charAt(0).toUpperCase() + tab.slice(1);
        $("#analysisBox").innerHTML = "<h3>" + title + "</h3><p>" + escapeHTML(art[tab]) + "</p>";
        $$(".tab").forEach(function (button) { button.classList.toggle("active", button.dataset.tab === tab); });
      }

      function stepArtwork(delta) {
        currentIndex = (currentIndex + delta + artworks.length) % artworks.length;
        currentTab = "subject";
        renderModal();
      }

      function setupReveal() {
        if (!("IntersectionObserver" in window)) {
          $$(".reveal").forEach(function (el) { el.classList.add("visible"); });
          return;
        }
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
        $$(".reveal").forEach(function (el) { observer.observe(el); });
      }

      function updateScrollEffects() {
        var y = window.scrollY || window.pageYOffset || 0;
        var doc = document.documentElement;
        var max = Math.max(1, doc.scrollHeight - window.innerHeight);

        // Threads-style parallax, revised: the whole framed painting moves downward together.
        // The image itself stays locked inside the frame, with no independent zoom or upward drift.
        doc.style.setProperty("--heroBgY", (-y * 0.18).toFixed(2) + "px");
        doc.style.setProperty("--heroFrameY", (y * 0.12).toFixed(2) + "px");
        doc.style.setProperty("--heroImgY", "0px");
        doc.style.setProperty("--heroScale", "1");
        doc.style.setProperty("--floorY", (y * 0.055).toFixed(2) + "px");
        $("#progress").style.width = Math.min(100, Math.max(0, y / max * 100)) + "%";
        var navAlpha = Math.min(0.90, Math.max(0.16, y / 180));
        var navBlur = Math.min(16, Math.max(0, y / 12));
        var topbar = $("#topbar");
        topbar.style.setProperty("--nav-alpha", navAlpha.toFixed(3));
        topbar.style.setProperty("--nav-blur", navBlur.toFixed(1) + "px");
        topbar.classList.toggle("scrolled", y > 30);
      }

      function bindEvents() {
        $$("[data-open]").forEach(function (button) {
          button.addEventListener("click", function () {
            var id = button.getAttribute("data-open");
            var index = artworks.findIndex(function (art) { return art.id === id; });
            if (index >= 0) openArtwork(index);
          });
        });
        $("#lightBtn").addEventListener("click", function () {
          var raised = document.body.classList.toggle("lights-raised");
          this.textContent = raised ? "Dim Gallery" : "Raise Lights";
          this.setAttribute("aria-pressed", String(raised));
        });
        $("#closeModal").addEventListener("click", closeArtwork);
        $("#artModal").addEventListener("click", function (event) {
          if (event.target === this) closeArtwork();
        });
        $("#prevArt").addEventListener("click", function () { stepArtwork(-1); });
        $("#nextArt").addEventListener("click", function () { stepArtwork(1); });
        $$(".tab").forEach(function (button) {
          button.addEventListener("click", function () { setTab(button.dataset.tab); });
        });
        $("#modalFrame").addEventListener("mousemove", function (event) {
          var rect = this.getBoundingClientRect();
          this.style.setProperty("--mx", (((event.clientX - rect.left) / rect.width) * 100).toFixed(1) + "%");
          this.style.setProperty("--my", (((event.clientY - rect.top) / rect.height) * 100).toFixed(1) + "%");
        });
        document.addEventListener("keydown", function (event) {
          var modalOpen = $("#artModal").classList.contains("open");
          if (!modalOpen) return;
          if (event.key === "Escape") closeArtwork();
          if (event.key === "ArrowRight") stepArtwork(1);
          if (event.key === "ArrowLeft") stepArtwork(-1);
        });

        var pointerTicking = false;
        var latestPointer = { x: 0, y: 0 };
        document.addEventListener("pointermove", function (event) {
          if (document.body.classList.contains("lights-raised")) return;
          latestPointer.x = event.clientX;
          latestPointer.y = event.clientY;
          if (pointerTicking) return;
          pointerTicking = true;
          window.requestAnimationFrame(function () {
            var doc = document.documentElement;
            doc.style.setProperty("--spot-x", latestPointer.x + "px");
            doc.style.setProperty("--spot-y", latestPointer.y + "px");
            doc.style.setProperty("--cursorX", latestPointer.x + "px");
            doc.style.setProperty("--cursorY", latestPointer.y + "px");
            pointerTicking = false;
          });
        }, { passive: true });
        var scrollTicking = false;
        window.addEventListener("scroll", function () {
          if (scrollTicking) return;
          scrollTicking = true;
          window.requestAnimationFrame(function () {
            updateScrollEffects();
            scrollTicking = false;
          });
        }, { passive: true });
        window.addEventListener("resize", updateScrollEffects);
        bindImageFallbacks(document);
      }

      function init() {
        createGallery();
        createAnalysis();
        createSources();
        bindEvents();
        setupReveal();
        updateScrollEffects();
      }

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }
    }());

