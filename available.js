// Get the element where donations will be displayed
const availableFoodList = document.getElementById('availableFoodList');
const clearButton = document.getElementById('clearButton');

// Retrieve the donation data from localStorage
const donations = JSON.parse(localStorage.getItem('donations')) || [];

// Display the donations if any
function displayDonations() {
  // Clear any existing data
  availableFoodList.innerHTML = '';

  // Display each donation in the list
  donations.forEach(donation => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Food Type:</strong> ${donation.foodType} <br>
      <strong>Quantity:</strong> ${donation.quantity} kg <br>
      <strong>Expiry Date:</strong> ${donation.expiry} <br>
      <strong>Donor Name:</strong> ${donation.donorName} <br>
      <strong>Contact:</strong> ${donation.contact} <br>
      <strong>Address:</strong> ${donation.address} <br>
      ${donation.foodPhotoUrl ? `<strong>Food Photo:</strong><br><img src="${donation.foodPhotoUrl}" alt="Food Image" style="max-width: 200px; margin-top: 10px;" />` : ''}
      <hr>
    `;
    availableFoodList.appendChild(listItem);
  });
}

// Display the donations when the page loads
displayDonations();

// Add an event listener for the "Clear All Donations" button
clearButton.addEventListener('click', function() {
  // Clear the donations data from localStorage
  localStorage.removeItem('donations');
  
  // Clear the food photo URL from localStorage
  localStorage.removeItem('donatedFoodImage');
  
  // Log to the console for debugging
  console.log('All donations and images have been cleared from localStorage.');

  // Clear the displayed list
  availableFoodList.innerHTML = '';

  // Optionally, refresh the page to clear the list (this ensures a fresh start)
  location.reload();

  // Or simply call displayDonations() to update the list
  displayDonations();
});
