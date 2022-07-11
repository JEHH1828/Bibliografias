const cdqr = document.getElementById('cdqr');
const form = document.getElementById('form');

const qr= new QRCode(cdqr);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    qr.makeCode(window.location.href);
});