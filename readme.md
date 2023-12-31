
## API Reference

#### User Schema
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `string` | **Required**. First name of user |
| `lastName`      | `string` | **Required**. Last name of user |
| `age`      | `Number` | **Required**. Age of user |



#### Setup .env file with the variables

```http
PORT:<PORT_NUMBER>
MONGO_URI:<MONGO_CONNECTION_URI_FROM_WEBSITE>
```

#### Start the application

```http
npm run dev
```
This will start the application on mongodb's successful connection on http://localhost:7000/api
 


#### Create new user

```http
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

```http
  GET /user
```
#### Get user by id

```http
  GET /user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |




#### Update user by id

```http
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

```http
  DELETE /user/${id}

  curl --location --request DELETE 'http://localhost:7000/api/user/${id}' \
--data ''
```

#### Delete users

```http
  DELETE /user

  curl --location --request DELETE 'http://localhost:7000/api/user' \
--data ''
```


https://www.youtube.com/watch?v=MwiyQsWSlc0&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=7&ab_channel=NetNinja