/* Vansh Singh — portfolio
   Progressive enhancement only: scroll-reveal, sticky-header hairline,
   footer year. No dependencies, no build step. */

(function () {
  "use strict";

  /* Current year in footer */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Scroll-reveal: fade/translate elements into view once.
     If motion is reduced or IntersectionObserver is missing, show everything. */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* Sticky header gains a hairline border once the page scrolls. */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Contact form: POST to Web3Forms as JSON, show inline status, no navigation.
     Until a real access key is pasted in (replacing the placeholder), the
     submit is short-circuited and the visitor is pointed to the direct email. */
  var form = document.getElementById("contact-form");
  var statusEl = document.getElementById("contact-form-status");
  var PLACEHOLDER = "WEB3FORMS_ACCESS_KEY_PLACEHOLDER";

  if (form && statusEl) {
    var setStatus = function (msg, kind) {
      statusEl.textContent = msg;
      statusEl.hidden = false;
      statusEl.classList.remove("is-ok", "is-error");
      if (kind) statusEl.classList.add(kind);
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var keyField = form.querySelector('input[name="access_key"]');
      var key = keyField ? keyField.value.trim() : "";
      if (!key || key === PLACEHOLDER) {
        setStatus(
          "Email isn't wired up yet — please email me directly at vsingh97@asu.edu.",
          "is-error"
        );
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalLabel = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      setStatus("Sending…", "is-ok");

      var data = Object.fromEntries(new FormData(form).entries());

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(function (res) {
          return res.json().then(function (json) {
            return { ok: res.ok && json.success, json: json };
          });
        })
        .then(function (result) {
          if (result.ok) {
            form.reset();
            setStatus("Thanks — I'll get back to you.", "is-ok");
          } else {
            setStatus(
              "Something went wrong — please email me directly at vsingh97@asu.edu.",
              "is-error"
            );
          }
        })
        .catch(function () {
          setStatus(
            "Couldn't send right now — please email me directly at vsingh97@asu.edu.",
            "is-error"
          );
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
          }
        });
    });
  }
})();
