const messages = [
    "Wishing you a season filled with warm moments and cherished memories!",
    "May your days be merry and bright this Christmas!",
    "Sending you peace, love, and joy this holiday season!",
    "Have a magical Christmas filled with laughter and joy!",
    "May your heart be light and your Christmas be white!"
];

function showMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('userMessage').innerText = messages[randomIndex];
}