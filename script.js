function openMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function searchLibrary() {
    let query = document.getElementById('searchBox').value.trim().toLowerCase();
    let libraryList = document.getElementById('libraryList');
    libraryList.innerHTML = '';

    let libraries = [
        { name: 'Central Library', location: 'Downtown' },
        { name: 'West End Library', location: 'West End' },
        { name: 'Rajasthan Library', location: 'Jaipur, Rajasthan' }
    ];

    let results = libraries.filter(lib => lib.location.toLowerCase().includes(query));

    if (results.length === 0) {
        libraryList.innerHTML = '<p>No libraries found.</p>';
    } else {
        results.forEach(lib => {
            let div = document.createElement('div');
            div.innerHTML = `<h3>${lib.name}</h3><p>Location: ${lib.location}</p>`;
            libraryList.appendChild(div);
        });
    }
}