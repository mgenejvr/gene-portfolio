document.addEventListener("DOMContentLoaded", function() {
// Download CV button functionality
document.getElementById("download-cv-btn").addEventListener("click", function() {
    // Path to your CV file
    const cvUrl = 'https://drive.google.com/file/d/1S_M2IQkwaMK6_zIjWqhJ-tiBmmSxIan7/view?usp=sharing'; // Update this path
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mary_Gene_Javier_Resume.pdf'; // Desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
});