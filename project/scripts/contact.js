/* =============================================
   DATA — FAQ object literals
============================================= */

const faqs = [
  {
    question: "How quickly will you respond to my message?",
    answer:
      "We reply to every enquiry within 24 hours on working days. If you send a message over the weekend, expect to hear from us first thing Monday morning.",
  },
  {
    question: "Do I need a fully formed brief before contacting you?",
    answer:
      "Not at all. Many of our best projects started with a vague idea or a problem statement. Fill in as much as you know — we'll ask the right questions to get the rest.",
  },
  {
    question: "What information helps you give a faster quote?",
    answer:
      "The more context the better — your rough timeline, budget range, the type of work you need, and any examples of work you admire. Even rough answers to these help us give you a meaningful response faster.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients across Africa, Europe, and North America. All communication and project management happens remotely via tools like Notion, Figma, and Google Meet.",
  },
  {
    question: "Can I book a call instead of filling out the form?",
    answer:
      "Absolutely. Once you send a message, our first step is usually a 30-minute discovery call anyway. Mention in your message that you'd prefer to start with a call and we'll send a booking link directly.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "You'll get a confirmation email, and one of our team leads will review your brief and reach out personally within 24 hours to discuss next steps, timeline, and pricing.",
  },
];

/* =============================================
   PURE BUILDER FUNCTIONS
============================================= */

function buildFAQ(faq, index) {
  return `
    <div class="faq-item" data-index="${index}">
      <button class="faq-question" aria-expanded="false">
        ${faq.question}
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="faq-answer">${faq.answer}</div>
    </div>`;
}

/* =============================================
   VALIDATION HELPERS
============================================= */

function showError(fieldId, errorId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  if (field) field.classList.add("error");
  if (error) error.textContent = message;
}

function clearError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  if (field) field.classList.remove("error");
  if (error) error.textContent = "";
}

function validateForm() {
  let valid = true;

  // first name
  const firstName = document.getElementById("first-name").value.trim();
  if (!firstName) {
    showError("first-name", "err-first-name", "First name is required.");
    valid = false;
  } else {
    clearError("first-name", "err-first-name");
  }

  // last name
  const lastName = document.getElementById("last-name").value.trim();
  if (!lastName) {
    showError("last-name", "err-last-name", "Last name is required.");
    valid = false;
  } else {
    clearError("last-name", "err-last-name");
  }

  // email
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showError("email", "err-email", "Email address is required.");
    valid = false;
  } else if (!emailRegex.test(email)) {
    showError("email", "err-email", "Please enter a valid email address.");
    valid = false;
  } else {
    clearError("email", "err-email");
  }

  // service
  const service = document.getElementById("service").value;
  if (!service) {
    showError("service", "err-service", "Please select a service.");
    valid = false;
  } else {
    clearError("service", "err-service");
  }

  // message
  const message = document.getElementById("message").value.trim();
  if (!message) {
    showError("message", "err-message", "Please tell us about your project.");
    valid = false;
  } else if (message.length < 20) {
    showError(
      "message",
      "err-message",
      "Please provide a bit more detail (at least 20 characters).",
    );
    valid = false;
  } else {
    clearError("message", "err-message");
  }

  return valid;
}

/* =============================================
   INIT — everything DOM-dependent goes here
============================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ── hamburger ── */
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navList.classList.toggle("active");
    });
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  }

  /* ── render FAQs ── */
  const faqList = document.getElementById("faq-list");
  if (faqList) {
    faqList.innerHTML = faqs.map((faq, i) => buildFAQ(faq, i)).join("");

    // accordion toggle
    faqList.addEventListener("click", (e) => {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const item = btn.parentElement;
      const isOpen = item.classList.contains("open");

      // close all
      faqList
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.remove("open"));

      // open clicked if it was closed
      if (!isOpen) item.classList.add("open");
    });
  }

  /* ── budget pill selection ── */
  const budgetOptions = document.getElementById("budget-options");
  const budgetInput = document.getElementById("budget");

  if (budgetOptions && budgetInput) {
    budgetOptions.addEventListener("click", (e) => {
      const btn = e.target.closest(".budget-btn");
      if (!btn) return;
      budgetOptions
        .querySelectorAll(".budget-btn")
        .forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      budgetInput.value = btn.dataset.value;
    });
  }

  /* ── character counter ── */
  const messageField = document.getElementById("message");
  const charCountEl = document.getElementById("char-count");
  const MAX_CHARS = 1000;

  if (messageField && charCountEl) {
    messageField.addEventListener("input", () => {
      const len = messageField.value.length;
      charCountEl.textContent = len;
      const wrap = charCountEl.parentElement;
      if (len > MAX_CHARS) {
        wrap.classList.add("over");
        messageField.value = messageField.value.slice(0, MAX_CHARS);
        charCountEl.textContent = MAX_CHARS;
      } else {
        wrap.classList.remove("over");
      }
    });
  }

  /* ── live inline validation (on blur) ── */
  const fields = ["first-name", "last-name", "email", "message"];
  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("blur", () => {
      // re-run validation just for this field
      const val = el.value.trim();
      const errId = "err-" + id;
      if (id === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!val) {
          showError(id, errId, "Email address is required.");
        } else if (!emailRegex.test(val)) {
          showError(id, errId, "Please enter a valid email address.");
        } else {
          clearError(id, errId);
        }
      } else {
        if (!val) {
          const labels = {
            "first-name": "First name",
            "last-name": "Last name",
            message: "Project brief",
          };
          showError(id, errId, `${labels[id] || "This field"} is required.`);
        } else {
          clearError(id, errId);
        }
      }
    });

    // clear error on focus
    el.addEventListener("focus", () => clearError(id, "err-" + id));
  });

  /* ── form submission ── */
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const btnText = document.getElementById("btn-text");
  const btnLoading = document.getElementById("btn-loading");
  const successBanner = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      // show loading state
      submitBtn.disabled = true;
      btnText.style.display = "none";
      btnLoading.style.display = "flex";

      // simulate async submission (replace with real fetch/API call)
      setTimeout(() => {
        // reset button
        submitBtn.disabled = false;
        btnText.style.display = "flex";
        btnLoading.style.display = "none";

        // show success
        if (successBanner) {
          successBanner.classList.add("show");
          successBanner.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }

        // reset form
        form.reset();
        if (budgetOptions) {
          budgetOptions
            .querySelectorAll(".budget-btn")
            .forEach((b) => b.classList.remove("selected"));
        }
        if (budgetInput) budgetInput.value = "";
        if (charCountEl) charCountEl.textContent = "0";

        // hide success banner after 6s
        setTimeout(() => {
          if (successBanner) successBanner.classList.remove("show");
        }, 6000);
      }, 1800);
    });
  }

  /* ── footer year & last modified ── */
  const yearEl = document.getElementById("current-year");
  const modifiedEl = document.getElementById("last-modified");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (modifiedEl) modifiedEl.textContent = document.lastModified;
});
