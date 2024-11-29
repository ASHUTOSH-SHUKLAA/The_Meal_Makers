const donationForm = document.getElementById('donationForm');
const foodPhotoInput = document.getElementById('foodPhoto');
const photoPreview = document.createElement('img');
donationForm.appendChild(photoPreview);
foodPhotoInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) { 
    const imageUrl = URL.createObjectURL(file);
    photoPreview.src = imageUrl; 
    photoPreview.style.maxWidth = '200px'; 
    photoPreview.style.marginTop = '10px';    
    localStorage.setItem('donatedFoodImage', imageUrl);
  }
});


donationForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const foodType = document.getElementById('foodType').value;
    const quantity = document.getElementById('quantity').value;
   const expiry = document.getElementById('expiry').value;
  const donorName = document.getElementById('donorName').value;
  const contact = document.getElementById('contact').value;
  const address = document.getElementById('address').value;
  const foodPhotoUrl = localStorage.getItem('donatedFoodImage') || '';
  const donationData = {
    foodType,
     quantity,
     expiry,
     donorName,
    contact,
    address,
    foodPhotoUrl: foodPhotoUrl
  }; 
  let donations = JSON.parse(localStorage.getItem('donations')) || [];
  donations.push(donationData);
   localStorage.setItem('donations', JSON.stringify(donations));
  alert("Your donation has been submitted successfully!"); 
  donationForm.reset();
  localStorage.removeItem('donatedFoodImage');
});
  
