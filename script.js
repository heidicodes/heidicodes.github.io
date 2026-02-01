function showContent(section) {
    let content = document.getElementById("content");

    if (section === "map") {
        content.innerHTML = `
            <h1>Campus Map</h1>
            <p><a href="#" target="_blank">Click here to view the campus map</a></p>
        `;
    }

    if (section === "study") {
        content.innerHTML = `
            <h1>Study Spots</h1>
            <ul>
                <li>Library – Quiet Zone</li>
                <li>Study Rooms</li>
                <li>Student Center</li>
            </ul>
        `;
    }

    if (section === "hangout") {
        content.innerHTML = `
            <h1>Hangout Spots</h1>
            <ul>
                <li>Cafeteria</li>
                <li>Student Lounge</li>
                <li>Outdoor Seating Area</li>
            </ul>
        `;
    }

    if (section === "food") {
        content.innerHTML = `
            <h1>Food Spots</h1>
            <ul>
                <li>Campus Cafe</li>
                <li>Food Court</li>
                <li>Nearby Restaurants</li>
            </ul>
        `;
    }

    if (section === "transit") {
        content.innerHTML = `
            <h1>Transit</h1>
            <ul>
                <li>Bus Stops</li>
                <li>Train Station</li>
                <li>Bike Rentals</li>
            </ul>
        `;
    }

    if (section === "banks") {
        content.innerHTML = `
            <h1>Banks & ATMs</h1>
            <ul>
                <li>Main Campus ATM</li>
                <li>Nearby Banks</li>
            </ul>
        `;
    }
}
