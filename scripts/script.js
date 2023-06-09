
const setUpThemeToggle = () => {

    const lightTheme = {
        "--accent-colour": "#6200ff",
        "--primary-font-colour": "#000000",
        "--secondary-font-colour": "#e6e6e6",
        "--body-background": "#e6e6e6",
        "--heading-background": "#d6d6d6",
        "--navbar-background": "#999999",
        "--button-background": "#cccccc",
        "--theme-button-background": "#aaaaaa",
        "--input-background": "#cdcdcd",
        "--project-overlay": "#e6e6e6bb",
    }

    const darkTheme = {
        "--accent-colour": "#ffb400",
        "--primary-font-colour": "#e6e6e6",
        "--secondary-font-colour": "#000000",
        "--body-background": "#000000",
        "--heading-background": "#212121",
        "--navbar-background": "#181818",
        "--button-background": "#2b2a2a",
        "--theme-button-background": "#4b4b4b",
        "--input-background": "#252525",
        "--project-overlay": "#000000cc",
    }

    const themeButton = document.querySelector(".theme-toggle");

    themeButton.addEventListener("click", () => {

        if (themeButton.classList.contains("set-light-theme")) {
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

        themeButton.classList.toggle("set-light-theme");
    });
}

const observeSections = () => {
    
    const options = {
        threshold: 0.3,
    }
    
    const observer = new IntersectionObserver((entries) => {
    
        entries.forEach(entry => {
    
            const sectionLink = document.querySelector(`a[href="#${entry.target.id}"]`);
    
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                sectionLink.classList.add("displayed");
    
            } else {
                entry.target.classList.remove("is-visible");
                sectionLink.classList.remove("displayed");
            }
        })
    }, options);
    
    const sections = document.querySelectorAll("#home, #about, #skills, #projects, #contact");
    
    sections.forEach(section => {
    
        observer.observe(section);
    });
}

const displayEmail = () => {

    const encodedEmail = "amVzcy5zaGlAbWFpbC51dG9yb250by5jYQ==";
    const email = document.querySelector("#email");
    email.innerHTML = atob(encodedEmail);
    email.setAttribute("href", "mailto:".concat(atob(encodedEmail)));
}

setUpThemeToggle();
observeSections();
displayEmail();
