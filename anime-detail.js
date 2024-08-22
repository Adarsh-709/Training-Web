
document.addEventListener('DOMContentLoaded', () => {
    const animeData = JSON.parse(localStorage.getItem('selectedAnime'));

    if (animeData) {
        document.getElementById('anime-title').textContent = animeData.title;
        document.getElementById('anime-description').textContent = animeData.description;
        document.getElementById('anime-image').src = animeData.image;
        document.getElementById('anime-type').textContent = animeData.type;
        document.getElementById('anime-studios').textContent = animeData.studios;
        document.getElementById('anime-date').textContent = animeData.date;
        document.getElementById('anime-status').textContent = animeData.status;
        document.getElementById('anime-genre').textContent = animeData.genre;
        document.getElementById('anime-score').textContent = animeData.score;
        document.getElementById('anime-rating').textContent = animeData.rating;
        document.getElementById('anime-duration').textContent = animeData.duration;
        document.getElementById('anime-quality').textContent = animeData.quality;
        document.getElementById('anime-views').textContent = animeData.views;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const selectedAnime = JSON.parse(localStorage.getItem('selectedAnime'));
    if (selectedAnime) {
        document.getElementById('watch-now-btn').addEventListener('click', function() {
            window.open(selectedAnime.watchUrl, '_blank');
        });
    }
});


