## Express MySQL API Readme

This README provides a detailed explanation of the provided Node.js application, which serves as an API to interact with a MySQL database using the Express framework. This API allows you to perform basic CRUD (Create, Read, Update, Delete) operations on a database table named `${process.env.TABLE_NAME}`.

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js:** Ensure you have Node.js installed on your system. If not, you can download it from [nodejs.org](https://nodejs.org/).

- **MySQL Database:** Set up a MySQL database and create a table with the name specified in your `.env` file as `${process.env.TABLE_NAME}`. The table should have columns corresponding to the fields mentioned in the API endpoint `/person`.

- **Environment Variables:** Create a `.env` file in the root directory of your project. Define the following variables in the `.env` file:

    ```
    DB_HOST=your_database_host
    DB_USER=your_database_username
    DB_PASSWORD=your_database_password
    DB_DATABASE=your_database_name
    TABLE_NAME=your_table_name
    ```

### Installation

1. **Clone the Repository:**
   
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Install Dependencies:**

   ```bash
   cd your-repository
   npm install
   ```

### Usage

1. **Run the Application:**

   ```bash
   npm start
   ```

   This will start the Express server, and it will be accessible at `http://localhost:3000`.

2. **Make Requests:**

   - **GET Request:**
     Perform a GET request to `http://localhost:3000/person` with query parameters to filter data based on the fields mentioned in the API endpoint.

     Example Request:
     ```http
     GET http://localhost:3000/person?name=John&surname=Doe
     ```

     Example Response:
     ```json
     [
       {
         "field1": "value1",
         "field2": "value2",
         // ...
       }
     ]
     ```

### API Endpoint

- **GET `/person`**

  - **Query Parameters:**

    - `name`: Filter by name
    - `surname`: Filter by surname
    - `tc`: Filter by TC number
    - `fathername`: Filter by father's name
    - `mothername`: Filter by mother's name
    - `dob`: Filter by date of birth
    - `province`: Filter by province
    - `provincedetail`: Filter by province detail
    - `mothertc`: Filter by mother's TC number
    - `fathertc`: Filter by father's TC number

  - **Example Request:**

    ```http
    GET http://localhost:3000/person?name=John&surname=Doe
    ```

  - **Example Response:**

    ```json
    [
      {
        "field1": "value1",
        "field2": "value2",
        // ...
      }
    ]
    ```

### Error Handling

- If there's a database error, the API will respond with a JSON object containing an error message and a 500 status code.

### CORS Configuration

- The API is configured to allow requests from any origin (`*`). You can modify the `corsOptions` variable in `index.js` to specify allowed origins explicitly.

### Closing the Application

- To stop the server, press `Ctrl + C` in the terminal where the server is running.

### Conclusion

You have successfully set up and used the Express MySQL API. Feel free to modify the API endpoints and database operations based on your application's requirements.

For more information on Express.js, MySQL, and CORS, refer to their respective documentation:

- [Express.js Documentation](https://expressjs.com/)
- [MySQL Node.js Documentation](https://github.com/mysqljs/mysql)
- [CORS Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

Happy coding!