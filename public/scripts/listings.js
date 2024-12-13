fetch("http://localhost:3000/properties")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("properties");
    data.forEach((property) => {
      container.innerHTML += `
        <div class="property-card">
          <h3>${property.title}</h3>
          <p>Price: ${property.price}</p>
          <p>Location: ${property.location}</p>
        </div>
      `;
    });
  })
  .catch((error) => console.error('Error fetching properties:', error));
