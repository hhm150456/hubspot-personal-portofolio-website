const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const links = navLinks.querySelectorAll("a");

    // Toggle menu and hamburger animation
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Close menu when link clicked
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });