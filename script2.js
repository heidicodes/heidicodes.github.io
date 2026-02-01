fetch("data.json")
  .then(response => response.json())
  .then(data => {

    function createCard(containerId, title, imgSrc, imgAlt, description, items) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const card = document.createElement("div");
      card.classList.add("card");

      // Title
      const cardTitle = document.createElement("h3");
      cardTitle.textContent = title;
      card.appendChild(cardTitle);

      // Image
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = imgAlt;
      img.style.width = "100%";
      img.style.height = "160px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "8px";
      img.style.margin = "0.5rem 0";
      card.appendChild(img);

      // Description
      const cardDesc = document.createElement("p");
      cardDesc.textContent = description;
      card.appendChild(cardDesc);

      // List
      const list = document.createElement("ul");
      items.forEach(place => {
        const li = document.createElement("li");
        li.textContent = place;
        list.appendChild(li);
      });
      card.appendChild(list);

      container.appendChild(card);
    }

    // ---------------- FOOD CARDS ----------------
    createCard(
      "dining-halls",
      "Dining Halls & Cafeteria",
      "https://winters.ampd.yorku.ca/wp-content/uploads/sites/15/2011/10/IMG_8128.jpg",
      "Dining Hall",
      "Traditional cafeteria-style dining.",
      data.DiningHalls
    );

    createCard(
      "york-lanes",
      "York Lanes",
      "https://www.excal.on.ca/wp-content/uploads/2022/02/N_YorkBusinesses_RiddhiJani.png",
      "York Lanes Food Court",
      "Various types of eateries.",
      data.YorkLanes
    );

    createCard(
      "the-quad",
      "The Quad",
      "https://www.buttcon.com/wp-content/uploads/2021/05/MichaelMuraz-QuadResidence08.jpg",
      "The Quad Food Area",
      "Popular drink shops and eateries.",
      data.TheQuad
    );

    createCard(
      "central-square",
      "Central Square",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhga9gh_oybQcz7ofRvj3DnGUUXBrlPtvLcpYLI2We8Wi2AfobWEd1y3MCoBswjCEKo4qCjWsYEtjj8JjJR1jb3b6EozZnSZSuLVuAh_S6VsvwqKskouRX0RQorjIp37LPirHTuk-wClS9R/s1600/DSC_0255.JPG",
      "Central Square Cafeteria",
      "Cafeteria-style dining and shops.",
      data.Centralsquare
    );

  })
  .catch(error => console.log("Error loading data:", error));
