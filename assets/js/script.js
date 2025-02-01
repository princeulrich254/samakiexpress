window.addEventListener('DOMContentLoaded', function () {

    const heroImageWrapper = document.querySelector('.hero-image-wrapper');
      heroImageWrapper.classList.add('show');
    });
  
    // Mobile menu toggle
    const menuOpenButton = document.querySelector("#menu-open-button");  // Corrected to match the selector
    const menuCloseButton = this.document.querySelector("#menu-close-button");

      menuOpenButton.addEventListener("click", () => {
      document.body.classList.toggle("show-mobile-menu"); // Toggle the class for mobile menu visibility
      });

      menuCloseButton.addEventListener("click", () => menuOpenButton.click
      ());
  
      document.addEventListener("DOMContentLoaded", () => {
        const aboutImage = document.querySelector(".about-image");
      
        if (aboutImage) {
          const observer = new IntersectionObserver(
            (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  // Add the class that makes the image visible
                  entry.target.classList.add("in-view");
                  observer.unobserve(entry.target); // Stop observing once in view
                }
              });
            },
            { threshold: 0.5 } // Trigger when 50% of the image is visible
          );
      
          observer.observe(aboutImage);
        }
      
        // Hover interaction for the image
        const addHoverEffect = (image) => {
          image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.1)";
            image.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
          });
      
          image.addEventListener("mouseout", () => {
            image.style.transform = "scale(1)";
            image.style.boxShadow = "none";
          });
        };
      
        if (aboutImage) {
          addHoverEffect(aboutImage);
        }
      });
      