## Backend 💻

Following are the steps to run the backend of the portgen on your local environment. All the backend code will go in the `backend` folder.

1. Navigate to `backend` folder.
  ```sh
  cd backend
  ```
2. Install all the required packages and dependencies.
  ```node
  npm install
  ```
3. Create a .env file in the same directory with the following configurations
  ```text
  MONGODBURL = <your mongodb url for connection>
  ```
  eg: mongodb://localhost:27017/portgen
  
4. Run the server.
  ```node
  npm start
  ```
5. [Click here](http://localhost:5000) to see the backend server running in the browser OR navigate to
  ```text
  http://localhost:5000
  ```