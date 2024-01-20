
# UserService: Express, Mongo, NodeJS



## API Reference

#### User Schema
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `string` | **Required**. First name of user |
| `lastName`      | `string` | **Required**. Last name of user |
| `age`      | `Number` | **Required**. Age of user |



#### Setup .env file with the variables

```
PORT:<PORT_NUMBER>
MONGO_URI:<MONGO_CONNECTION_URI_FROM_WEBSITE>
```

#### Start the application

```
npm run dev
```
This will start the application on mongodb's successful connection on http://localhost:7000/api
 


#### Create new user

```
  POST /user

  curl --location 'http://localhost:7000/api/user' \
--header 'Content-Type: application/json' \
--data '{
    "firstName":"visal",
    "lastName":"kokane",
    "age":30
}'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `string` | **Required**. First name of user |
| `lastName`      | `string` | **Required**. Last name of user |
| `age`      | `Number` | **Required**. Age of user |



#### Get all users

```
  GET /user
```
#### Get user by id

```
  GET /user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |




#### Update user by id

```
  PATCH /user

  curl --location --request PATCH 'http://localhost:7000/api/user/${id}' \
--header 'Content-Type: application/json' \
--data '{
    "firstName":"Vishal123"
    ,"lastName":"Kokane",
    "age":30
}'

```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to update |



#### Delete user by id

```
  DELETE /user/${id}

  curl --location --request DELETE 'http://localhost:7000/api/user/${id}' \
--data ''
```

#### Delete users

```
  DELETE /user

  curl --location --request DELETE 'http://localhost:7000/api/user' \
--data ''
```
