// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showAdmissionForm() {
    document.getElementById('admission-form').style.display = 'flex';
}

document.getElementById('admission-form').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

//Counter Animation
function animateCounter(element, start, end, duration) {
            let startTime = null;
            function step(currentTime) {
                if (!startTime) startTime = currentTime;
                let progress = Math.min((currentTime - startTime) / duration, 1);
                let currentValue = Math.floor(progress * (end - start) + start);
                let variation = [1, 2, 3, 5, 6][Math.floor(Math.random() * 5)];
                element.innerText = (currentValue + variation) + "+";
                element.style.color = `rgb(${Math.floor(255 - progress * 255)}, ${Math.floor(255 - progress * 255)}, ${Math.floor(255 - progress * 255)})`;
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            }
            requestAnimationFrame(step);
        }
        
        document.addEventListener("DOMContentLoaded", () => {
            animateCounter(document.getElementById("current-students"), 0, 470, 2000);
            animateCounter(document.getElementById("passed-students"), 0, 900, 2000);
        });
// Example interaction: Add a pop-up alert when the "Apply Now" button is clicked
const applyButton = document.querySelector("#admissions button");
if (applyButton) {
    applyButton.addEventListener("click", () => {
        alert("Thank you for your interest! Our admissions team will get back to you shortly.");
    });
}



