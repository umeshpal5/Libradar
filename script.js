document.getElementById("superAdminBtn").addEventListener("click", function() {
    document.getElementById("superAdminLogin").style.display = "block";
});

document.getElementById("adminBtn").addEventListener("click", function() {
    document.getElementById("adminLogin").style.display = "block";
});

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Super Admin Login
function superAdminLogin() {
    let password = document.getElementById("superAdminPassword").value;
    if (password === "superadmin123") {  
        alert("Super Admin Logged In");
    } else {
        alert("Incorrect Password");
    }
}

// Admin Login
function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    let approvedAdmins = JSON.parse(localStorage.getItem("approvedAdmins")) || [];

    let adminFound = approvedAdmins.find(admin => admin.email === email && admin.password === password);

    if (adminFound) {
        alert("Admin Logged In");
    } else {
        alert("Invalid Credentials or Not Approved");
    }
}

// Library Search
function searchLibrary() {
    let query = document.getElementById('searchBox').value.trim().toLowerCase();
    let libraryList = document.getElementById('libraryList');
    libraryList.innerHTML = '';

    let sampleLibraries = [
        { name: 'Jaipur Central Library', location: 'Rajasthan' },
        { name: 'Udaipur Public Library', location: 'Rajasthan' },
        { name: 'Delhi Knowledge Center', location: 'Delhi' }
    ];

    let results = sampleLibraries.filter(lib => lib.name.toLowerCase().includes(query) || lib.location.toLowerCase().includes(query));

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