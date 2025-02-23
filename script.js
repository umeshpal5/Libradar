document.addEventListener("DOMContentLoaded", function () {
    let map = L.map('map').setView([27.0238, 74.2179], 7); // Default view on Rajasthan

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let libraries = [
        { name: "Jaipur Library", lat: 26.9124, lon: 75.7873 },
        { name: "Jodhpur Library", lat: 26.2389, lon: 73.0243 },
        { name: "Udaipur Library", lat: 24.5854, lon: 73.7125 }
    ];

    libraries.forEach(lib => {
        let marker = L.marker([lib.lat, lib.lon]).addTo(map);
        marker.bindPopup(`<b>${lib.name}</b><br><button onclick="getDirections(${lib.lat}, ${lib.lon})">Get Directions</button>`);
    });

    window.searchLibrary = function () {
        let query = document.getElementById('searchBox').value.trim().toLowerCase();
        let libraryList = document.getElementById('libraryList');
        libraryList.innerHTML = '';

        let results = libraries.filter(lib => lib.name.toLowerCase().includes(query));

        if (results.length === 0) {
            libraryList.innerHTML = '<p>No libraries found.</p>';
        } else {
            results.forEach(lib => {
                let div = document.createElement('div');
                div.classList.add('library-item');
                div.innerHTML = `<h3>${lib.name}</h3><p>Location: ${lib.lat}, ${lib.lon}</p>`;
                libraryList.appendChild(div);
            });
        }
    };

    window.getDirections = function (lat, lon) {
        window.open(`https://www.openstreetmap.org/directions?engine=graphhopper_foot&route=${lat},${lon}`, '_blank');
    };
});