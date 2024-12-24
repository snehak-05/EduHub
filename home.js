// Get references to necessary elements
const reviewText = document.getElementById('reviewText');
const reviewAuthor = document.getElementById('reviewAuthor');
const reviewContainer = document.querySelector('.review-container');
const addReviewBtn = document.getElementById('Submit');
const ratingStars = document.querySelectorAll('.star');
const overallRatingElement = document.getElementById('overallRating');
let currentRating = 0;

// Function to set overall rating
function setOverallRating(rating) {
    currentRating = rating;
    overallRatingElement.textContent = rating;

    // Update star display based on the current rating
    ratingStars.forEach((star, index) => {
        star.classList.toggle('selected', index < rating);
    });
}

// Highlight stars on hover
function highlightStars(rating) {
    ratingStars.forEach((star, index) => {
        star.classList.toggle('selected', index < rating);
    });
}

// Reset star highlighting
function resetStarHighlight() {
    ratingStars.forEach((star, index) => {
        star.classList.toggle('selected', index < currentRating);
    });
}

// Event listeners for star rating
ratingStars.forEach(star => {
    star.addEventListener('mouseover', () => highlightStars(star.dataset.value));
    star.addEventListener('mouseout', resetStarHighlight);
    star.addEventListener('click', () => setOverallRating(star.dataset.value));
});

// Function to add a review
addReviewBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button behavior

    const text = reviewText.value.trim();
    const author = reviewAuthor.value.trim();
    
    if (text && author) {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `<p class="review-text">"${text}"</p><p class="review-author">- ${author}</p>`;
        reviewContainer.appendChild(reviewDiv);

        // Clear the input fields
        reviewText.value = '';
        reviewAuthor.value = '';
    } else {
        alert("Please fill in both fields.");
    }
});

// Initialize star highlighting on page load
resetStarHighlight();
