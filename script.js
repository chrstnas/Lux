    // Display listings
    function displayListings() {
        listingsContainer.innerHTML = '';
        listings.forEach(listing => {
            const listingElement = document.createElement('div');
            listingElement.classList.add('listing');
            listingElement.innerHTML = `
                <h3>${listing.title}</h3>
                <p>${listing.description}</p>
                <p>Price: $${listing.price}</p>
            `;
            listingsContainer.appendChild(listingElement);
        });
    }

    // Handle form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const userType = document.getElementById('user-type').value;
        alert(`Thank you for signing up! We'll contact you at ${email} as a ${userType}.`);
        signupForm.reset();
    });

    // Initial display of listings
    displayListings();
});