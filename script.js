let map;

// Rajasthan Libraries Data
let libraries = [
    { name: "Jaipur Central Library", lat: 26.9124, lng: 75.7873 },
    { name: "Jodhpur Public Library", lat: 26.2389, lng: 73.0243 },
    { name: "Udaipur City Library", lat: 24.5854, lng: 73.7125 }
];

// Initialize Map (Centered on Rajasthan)
function initMap() {
    map = L.map('map').setView([26.9124, 75.7873], 7); // Center on Rajasthan

    // Add OpenStreetMap Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    displayLibrariesOnMap();
}

// Display Libraries on Map
function displayLibrariesOnMap() {
    libraries.forEach(library => {
        let marker = L.marker([library.lat, library.lng]).addTo(map);
        marker.bindPopup(`<h3>${library.name}</h3><button onclick="getDirections(${library.lat}, ${library.lng})">Get Directions</button>`);
    });
}

// Search Libraries
function searchLibrary() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let filteredLibraries = libraries.filter(lib => lib.name.toLowerCase().includes(query));

    if (filteredLibraries.length === 0) {
        alert("No libraries found!");
    } else {
        let firstResult = filteredLibraries[0];
        map.setView([firstResult.lat, firstResult.lng], 10);
    }
}

// Get Directions to Library
function getDirections(lat, lng) {
    window.open(`https://www.openstreetmap.org/directions?engine=osrm_car&route=${lat},${lng}`, "_blank");
}

// Toggle Admin Menu
function toggleAdminMenu() {
    let menu = document.getElementById("adminMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Open & Close Login Modals
function openSuperAdminLogin() {
    document.getElementById("superAdminModal").style.display = "block";
}

function closeSuperAdminLogin() {
    document.getElementById("superAdminModal").style.display = "none";
}

function openAdminLogin() {
    document.getElementById("adminModal").style.display = "block";
}

function closeAdminLogin() {
    document.getElementById("adminModal").style.display = "none";
}

// Initialize the map
initMap();
