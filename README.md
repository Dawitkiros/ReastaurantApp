# RestaurantApp

Restaurant App is a web application designed for managing restaurant orders and menus. It has two types of users: admin and user. Admin has full access to the system while the user has restricted access.

## Features

### Admin Features
- Add/edit/delete restaurant menu items
- View order history
- Update order status
- Manage user accounts
- View sales report
- Assign roles and permissions

### User Features
- Create and manage their own orders
- View order history
- View restaurant menu
- Edit user profile
- Submit feedback

# Application Features

The application provides the following features:

## Login
- Users can log in to the application using their email and password.
- Authentication is done using JSON Web Tokens (JWT).

## Logout
- Users can log out of the application and the JWT token will be invalidated.

## Pagination
- Data in the application is displayed using pagination.
- Users can navigate through pages to view all data.

## Role-Based Access
- Users have roles (such as admin or regular user) which determine their access to various parts of the application.
- Access to certain parts of the application is restricted based on a user's role.

## Role-Based Routing
- Certain routes in the application are restricted based on a user's role.
- Users will be redirected to a default page if they try to access a restricted route.

## Soft Delete
- Data in the application is not actually deleted from the database but is rather marked as deleted.
- Deleted data is hidden from users but can be restored by an admin user.

## Image Store Using BLOB
- Images uploaded by users are stored in the database using binary large object (BLOB) data type.

## Conditional Rendering
- Certain elements on the page are displayed or hidden based on conditions such as user role or data presence.

## Search Using Pipe
- Users can search for data in the application using a search bar.
- The search functionality is implemented using a custom pipe.

## Java 8 Features
- The application uses some of the new features introduced in Java 8 such as lambda functions and streams to make code more concise and readable.

## Technologies Used
The application was built using the following technologies:

- Front-end: HTML, CSS, JavaScript, Bootstrap, Angular, TypeScript
- Back-end: Spring Boot, Java, Web API, Postman, FakeJson, MySQL
- Authentication: JSON Web Tokens (JWT)

## Getting Started
To get started with the application, follow these steps:

1. Clone the repository to your local machine.
2. Set up the MySQL database and configure the `application.properties` file.
3. Run the Spring Boot backend using your IDE or terminal.
4. Run the Angular frontend using the `ng serve` command.
5. Navigate to `http://localhost:4200/` in your browser to access the application.

## Conclusion

The Restaurant Application is a robust and secure system for managing restaurant orders and menus. It provides a seamless user experience with intuitive UI and responsive design. With its comprehensive set of features, it is a must-have tool for restaurant owners and managers.
