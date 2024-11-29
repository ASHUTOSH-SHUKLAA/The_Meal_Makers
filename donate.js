// Get the form and input elements
const donationForm = document.getElementById('donationForm');
const foodPhotoInput = document.getElementById('foodPhoto');
const photoPreview = document.createElement('img'); // Create an img element for preview

// Append the image preview to the form (or another element)
donationForm.appendChild(photoPreview);

// Handle image file selection
foodPhotoInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    // Create a temporary URL for the selected image
    const imageUrl = URL.createObjectURL(file);
    photoPreview.src = imageUrl; // Set the src of the preview image
    photoPreview.style.maxWidth = '200px'; // Optional: set a max size for the image
    photoPreview.style.marginTop = '10px'; // Optional: add some margin

    // Store the file URL in localStorage (it will persist until the page is reloaded)
    localStorage.setItem('donatedFoodImage', imageUrl);
  }
});

// Handle form submission
donationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading the page
  
  // Get form data
  const foodType = document.getElementById('foodType').value;
  const quantity = document.getElementById('quantity').value;
  const expiry = document.getElementById('expiry').value;
  const donorName = document.getElementById('donorName').value;
  const contact = document.getElementById('contact').value;
  const address = document.getElementById('address').value;

  // Get the uploaded image URL
  const foodPhotoUrl = localStorage.getItem('donatedFoodImage') || '';

  // Create an object to store the donation data
  const donationData = {
    foodType,
    quantity,
    expiry,
    donorName,
    contact,
    address,
    foodPhotoUrl: foodPhotoUrl
  };

  // Save the donation data to localStorage
  let donations = JSON.parse(localStorage.getItem('donations')) || [];
  donations.push(donationData);
  localStorage.setItem('donations', JSON.stringify(donations));

  // Show success message
  alert("Your donation has been submitted successfully!");

  // Clear the form
  donationForm.reset();

  // Optionally, remove the image URL from localStorage after submission
  localStorage.removeItem('donatedFoodImage');
});
