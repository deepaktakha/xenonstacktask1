document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the default form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json(); // Parse the response

  if (res.ok) {
    // On successful login, redirect to listings page
    window.location.href = "listings.html"; 
  } else {
    // On failed login, display error message
    document.getElementById("login-message").innerText = data.message || "Something went wrong!";
  }
});
