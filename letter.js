// js/letter.js
window.Letter = (function () {
    function init() {
        const fab = document.querySelector('.letter-fab');
        const panel = document.querySelector('.letter-panel');
        const btnClose = document.getElementById('letterClose');
        if (!fab || !panel) return;

        function openPanel(){ panel.hidden = false; }
        function closePanel(){ panel.hidden = true; }

        fab.addEventListener('click', () => panel.hidden ? openPanel() : closePanel());
        btnClose && btnClose.addEventListener('click', closePanel);
    }
    return { init };
})();
