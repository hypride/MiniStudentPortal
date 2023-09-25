document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');

    
    // Array to store multiple username-password pairs
    const users = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' },
        { username: 'user3', password: 'pass3' }
        // Add more username-password pairs as needed
    ];

    loginButton.addEventListener('click', function () {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Check if the entered username and password match any in the array
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            
            // Redirect to the next page (change 'next_page.html' to your desired URL)
            document.getElementById("container").style.display = "block";
            document.getElementById("log_container").style.display = "none";
        } else {
            alert("Wrong Data!")
        }
    });
});
