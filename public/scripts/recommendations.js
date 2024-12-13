fetch("http://localhost:3000/recommendations")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("recommendations");
    data.forEach((recommendation) => {
      container.innerHTML += `
        <div class="property-card">
          <h3>${recommendation.title}</h3>
          <p>Price: ${recommendation.price}</p>
          <p>Location: ${recommendation.location}</p>
        </div>
      `;
    });
  })
  .catch((error) => console.error('Error fetching recommendations:', error));
