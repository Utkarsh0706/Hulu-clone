
document.addEventListener("DOMContentLoaded", function () {
   
    const section = document.getElementById("section");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
   
    // Set the default background image
    section.style.backgroundImage = "url('./images/sports.png')";


    button1.addEventListener("click", () => {
        section.style.backgroundImage = "url('./images/sports.png')";
        section.querySelector("h1").textContent = "Live Sports";
        section.querySelector("p").textContent = "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more. Includes top local and national sports networks like ABC, CBS Sports Network, ESPN, FOX, FS1, TNT, NFL Network and more.";
    });

    button2.addEventListener("click", () => {
        section.style.backgroundImage = "url('./images/women.png')";
        section.querySelector("h1").textContent = "Biggest Events";
        section.querySelector("p").textContent = "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.";
       
    });

    button3.addEventListener("click", () => {
        section.style.backgroundImage = "url('./images/news.png')";
        section.querySelector("h1").textContent = "Breaking News";
        section.querySelector("p").textContent = "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.";
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav a");
    const circleContainers = document.querySelectorAll(".circles");

    function setActiveSection(sectionId) {
        sections.forEach((section) => {
            section.classList.remove("active");
        });

        const activeSection = document.getElementById(sectionId);
        activeSection.classList.add("active");

        // Update the circular images when a new section becomes active
        updateCircularImages(sectionId);
    }

    function updateCircularImages(sectionId) {
        const activeSection = document.getElementById(sectionId);
        const circleContainer = activeSection.querySelector(".circles");
        const images = circleContainer.querySelectorAll(".circle img");

        // Replace images with new ones for the active section
        images.forEach((img, index) => {
            img.src = `image${sectionId.slice(-1)}_${index + 1}.jpg`;
            img.alt = `Image ${sectionId.slice(-1)}_${index + 1}`;
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            setActiveSection(sectionId);
        });
    });

    // Initialize scrollspy
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                setActiveSection(sectionId);
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});

