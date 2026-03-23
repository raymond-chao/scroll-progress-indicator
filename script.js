const progressBar = document.getElementById('progress-bar');
const badge = document.getElementById('badge');

function updateProgressBar() {
    //top
    const scrollTop = window.scrollY;
    //total scroblable height
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.round((scrollTop / docHeight) * 100);

    progressBar.style.width = progress + '%';
    badge.textContent = progress + '% Läst';

    if (progress >= 100) {
        badge.classList.add('complete');
        badge.textContent = 'Complete!';
    } else {
        badge.classList.remove('complete');
    }
}

window.addEventListener('scroll', updateProgressBar);