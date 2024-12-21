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

// Example interaction: Add a pop-up alert when the "Apply Now" button is clicked
const applyButton = document.querySelector("#admissions button");
if (applyButton) {
    applyButton.addEventListener("click", () => {
        alert("Thank you for your interest! Our admissions team will get back to you shortly.");
    });
}



