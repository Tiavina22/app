// Vérifie si l'utilisateur a déjà visité le site
let isFirstVisit = localStorage.getItem('isFirstVisit');

function toLogin() {
    window.location.href = 'HomePage.html';

    localStorage.setItem('isFirstVisit', 'false');
}

if (isFirstVisit === null || isFirstVisit === 'true') {
    seeWelcome1();
} else {
    toLogin();
}
