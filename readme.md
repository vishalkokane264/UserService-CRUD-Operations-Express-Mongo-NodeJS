Creating Rest API's Endpoints for user service

in .env file add 2 Variables
PORT <BACKEND_RUNNING_PORT>
MONGO_URI <MONGO_URI_FROM cloud.mongodb.com database_access>

To Run the application: npm run dev


User service base url: http://localhost:7000/api
Endpoints created

Method Endpoint Desc
GET     /user       get all users
POST    /user       add new user
GET     /user/:id   get user by id
DELETE  /user/:id   delete user by id
PATCH   /user/:id   update user by id