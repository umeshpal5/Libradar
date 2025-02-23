// Sample library data
let libraries = [
    { name: 'Central Library', location: 'Jaipur, Rajasthan', lat: 26.9124, lng: 75.7873 },
    { name: 'West End Library', location: 'Udaipur, Rajasthan', lat: 24.5854, lng: 73.7125 },
    { name: 'East Side Library', location: 'Jodhpur, Rajasthan', lat: 26.2389, lng: 73.0243 }
];

// Function to load the map
function loadMap() {
    let map = L.map('map').setView([26.9124, 75.7873], 7);
    
    // Add OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    
    // Add markers for libraries
    libraries.forEach(lib => {
        L.marker([lib.lat, lib.lng])
            .addTo(map)
            .bindPopup(`<b>${lib.name}</b><br>${lib.location}`);
    });
}

// Function to search for libraries
function searchLibrary() {
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
            div.innerHTML = `<h3>${lib.name}</h3><p>Location: ${lib.location}</p>`;
            libraryList.appendChild(div);
        });
    }
}

// Redirect to Super Admin Login
function openSuperAdminLogin() {
    window.location.href = 'superadmin.html';
}

// Redirect to Admin Login
function openAdminLogin() {
    window.location.href = 'admin.html';
}

// Load the map on page load
window.onload = loadMap;