document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  const x = document.getElementById("close");

  const revealerNav = window.revealer({
    revealElementSelector: ".nav-js",
    options: {
      anchorSelector: ".nav-btn-js",
    },
  });

  const actionBtn = document.querySelector(".nav-btn-js");
  actionBtn.addEventListener("click", () => {
    if (!revealerNav.isRevealed()) {
      revealerNav.reveal();
      actionBtn.setAttribute("data-open", true);
      x.classList.remove("d-none");
      toggle.classList.add("d-none");
    } else {
      revealerNav.hide();
      actionBtn.setAttribute("data-open", false);
      x.classList.add("d-none");
      toggle.classList.remove("d-none");
    }
  });
});
