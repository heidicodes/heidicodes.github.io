fetch("data.json")
  .then(response => response.json())
    .then(data => {
    // --- Library card ---
        const libraryContainer = document.getElementById("library-container");
        
        const libraryCard = document.createElement("div");
        libraryCard.classList.add("card");

        const libraryTitle = document.createElement("h3");
        libraryTitle.textContent = "Library";
        libraryCard.appendChild(libraryTitle);

        const libraryDesc = document.createElement("p");
        libraryDesc.textContent = "Quiet spaces, Wi-Fi, and study rooms available.";
        libraryCard.appendChild(libraryDesc);

        const libraryList = document.createElement("ul");
        data.Library.forEach(place => {
            const li = document.createElement("li");
            li.textContent = place;
            libraryList.appendChild(li);
    });

        libraryCard.appendChild(libraryList);
        libraryContainer.appendChild(libraryCard);

        // Student Centers
        const studentContainer = document.getElementById("student-centers-container");
        const studentCard = document.createElement("div");
        studentCard.classList.add("card");

        const studentTitle = document.createElement("h3");
        studentTitle.textContent = "Student Centers";
        studentCard.appendChild(studentTitle);

        const studentDesc = document.createElement("p");
        studentDesc.textContent = "Group study areas and seating options.";
        studentCard.appendChild(studentDesc);

        const studentList = document.createElement("ul");
        data.StudentCentres.forEach(place => {
            const li = document.createElement("li");
            li.textContent = place;
            studentList.appendChild(li);
        });
        studentCard.appendChild(studentList);
        studentContainer.appendChild(studentCard);

        //Other buildings
        const otherContainer = document.getElementById("study-spaces-container");
        const otherCard = document.createElement("div");
        otherCard.classList.add("card");

        const otherTitle = document.createElement("h3");
        otherTitle.textContent = "Study Spaces";
        otherCard.appendChild(otherTitle);

        const otherDesc = document.createElement("p");
        otherDesc.textContent = "Various buildings with study-friendly environments.";
        otherCard.appendChild(otherDesc);

        const otherList = document.createElement("ul");
        data.studySpaces.forEach(place => {
            const li = document.createElement("li");
            li.textContent = place;
            otherList.appendChild(li);
        });
        otherCard.appendChild(otherList);
        otherContainer.appendChild(otherCard);

        
  })
  
  .catch(error => {
    console.log("Error loading data:", error);
  });