console.log('hi')
// Function to open GitHub account
function openGitHub() {
    // Replace 'your-username' with your actual GitHub username
    var githubUrl = 'https://github.com/encoder-shoaib';
    window.open(githubUrl, '_blank');
}
function openLinkdin() {
    // Replace 'your-username' with your actual GitHub username
    var githubUrl = 'https://www.linkedin.com/feed/';
    window.open(githubUrl, '_blank');
}
function openFacebook() {
    // Replace 'your-username' with your actual GitHub username
    var githubUrl = 'https://www.facebook.com/profile.php?id=100075419709633';
    window.open(githubUrl, '_blank');
}

// Event listener for image click
document.getElementById('githubButtonImage').addEventListener('click', openGitHub);

// Event listener for button click
document.getElementById('linkdinButtonImage').addEventListener('click', openLinkdin);

// Event listener for button click
document.getElementById('facebookButtonImage').addEventListener('click', openFacebook);

