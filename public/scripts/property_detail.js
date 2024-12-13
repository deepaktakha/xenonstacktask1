// Get the property ID from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const propertyId = urlParams.get('id');

// Fetch the property details from the backend
fetch(`http://localhost:3000/property/${propertyId}`)
  .then((res) => res.json())
  .then((data) => {
    // Populate the property details on the page
    document.getElementById("property-title").innerText = data.title;
    document.getElementById("property-location").innerText = `Location: ${data.location}`;
    document.getElementById("property-price").innerText = `Price: ${data.price}`;
    document.getElementById("property-description").innerText = `Description: ${data.description}`;
    // Add any additional details you want to show
  })
  .catch((error) => console.error('Error fetching property details:', error));
