(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && refs.modal.classList.contains("is-open")) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.body.classList.toggle("modal-open");
  }
})();
