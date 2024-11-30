
const availableFoodList = document.getElementById('availableFoodList');
const clearButton = document.getElementById('clearButton');


const donations = JSON.parse(localStorage.getItem('donations')) || [];


function displayDonations() {
 
  availableFoodList.innerHTML = '';

  
  donations.forEach(donation => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Food Type:</strong> ${donation.foodType} <br>
      <strong>Quantity:</strong> ${donation.quantity} Plate <br>
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


displayDonations();


clearButton.addEventListener('click', function() {
  
  localStorage.removeItem('donations');
  localStorage.removeItem('donatedFoodImage');
  console.log('All donations and images have been cleared from localStorage.');
  availableFoodList.innerHTML = '';
  location.reload();
  displayDonations();
});
