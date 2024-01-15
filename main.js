document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enterButton').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior

        var buttonContainer = document.getElementById('enterButtonContainer');
        var welcomeText = document.getElementById('welcomeText');
        var socialIcons = document.getElementById('socialIcons'); // Get the social icons by ID

        // Hide the button container
        buttonContainer.style.display = 'none';

        // Add animate.css classes to the welcome text
        welcomeText.classList.add('animate__animated', 'animate__fadeInDown');
        welcomeText.style.display = 'block';
        setTimeout(function() {
            welcomeText.style.opacity = '1'; // Ensure it's visible
        }, 100); // Short delay to ensure smooth animation

        // Set a timeout to delay the icons animation
        setTimeout(function() {
            // Make icons visible and add animate.css fadeInUp animation
            socialIcons.style.display = 'block';
            socialIcons.style.visibility = 'visible';
            socialIcons.style.opacity = '1';
            socialIcons.classList.add('animate__animated', 'animate__fadeInUp');
        }, 600); // Delay the icons animation to start after the welcome text
    });
});