const modalController = () => {
    const openModal = document.querySelectorAll(".modal__open");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".modal__close");

    modal.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    `;

    openModal.forEach(btn => {
        btn.addEventListener('click', () => {
            if (modal.style.visibility === 'hidden') {
                modal.style.visibility = 'visible';
                modal.style.opacity = 1;
            };


        });

    });

    closeModal.addEventListener('click', () => {
        if (modal.style.visibility === "visible") {
            modal.style.opacity = 0;

            setTimeout(() => {
                modal.style.visibility = 'hidden';
            }, 350)
        }

        
    });

};

modalController();