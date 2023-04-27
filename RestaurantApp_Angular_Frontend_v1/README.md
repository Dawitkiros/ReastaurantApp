Application Features

Login

Users can login to the application using their email and password.

Authentication is done using JSON Web Tokens (JWT).

Logout

Users can logout of the application and the JWT token will be invalidated.

Pagination

Data in the application is displayed using pagination.

Users can navigate through pages to view all data.

Role Based Access

Users have roles (such as admin or regular user) which determine their access to various parts of the application.

Access to certain parts of the application is restricted based on a user's role.

Role Based Routing

Certain routes in the application are restricted based on a user's role.

Users will be redirected to a default page if they try to access a restricted route.

Soft Delete

Data in the application is not actually deleted from the database but is rather marked as deleted.

Deleted data is hidden from users but can be restored by an admin user.

Image Store Using Blob

Images uploaded by users are stored in the database using binary large object (BLOB) data type.

Conditional Rendering

Certain elements on the page are displayed or hidden based on conditions such as user role or data presence.

Search Using Pipe

Users can search for data in the application using a search bar.

The search functionality is implemented using a custom pipe.

Using Java8 Features Like Lambda Functions

The application uses some of the new features introduced in Java8 such as lambda functions and streams to make code more concise and readable.

Technologies Used

Angular

TypeScript

HTML/CSS

Java8

Spring Boot

MySQL

Getting Started

To get started with the application, follow these steps:

Clone the repository to your local machine

Set up the MySQL database and configure the application.properties file

Run the Spring Boot backend using your IDE or terminal

Run the Angular frontend using the ng serve command

Navigate to http://localhost:4200/ in your browser to access the application