#Xenonstack task1
Urban Properties
A responsive real estate web application that allows users to view property listings, see detailed property pages, and leverage a user authentication system. This project integrates a modern frontend with a Node.js and MongoDB backend, supporting AI-driven property recommendations.

Table of Contents
Features
Technologies Used
Screenshots
Setup Instructions
API Documentation
Contributing
License
Features
User Authentication: Secure login/logout system.
Property Listings: View all available properties with images, prices, and locations.
Property Details Page: Access detailed information about a property upon selection.
AI-Driven Recommendations: Display suggested properties based on dummy data.
Responsive Design: Optimized for desktop and mobile devices.

Technologies Used
Frontend:
HTML5
CSS3
JavaScript (Vanilla)
Responsive Design (Flexbox & Grid)
Backend:
Node.js
Express.js
Database:
MongoDB (Mongoose ODM)
AI Logic:
Simple recommendation algorithm using dummy data.
Screenshots
Upload the following screenshots to your GitHub repository to showcase the project visually:

Login Page:

![login page](https://github.com/user-attachments/assets/f6b91f4a-1dfc-455d-a59f-5c232a840cb9)

Example:
Property Listings Page:
![property_listing_page](https://github.com/user-attachments/assets/0a3e43a4-cb5f-466c-a6e7-c168fb27f375)

Show the main property listings page, including property cards with images, titles, prices, and locations.
Example:
Property Details Page:
![property_detail](https://github.com/user-attachments/assets/f1791fca-9b3d-46f8-918a-553e21402908)

Display a detailed property page showing an image, title, price, description, and location.
Example:
AI Recommendations Page:
![Recommendation_page](https://github.com/user-attachments/assets/ff9a88bf-8323-415b-9af6-c7a7e1fb24cf)

Show the recommendations page with suggested properties.


3. Set Up MongoDB

Properties Collection:
Users Collection:

4. Run the Backend Server
Start the server to enable the backend APIs:

5. Test the Frontend
Open index.html in a browser to access the application.
Use the following test credentials for login:
Email: user1@example.com
Password: password123
API Documentation
1. Login
Endpoint: /login
Method: POST
Description: Authenticate users with email and password.
Request Body:
json
Copy code
{ "email": "deepak121@gmail.com", "password": "password123" }
Response:
Success: { "message": "Login successful" }
Failure: { "message": "Invalid credentials" }
2. Property Listings
Endpoint: /properties
Method: GET
Description: Fetch all available properties.

3. Property Details
Endpoint: /property/:id
Method: GET
Description: Fetch detailed information for a specific property by ID.
 
4. AI Recommendations
Endpoint: /recommendations
Method: GET
Description: Fetch AI-driven property recommendations.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.

Summary of Screenshots
Login Page
Property Listings Page
Property Details Page
AI Recommendations Page
These screenshots demonstrate the project’s functionality and user flow for GitHub documentation.
