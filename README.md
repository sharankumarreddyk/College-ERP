# College ERP

A simple College ERP system built with Node.js and MongoDB.

## Prerequisites

1. **MongoDB Atlas**  
   - Create a free MongoDB Atlas account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Set up a cluster and create a database user.
   - Whitelist your IP address or allow access from anywhere (`0.0.0.0/0`).
   - Obtain the connection string for your cluster.

2. **Node.js**  
   - Ensure you have Node.js installed. You can download it from the [official Node.js website](https://nodejs.org/).

3. **Git**  
   - Install Git from the [official Git website](https://git-scm.com/).

## Setup Instructions

1. **Clone the Repository**  
   Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd College-ERP
   ```

2. **Configure Environment Variables**  
   - Navigate to the `server` folder:
     ```bash
     cd server
     ```
   - Create a `.env` file in the `server` directory and add the following:
     ```properties
     CONNECTION_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     PORT=5001
     ```
     Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB Atlas credentials.

3. **Install Dependencies**  
   Install the required Node.js dependencies:
   ```bash
   npm install
   ```

4. **Run the Application**  
   Start the server:
   ```bash
   npm start
   ```

5. **Access the Application**  
   - The server will run on `http://localhost:5001` by default.
   - Use tools like [Postman](https://www.postman.com/) or your frontend to test the API.

## Additional Notes

- Ensure your MongoDB Atlas cluster is running and accessible.
- If you encounter CORS issues, check the `cors` configuration in the server code.
- For any issues, refer to the official documentation of [Node.js](https://nodejs.org/) and [MongoDB Atlas](https://www.mongodb.com/docs/atlas/).

Happy coding!