document.getElementById('feedback-form3').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name3').value;
    const email = document.getElementById('email3').value;
    const feedback = document.getElementById('feedback3').value;
    const rating = document.getElementById('rating3').value;

    if (name && email && feedback && rating) {
        alert('Thank you for your feedback!');
        // Here you would typically send the data to your server
        // e.g., using fetch or XMLHttpRequest
    } else {
        alert('Please fill out all fields.');
    }
});
