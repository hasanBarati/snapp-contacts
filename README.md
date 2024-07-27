# snapp-contacts

Overview
--------

The Snapp Contacts App is a user-friendly application designed for Snapp passengers to manage and access their contacts. This app features a home page listing all contacts with a search functionality, and a detailed contact page displaying individual contact information. It also records visits to contact pages and highlights the four most recently visited contacts for quick access.

Motivation
----------

The primary motivation behind this project was to create an efficient and user-friendly contact management solution specifically tailored for Snapp passengers. By providing a seamless experience to store and access contact information, passengers can quickly connect with their friends and families without hassle.


Key Features
------------

-   **Infinite Scroll Loading**: For better performance, the app implements infinite scroll loading to prevent loading too much data at once.
-   **Search Functionality**: Easily search through contacts using the contact name or phone number.
-   **Loading Indicators**: Added loading indicators to enhance the user experience.
-   **Error Handling with TypeScript**: TypeScript is used for reduce error and type checking.
-   **Pure CSS for Styling**: The project uses pure CSS for styling, ensuring a clean and responsive design.
-   **Latest Visited Contacts**: Displays the 4 latest visited contacts on top of the list for easy access.
-   **Visit Recording**: Each time a contact detail is viewed, the visit is recorded on the client side.

Installation
------------

1.  **Clone the repository**:


    `git clone https://github.com/your-username/contact-app.git`
    
2.   **cd contact-app**:

3.  **Install dependencies**:


    `npm install`

4.  **Start the development server**:


    `npm start`

Technologies Used
-----------------

-   **React.js**: A JavaScript library for building user interfaces.
-   **Webpack**: A module bundler for JavaScript applications.
-   **Babel**: A JavaScript compiler that allows you to use next-generation JavaScript.
-   **TypeScript**: A strongly typed programming language that builds on JavaScript.
-   **Pure CSS**: For styling the application.



Usage
-----

1.  **Home Page**: Lists all contacts with infinite scroll and search functionality, showing the 4 latest visited contacts on top.
2.  **Contact Details Page**: Displays detailed information for each contact and records each visit on the client side.

What I Learned
--------------

Building this project provided valuable insights into setting up a React application from scratch using Webpack and Babel. It also emphasized the importance of efficient state management, optimizing performance with infinite scroll, and enhancing user experience through responsive design and loading indicators.

