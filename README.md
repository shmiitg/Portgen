## Backend 💻

Following are the steps to run the backend of the portgen on your local environment

1. Install all the required packages and dependencies.
  ```node
  npm install
  ```
2. Create a .env file in the same directory with the following configurations
  ```text
  MONGODBURL = <your mongodb url for connection>
  ```
  eg: mongodb://localhost:27017/portgen
  
3. Run the server.
  ```node
  npm start
  ```
4. [Click here](http://localhost:5000) to see the backend server running in the browser OR navigate to
  ```text
  http://localhost:5000
  ```