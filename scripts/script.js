

const setUpThemeToggle = () => {

    const lightTheme = {
        "--accent-colour": "#002266",
        "--body-background": "#ffffff",
        "--primary-font-colour": "#000000",
    }

    const darkTheme = {
        "--accent-colour": "#ffb400",
        "--body-background": "#000000",
        "--primary-font-colour": "#ffffff",
    }

    const themeButton = document.querySelector(".theme-toggle");

    themeButton.addEventListener("click", () => {

        if (themeButton.classList.contains("dark-theme")) {
            for (let key in lightTheme) {
                document.documentElement.style.setProperty(key, lightTheme[key]);
            }
            themeButton.innerHTML = `<i class="fa-solid fa-moon" title="Click to toggle dark theme">`;

        } else {
            for (let key in darkTheme) {
                document.documentElement.style.setProperty(key, darkTheme[key]);
            }
            themeButton.innerHTML = `<i class="fa-solid fa-sun" title="Click to toggle light theme">`;
        }

        themeButton.classList.toggle("dark-theme");
        themeButton.classList.toggle("light-theme");
    });
}

const displayPageLocation = () => {

    const options = {
        threshold: 0.5
    }
    
    const observer = new IntersectionObserver((entries) => {
    
        entries.forEach(entry => {
    
            const sectionLink = document.querySelector(`a[href="#${entry.target.id}"]`);
    
            if (entry.isIntersecting) {
                sectionLink.classList.add("displayed");
    
            } else {
                sectionLink.classList.remove("displayed");
            }
        })
    }, options);
    
    const sections = document.querySelectorAll("#home, #about, #skills, #projects, #contact");
    
    sections.forEach(section => {
    
        observer.observe(section);
    });
}

setUpThemeToggle();
displayPageLocation();
