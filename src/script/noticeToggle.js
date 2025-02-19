function noticeToggle() {
    const toggleBtn = document.querySelector('.header-notice__toggle');
    const notice = document.querySelector('.header-notice__content');

    const toggleNotice = () => {
        const isVisible = notice.dataset.visible === 'true';
        notice.dataset.visible = !isVisible;
        toggleBtn.setAttribute('aria-expanded', !isVisible);
    };

    toggleBtn.addEventListener('click', toggleNotice);
}

export default noticeToggle;