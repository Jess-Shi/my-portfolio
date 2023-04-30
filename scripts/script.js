
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


displayPageLocation();

// document.querySelector("button").addEventListener("click", () => {
//     document.documentElement.style.setProperty('--accent-colour', '#00ff00');
// })