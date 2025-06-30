## Links

- Live [https://food-zjio.vercel.app/](https://food-zjio.vercel.app/)
- Backend [[https://github.com/anuragdw710/EventBackend]](https://github.com/hydra-Cody/EventbookingBackend)
- Frontend [https://github.com/anuragdw710/EventBooking](https://github.com/anuragdw710/EventBooking)

## BookUsNow

- A responsive event booking website built with React.js, JavaScript, and CSS. This project features seamless API integration, optimized performance, and an enhanced user experience through advanced web development techniques.

## Features

- Responsive Design: The website is fully responsive, ensuring a smooth user experience across different devices and screen sizes.
- API Integration: Integrated with external APIs to fetch and display event data dynamically.
- Performance Enhancements:
  - Shimmer Effect: Implemented shimmer loading placeholders to improve perceived load times while data is being fetched.
  - Horizontal Scrolling: Enabled horizontal scrolling to showcase event categories or featured events in a user-friendly manner.
  - Lazy Loading: Incorporated lazy loading for images and other assets to boost performance and reduce initial load times.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- JavaScript: The core scripting language used to implement functionality.
- CSS: Styling the application to ensure a visually appealing and responsive design.

Pages:

![alt](public/Screenshot.png)

![alt text](public/image.png)

![alt text](public/image-1.png)

![alt text](public/image-2.png)

![alt text](public/image-3.png)

## Setup

```
To run localy
- git clone https://github.com/anuragdw710/EventBooking.git
- cd EventBooking
- npm install
- npx parcel index.html
To build
- npm run-script build
```


## E-Ticketing Service
You've been tasked to develop a streamlined e-ticketing solution for concerts, sporting events, and theater
performances. This service aims to revolutionize the ticket purchasing process, offering a smooth and secure
way for patrons to secure their spots at sought-after events.
## Backend (Express.js)
1. Design API endpoints to manage events, each with details like name, date, time, venue, and ticket
availability.
2. Implement authentication and authorization to differentiate between regular patrons and
administrators.
3. Enable patrons to browse available events, view event details, and select specific seats.
4. Develop a secure checkout process for ticket purchase using simulated payment integration.
5. Create a dashboard for administrators to add new events, update event details, and manage ticket
inventory.
6. Allow patrons to receive email notifications for ticket confirmations and event updates.
7. Implement a mechanism to log all API requests and responses for debugging and monitoring
purposes.
8. Ensure that API endpoints are well-documented using a tool like Swagger.
9. Restrict patron access to certain actions like modifying event details or managing other patron's
bookings.

10. Set up a system to prevent multiple ticket purchases for the same seat within an event.

## Server (Node.js)
1. Establish a connection to a database to store and manage event data, patron information, and ticket
bookings.
2. Implement logic to generate unique booking references for each successful ticket purchase.
3. Design a module responsible for sending email notifications to patrons and administrators.
4. Develop a module to handle and securely store patron passwords.
5. Create a utility function to process and format event data before sending it to the frontend.
6. Implement logic to read and write data to the database asynchronously to prevent blocking operations.
7. Utilize a module for reading and writing data to log files efficiently.
8. Design a module to handle potential errors gracefully and provide informative error messages.
9. Structure the codebase using modules and functions to ensure maintainability and readability.
10. Incorporate a robust error handling mechanism to manage database connection failures gracefully.

## Frontend (React.js)
1. Develop a user-friendly interface for browsing and searching available events.
2. Create a reusable component to display event details with an interactive seat map for selection.
3. Design a secure form for patrons to register an account and manage their profiles.
4. Implement a checkout page where patrons can review their selected tickets and proceed with the
purchase.
5. Create a dynamic profile section for patrons to view their order history and download tickets.
6. Develop a mechanism to provide visual feedback to the patron during the ticket booking process.
7. Utilize a state management solution to effectively share data between components.
8. Implement smooth transitions and animations to enhance the user experience.
9. Ensure that form inputs are validated before submission to prevent invalid data from reaching the backend.
10. Design a comprehensive error handling system to gracefully display error messages to the patron.

## Database (MySQL)
1. Design a database schema to store event information, including venue details, event dates, and times.
2. Create tables to efficiently manage patron data, including encrypted passwords and contact
information.
3. Implement relationships between tables to link events, venues, patrons, and ticket bookings
effectively.
4. Define appropriate data types for each attribute in the tables, ensuring data integrity and efficiency.
5. Write queries to retrieve and filter event data based on various criteria such as date, location, or genre.
6. Develop queries to retrieve and manage patron booking information, including past and upcoming
events.
7. Implement database constraints to ensure data consistency and prevent data anomalies.
8. Optimize database queries for performance efficiency, especially for operations involving large
datasets.
9. Create indexes on relevant columns to speed up data retrieval and improve query performance.
Implement a mechanism to back up and restore the database to prevent data loss in case of system
failures.
