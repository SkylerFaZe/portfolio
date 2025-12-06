let map = L.map('map').setView([51.28974, 4.48982], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.286474, 4.485618]).addTo(map)
    .bindPopup('<b>201 Bredabaan</b><br>2930 Brasschaat')